import React, { useState } from 'react';
import styles from './Quiz.module.css';

const questions = [
    {
      id: 1,
      question: 'Сколько будет 2+2?',
      options: ['2', '4', '6', '8'],
      correctAnswer: '4'
    },
    {
      id: 2,
      question: 'Сколько будет 5+7?',
      options: ['10', '12', '14', '16'],
      correctAnswer: '12'
    },
    {
      id: 3,
      question: 'Сколько будет 10-3?',
      options: ['5', '6', '7', '8'],
      correctAnswer: '7'
    },
    {
      id: 4,
      question: 'Сколько будет 8*4?',
      options: ['24', '32', '36', '40'],
      correctAnswer: '32'
    },
    {
      id: 5,
      question: 'Сколько будет 27/3?',
      options: ['6', '7', '8', '9'],
      correctAnswer: '9'
    },
    {
      id: 6,
      question: 'Сколько будет 6*5-4*3?',
      options: ['10', '18', '22', '24'],
      correctAnswer: '18'
    },
    {
      id: 7,
      question: 'Сколько будет корень из 16?',
      options: ['2', '4', '6', '8'],
      correctAnswer: '4'
    },
    {
      id: 8,
      question: 'Сколько будет 3 в степени 4?',
      options: ['9', '27', '64', '81'],
      correctAnswer: '81'
    },
    {
      id: 9,
      question: 'Сколько будет 2*2*2*2*2*2*2*2*2*2?',
      options: ['1024', '2048', '4096', '8192'],
      correctAnswer: '1024'
    },
    {
      id: 10,
      question: 'Сколько будет 9+8-6*4/2?',
      options: ['-4', '-3', '4', '11'],
      correctAnswer: '-3'
    }
  ];
  

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestionClick = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer('');
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuizClick = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className={styles.quiz}>
      {showResult ? (
        <div className={styles.result}>
          <h2>Результаты теста</h2>
          <p>Вы ответили правильно на {score} из {questions.length} вопросов</p>
          <button onClick={handleRestartQuizClick}>Начать заново</button>
        </div>
      ) : (
        <div className={styles.question}>
          <h2>{questions[currentQuestion].question}</h2>
          <div className={styles.options}>
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`${styles.option} ${
                  selectedAnswer === option ? styles.selected : ''
                }`}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className={styles.nextButton}
            disabled={!selectedAnswer}
            onClick={handleNextQuestionClick}
          >
            Следующий вопрос
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
