import fs from 'fs';

interface RawMCQ {
  difficulty: 'Foundation' | 'Intermediate' | 'Scholar';
  question: string;
  contextSnippet: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  funFact: string;
}

// Helper to quickly build an MCQ
export function createMCQ(
  question: string,
  contextSnippet: string,
  correctText: string,
  correctExpl: string,
  distractors: { text: string; expl: string }[],
  funFact: string,
  difficulty: 'Foundation' | 'Intermediate' | 'Scholar' = 'Intermediate'
): RawMCQ {
  const allOpts = [
    { text: correctText, isCorrect: true, explanation: correctExpl },
    ...distractors.map(d => ({ text: d.text, isCorrect: false, explanation: d.expl }))
  ];

  const letters = ['A', 'B', 'C', 'D'];
  const options = allOpts.map((opt, idx) => ({
    id: letters[idx],
    text: opt.text,
    isCorrect: opt.isCorrect,
    explanation: opt.explanation
  }));

  return {
    difficulty,
    question,
    contextSnippet,
    options,
    funFact
  };
}

export function writeCategory(
  filePath: string,
  varName: string,
  categoryName: string,
  iconName: string,
  startId: number,
  questions: RawMCQ[]
) {
  // Verify strictly that all questions in this category are unique
  const seen = new Set<string>();
  const filtered: RawMCQ[] = [];
  for (const q of questions) {
    const norm = q.question.trim().toLowerCase();
    if (!seen.has(norm)) {
      seen.add(norm);
      filtered.push(q);
    }
  }

  if (filtered.length < 105) {
    throw new Error(`Category ${categoryName} only has ${filtered.length} unique questions, expected at least 105.`);
  }

  const output = `import { QuizQuestion } from '../types';

export const ${varName}: QuizQuestion[] = [
${filtered.slice(0, 105).map((q, idx) => `  {
    id: ${startId + idx},
    category: '${categoryName}',
    categoryIcon: '${iconName}',
    difficulty: '${q.difficulty}',
    question: ${JSON.stringify(q.question)},
    contextSnippet: ${JSON.stringify(q.contextSnippet)},
    options: ${JSON.stringify(q.options, null, 6)},
    funFact: ${JSON.stringify(q.funFact)}
  }`).join(',\n')}
];
`;

  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`[SUCCESS] Wrote ${Math.min(105, filtered.length)} unique questions to ${filePath}`);
}
