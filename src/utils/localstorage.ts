// src/utils/localStorage.ts
export const saveProgress = (answers: number[]) => {
    localStorage.setItem('quiz-progress', JSON.stringify(answers));
  };
  
  export const loadProgress = (): number[] => {
    const progress = localStorage.getItem('quiz-progress');
    return progress ? JSON.parse(progress) : [];
  };
  