
const questions = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Madrid', 'Berlin'],
      answer: 'Paris'
    },
    {
      question: 'What is the largest planet in our solar system?',
      choices: ['Venus', 'Jupiter', 'Mars', 'Mercury'],
      answer: 'Jupiter'
    },
    {
      question: 'Who is the author of the Harry Potter series?',
      choices: ['J.K. Rowling', 'Stephen King', 'George R.R. Martin', 'J.R.R. Tolkien'],
      answer: 'J.K. Rowling'
    },
    {
      question: 'What is the tallest mammal in the world?',
      choices: ['Giraffe', 'Elephant', 'Horse', 'Cow'],
      answer: 'Giraffe'
    },

    {
        question: 'Which of the following countries has the best Jollof in the World?',
        choices: ['Ghana', 'Nigeria', 'Sierra Leone', 'Cameroon'],
        answer: 'Nigeria'
      },

      {
        question: 'If 60seconds make 1minute, how many minutes make an Hour?',
        choices: ['60', '99', '24', '365'],
        answer: '60'
      },

      {
        question: 'The following are the most used Nigerian Slangs except?',
        choices: ['Omo', 'Japa', 'Innit', 'Sapa'],
        answer: 'Sapa'
      },
  ];
  
  const questionEl = document.getElementById('question');
  const choicesEl = document.getElementById('choices');
  const submitBtn = document.getElementById('submit');
  const timerEl = document.getElementById('timer');
  
  let currentQuestion = 0;
  let score = 0;
  let timer;
  
  function showQuestion() {
    const question = questions[currentQuestion];
    questionEl.textContent = question.question;
    
    while (choicesEl.firstChild) {
      choicesEl.removeChild(choicesEl.firstChild);
    }
    
    question.choices.forEach((choice) => {
      const button = document.createElement('button');
      button.textContent = choice;
      choicesEl.appendChild(button);
      button.addEventListener('click', () => {
        checkAnswer(choice);
        clearInterval(timer);
        startTimer();
      });
    });
  }
  
  function checkAnswer(choice) {
    const question = questions[currentQuestion];
    if (question.answer === choice) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }
  
  function startTimer() {
    let time = 30;
    timerEl.textContent = `Time left: ${time}`;
    timer = setInterval(() => {
      time--;
      timerEl.textContent = `Time left: ${time}`;
      if (time === 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }
  
  function endGame() {
    questionEl.textContent = `Final score: ${score}/${questions.length}`;
    choicesEl.style.display = 'none';
    submitBtn.disabled = true;
    clearInterval(timer);
  }
  
  showQuestion();
  startTimer(); 

  

  