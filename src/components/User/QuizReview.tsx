import React from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizReviewProps {
  questions: Question[];
  userAnswers: number[];
 
}

const QuizReview: React.FC<QuizReviewProps> = ({ questions, userAnswers }) => {
  return (
    <div className="mt-4 animate-fadeInUp">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Review Your Answers</h2>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="mb-4 p-4 border rounded-lg shadow-sm bg-pink-100">
          <h3 className="text-xl font-medium mb-2 text-gray-700">{question.question}</h3>
          <ul className="list-disc ml-6">
            {question.options.map((option, oIndex) => (
              <li
                key={oIndex}
                className={`mb-1 ${
                  oIndex === question.correctAnswer ? 'text-green-600' : ''
                } ${oIndex === userAnswers[qIndex] && oIndex !== question.correctAnswer ? 'text-red-600' : ''}`}
              >
                {option}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-lg">
            Your answer: 
            <span className={`font-semibold ${userAnswers[qIndex] === question.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
              {question.options[userAnswers[qIndex]]}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuizReview;
