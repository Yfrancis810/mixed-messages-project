function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num);
  }
  
  const knockKnockJoke = {
    who: ['Boo', 'Alpaca who?', 'Lettuce', 'Tank', 'Nobel'],
    punchline: ['Don’t cry, it’s just a joke.', 'Alpaca the suitcase, you load up the car.', 'Let us in, it’s cold out here!', 'You’re welcome, but I prefer tanks.', 'No bell, that’s why I knocked!']
  };
  
  // Store the 'joke' in an array
  let personalJoke = [];
  
  // Iterate over the object
  for (let prop in knockKnockJoke) {
    let optionIdx = generateRandomNumber(knockKnockJoke[prop].length);
  
    // use the object's properties to customize the message being added to personalJoke
    switch(prop) {
      case 'who':
        personalJoke.push(`Knock knock! "${knockKnockJoke[prop][optionIdx]}"`);
        break;
      case 'punchline':
        personalJoke.push(`"${knockKnockJoke[prop][optionIdx]}"`);
        break;
      default:
        personalJoke.push('There is not enough info.');
    }
  }
  
  function formatJoke(joke) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalJoke.join('\n');
    console.log(formatted);
  }
  
  formatJoke(personalJoke);