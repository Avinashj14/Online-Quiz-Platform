import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const QuizForm: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [currentOptions, setCurrentOptions] = useState<string[]>(['', '', '', '']);
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAddQuestion = () => {
    if (
      currentQuestion.trim() === '' ||
      currentOptions.some((option) => option.trim() === '') ||
      currentCorrectAnswer === null
    ) {
      setError('Please fill out all fields and select the correct answer.');
      return;
    }

    const newQuestion: Question = {
      question: currentQuestion,
      options: currentOptions,
      correctAnswer: currentCorrectAnswer,
    };

    setQuestions([...questions, newQuestion]);
    setCurrentQuestion('');
    setCurrentOptions(['', '', '', '']);
    setCurrentCorrectAnswer(null);
    setError(null);
  };

  const handleSaveQuiz = () => {
    if (questions.length === 0) {
      setError('Add at least one question before saving.');
      return;
    }
    localStorage.setItem('quiz', JSON.stringify(questions));
    setError(null);
    alert('Quiz saved successfully!');
  };

  return (
    <div className="p-8 bg-pink-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">Create a Quiz</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-gray-700">Question</label>
          <input
            type="text"
            placeholder="Enter your question here"
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
            className="input mb-4 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {currentOptions.map((option, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2 text-lg font-medium text-gray-700">Option {index + 1}</label>
              <input
                type="text"
                placeholder={`Enter option ${index + 1}`}
                value={option}
                onChange={(e) => {
                  const newOptions = [...currentOptions];
                  newOptions[index] = e.target.value;
                  setCurrentOptions(newOptions);
                }}
                className="input p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <label className="block mb-2 text-lg font-medium text-gray-700">Correct Answer</label>
          <select
            value={currentCorrectAnswer ?? ''}
            onChange={(e) => setCurrentCorrectAnswer(Number(e.target.value))}
            className="select mb-4 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select the correct answer
            </option>
            {currentOptions.map((_, index) => (
              <option key={index} value={index}>
                Option {index + 1}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddQuestion}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Add Question
          </button>
        </div>
        <button
          onClick={handleSaveQuiz}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Save Quiz
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Questions Added</h2>
          {questions.length === 0 ? (
            <p className="text-center text-gray-500">No questions added yet.</p>
          ) : (
            questions.map((question, index) => (
              <div key={index} className="mb-4 p-4 border rounded-lg shadow-sm bg-pink-200">
                <h3 className="text-xl font-medium mb-2 text-gray-700">{question.question}</h3>
                <ul className="list-disc ml-6">
                  {question.options.map((option, oIndex) => (
                    <li
                      key={oIndex}
                      className={`${
                        oIndex === question.correctAnswer ? 'text-green-600' : 'text-gray-600'
                      }`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizForm;
