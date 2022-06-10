$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Вопрос %current из %total',
  questions: [
    {
      'q': 'Вам больше 18 лет?',
      'options': [
        'Да',
        'Нет'
      ],
      'correctIndex': 0,
      'correctResponse': 'Вам подходят курсы для взрослых',
      'incorrectResponse': 'Вам подходят курсы для дошкольников и школьников'
    },
    {
      'q': 'Какое направление вам интересно',
      'options': [
        'Иностраные языки',
        'Excel, веб-дизайн, IT-технологии',
        '1C для делопроизводства'
      ],

      'correctResponse': 'Correct! Sounds more complicated than it really is.',
      'incorrectResponse': 'Интересно...'
    },
    {
      'q': 'В какой полвине дня вам удобней заниматься?',
      'options': [
        'В первой',
        'Во второй'
      ],
      'correctResponse': 'You\'re a genius! You just set allowIncorrect to true.',
      'incorrectResponse': ''
    },
    {
      'q': 'How do you specify the questions and answers?',
      'options': [
        'MySQL database',
        'In the HTML',
        'In the javascript configuration'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Refer to the documentation for the structure.',
      'incorrectResponse': 'Wrong! Do it in the javascript configuration. You might need to read the documentation.'
    }
  ]
});
