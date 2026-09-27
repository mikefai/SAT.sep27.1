export type TrapType = 
  | 'Too Extreme' 
  | 'Opposite' 
  | 'Out of Scope' 
  | 'True But Irrelevant' 
  | 'Sound-Alike / Distractor' 
  | 'Secondary Definition' 
  | 'Reverse Causality' 
  | 'Half Right / Half Wrong'
  | 'Right Passage, Wrong Author'
  | 'Accurate Chart Data, Wrong Argument'
  | 'The Hollywood Twist'
  | 'Unmentioned Assumption'
  | 'Content vs. Function Confusion'
  | 'Half-Passage Trap'
  | 'Percentages vs. Absolute Numbers'
  | 'Generic Debate Trap';

export interface ChoiceOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  isCorrect: boolean;
  trapType?: TrapType;
  fatalFlawReason: string; // The provable objective reason why it's wrong (or why it's right)
}

export interface SATQuestion {
  id: string;
  archetypeId: string;
  archetypeTitle: string;
  title: string;
  passageTitle?: string;
  passage: string;
  chartData?: {
    title: string;
    headers: string[];
    rows: (string | number)[][];
    caption?: string;
  };
  questionStem: string;
  maskedWordIndex?: number; // Optional index for Words in Context blank
  targetWord?: string;
  options: ChoiceOption[];
  expertWalkthrough: string;
}

export interface MockExamQuestion extends SATQuestion {
  cheatWalkthrough: {
    fingerCoverPrediction: string;
    scopeAnalysis: string;
    optionTraps: {
      optionId: 'A' | 'B' | 'C' | 'D';
      trapName: string;
      reasoning: string;
    }[];
  };
}

export type ExamMode = 'guided' | 'strict';

export interface QuestionArchetype {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  iconName: string;
  theIssue: string;
  theMethod: string;
  methodSteps: { step: string; detail: string }[];
  trapsToFlag: { name: string; description: string; example: string }[];
  proTip: string;
  questions: SATQuestion[];
}

export interface TrapDetectorItem {
  id: string;
  passage: string;
  questionStem: string;
  choiceToAnalyze: {
    id: 'A' | 'B' | 'C' | 'D';
    text: string;
  };
  correctTrap: TrapType;
  trapOptions: TrapType[];
  explanation: string;
}

export interface VocabPredictorItem {
  id: string;
  passage: string;
  targetWordBlank: string; // Word replaced by [ _____ ]
  contextClues: string[];
  transitionDirection: string;
  suggestedPredictions: string[];
  choices: ChoiceOption[];
}

export interface TurkishCognateItem {
  englishWord: string;
  satMeaning: string;
  turkishCognate: string;
  turkishMeaning: string;
  satExample: string;
  turkishBridgeTip: string;
}

export interface SecondaryDefinitionItem {
  word: string;
  primaryMeaning: string;
  satSecondaryMeaning: string;
  satExample: string;
  turkishComparison: {
    turkishWord: string;
    turkishSecondaryUsage: string;
    bridgeExplanation: string;
  };
}

export interface TransitionSignalGroup {
  category: 'Contrast / Turn' | 'Cause & Effect' | 'Concession / Nuance' | 'Amplification / Addition';
  badgeColor: string;
  signals: {
    word: string;
    function: string;
    example: string;
  }[];
}

export interface QuestionStemTranslation {
  rawStem: string;
  plainEnglish: string;
  mindsetKey: string;
}
