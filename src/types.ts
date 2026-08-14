export type QuestionCategory =
  | 'Pakistan Movement'
  | 'National Icons'
  | 'Science & Innovation'
  | 'Culture & Heritage'
  | 'Military Gallantry'
  | 'Sports & Global Feats';

export interface QuizOption {
  id: string; // 'A' | 'B' | 'C' | 'D'
  text: string;
  isCorrect: boolean;
  explanation: string; // Detailed historical context explaining why this option is correct or its significance
}

export interface QuizQuestion {
  id: number;
  category: QuestionCategory;
  categoryIcon: string;
  difficulty: 'Foundation' | 'Intermediate' | 'Scholar';
  question: string;
  contextSnippet?: string;
  options: QuizOption[];
  funFact?: string;
}

export interface UserAnswerRecord {
  questionId: number;
  selectedOptionId: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export type QuizViewMode = 'landing' | 'quiz' | 'results' | 'review';

export interface QuizSettings {
  questionCount: number; // 10
  soundEnabled: boolean;
  categoryFilter: QuestionCategory | 'All';
}
