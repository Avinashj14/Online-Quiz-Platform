import React, { useState, useEffect } from 'react';
import QuizResult from './QuizResult';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const quizData = localStorage.getItem('quiz');
    if (quizData) {
      setQuestions(JSON.parse(quizData));
      setUserAnswers(new Array(JSON.parse(quizData).length).fill(null));
    }
  }, []);

  const handleOptionChange = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

 

  return (
    <div className="p-8 bg-pink-100 min-h-screen"> 
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">Take Quiz</h1>
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-6 p-4 border rounded-lg shadow-sm bg-gray-100">
            <h2 className="text-xl font-medium mb-4 text-gray-700">{question.question}</h2>
            {question.options.map((option, oIndex) => (
              <label key={oIndex} className="block mb-2 text-lg text-gray-800"> 
                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  checked={userAnswers[qIndex] === oIndex}
                  onChange={() => handleOptionChange(qIndex, oIndex)}
                  className="mr-2 focus:ring-blue-500"
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Submit Quiz
        </button>
        {submitted && <QuizResult questions={questions} userAnswers={userAnswers}  />}
      </div>
    </div>
  );
};

export default Quiz;
