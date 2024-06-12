import React, { useState } from 'react';
import QuizReview from './QuizReview';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizResultProps {
  questions: Question[];
  userAnswers: number[];
}

const QuizResult: React.FC<QuizResultProps> = ({ questions, userAnswers }) => {
  const score = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  const [showReview, setShowReview] = useState(false);

  const toggleReview = () => {
    setShowReview(!showReview);
  };

  const handleClose = () => {
    window.location.href = '/'; // Redirect to the main page
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all sm:max-w-lg sm:w-full sm:mx-auto animate-fadeInDown">
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-6 text-center text-green-600">
            Your Score: {score} / {questions.length}
          </h2>
          {!showReview && (
            <div className="flex justify-center">
              <button
                onClick={toggleReview}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Review Answers
              </button>
            </div>
          )}
          {showReview && (
            <>
              <QuizReview questions={questions} userAnswers={userAnswers} />
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleClose}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
