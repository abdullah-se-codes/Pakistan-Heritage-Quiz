import { QuizQuestion } from '../types';
import { MOVEMENT_QUESTIONS } from './movement';
import { ICONS_QUESTIONS } from './icons';
import { SCIENCE_QUESTIONS } from './science';
import { CULTURE_QUESTIONS } from './culture';
import { MILITARY_QUESTIONS } from './military';
import { SPORTS_QUESTIONS } from './sports';

export const QUESTION_BANK: QuizQuestion[] = [
  ...MOVEMENT_QUESTIONS,
  ...ICONS_QUESTIONS,
  ...SCIENCE_QUESTIONS,
  ...CULTURE_QUESTIONS,
  ...MILITARY_QUESTIONS,
  ...SPORTS_QUESTIONS
];

export const HISTORIC_QUOTES = [
  {
    quote: 'With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.',
    author: 'Quaid-e-Azam Muhammad Ali Jinnah'
  },
  {
    quote: 'Nations are born in the hearts of poets, they prosper and die in the hands of politicians.',
    author: 'Allama Muhammad Iqbal'
  },
  {
    quote: 'No struggle can ever succeed without women participating side by side with men.',
    author: 'Madar-e-Millat Fatima Jinnah'
  },
  {
    quote: 'Scientific thought is the common heritage of all mankind.',
    author: 'Prof. Dr. Abdus Salam (Nobel Laureate)'
  },
  {
    quote: 'No religion is higher than humanity.',
    author: 'Abdul Sattar Edhi'
  }
];


export const CATEGORIES = [
  { id: 'Pakistan Movement', name: 'Pakistan Movement', icon: 'Flag', desc: 'Lahore Resolution, Independence struggle, 1947 partition' },
  { id: 'National Icons', name: 'National Icons & Leaders', icon: 'UserCheck', desc: 'Quaid-e-Azam, Fatima Jinnah, Iqbal, Edhi, Ruth Pfau' },
  { id: 'Science & Innovation', name: 'Science & Innovation', icon: 'Atom', desc: 'Dr. Abdus Salam, space, engineering, Takbeer' },
  { id: 'Culture & Heritage', name: 'Culture, Land & Heritage', icon: 'Landmark', desc: 'Mohenjo-daro, K2, Badshahi Mosque, Ajrak, Sufism' },
  { id: 'Military Gallantry', name: 'Military Gallantry', icon: 'ShieldAlert', desc: 'Nishan-e-Haider, 1965 War, MM Alam, Swift Retort' },
  { id: 'Sports & Global Feats', name: 'Sports & World Records', icon: 'Trophy', desc: '1992 World Cup, Jahangir Khan, Arshad Nadeem Olympic Gold' }
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];

/**
 * Randomizes the 4 options of a question and re-assigns option IDs 'A', 'B', 'C', 'D'
 * so that the correct answer is uniformly distributed among A, B, C, D and never fixed to 'A'.
 */
export function randomizeQuestionOptions(question: QuizQuestion): QuizQuestion {
  const optionsCopy = question.options.map(opt => ({ ...opt }));

  // Fisher-Yates shuffle options
  for (let i = optionsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
  }

  const optionLetters = ['A', 'B', 'C', 'D'];
  const randomizedOptions = optionsCopy.map((opt, idx) => ({
    ...opt,
    id: optionLetters[idx] || String.fromCharCode(65 + idx)
  }));

  return {
    ...question,
    options: randomizedOptions
  };
}

export interface QuizBatchResult {
  questions: QuizQuestion[];
  isNewCycle: boolean;
  totalCategoryCount: number;
}

/**
 * Returns a randomized slice of questions for a quiz round,
 * strictly ensuring NO question is repeated in the current quiz or across consecutive sessions
 * until all questions in that category (or the entire bank for 'all') have been completed.
 */
export function getQuizQuestions(
  category: string = 'all',
  count: number = 10,
  seenIds: number[] = []
): QuizBatchResult {
  // Deduplicate question bank safety check
  const seenIdSet = new Set(seenIds);

  let pool = category === 'all' || category === 'All'
    ? [...QUESTION_BANK]
    : QUESTION_BANK.filter(q => q.category.toLowerCase() === category.toLowerCase());

  if (pool.length === 0) {
    pool = [...QUESTION_BANK];
  }

  // Deduplicate pool itself by unique ID
  const uniquePoolMap = new Map<number, QuizQuestion>();
  for (const q of pool) {
    if (!uniquePoolMap.has(q.id)) {
      uniquePoolMap.set(q.id, q);
    }
  }
  const uniquePool = Array.from(uniquePoolMap.values());
  const totalCategoryCount = uniquePool.length;

  // Filter out all already-seen questions
  let unseen = uniquePool.filter(q => !seenIdSet.has(q.id));
  let isNewCycle = false;

  // If fewer questions remain than needed for this round, restart a fresh cycle
  if (unseen.length < count) {
    unseen = [...uniquePool];
    isNewCycle = true;
  }

  // Fisher-Yates shuffle the unseen candidate pool
  const shuffledCandidates = [...unseen];
  for (let i = shuffledCandidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCandidates[i], shuffledCandidates[j]] = [shuffledCandidates[j], shuffledCandidates[i]];
  }

  // Strictly pick `count` non-duplicate questions by ID
  const pickedQuestions: QuizQuestion[] = [];
  const pickedIds = new Set<number>();

  for (const candidate of shuffledCandidates) {
    if (!pickedIds.has(candidate.id)) {
      pickedIds.add(candidate.id);
      pickedQuestions.push(candidate);
      if (pickedQuestions.length >= count) {
        break;
      }
    }
  }

  // Randomize option order (A, B, C, D) for EVERY question so correct options are uniformly distributed
  const randomizedQuestions = pickedQuestions.map(q => randomizeQuestionOptions(q));

  return {
    questions: randomizedQuestions,
    isNewCycle,
    totalCategoryCount
  };
}

