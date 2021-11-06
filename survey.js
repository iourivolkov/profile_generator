
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (name) => { // 1
  rl.question("What's an activity you like doing? ", (activity) => { // 2
    rl.question("What do you listen to while doing that? ", (music) => { // 3
      rl.question("Which meal is your favourite? ", (meal) => { // 4
        rl.question("What's your favourite thing to eat for that meal? ", (food) => { // 5
          rl.question("Which sport if your absolute favourite? ", (sport) => { // 6
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => { // 7
            

            console.log(`Your name is ${name}.`) // 1
            console.log(`Your favorite activity is ${activity}.`) // 2
            console.log(`You listen to ${music} while doing ${activity}.`) // 3
            console.log(`Your favourite meal is ${meal}.`) // 4
            console.log(`Your favourite thing to eat is ${food}.`) // 5
            console.log(`Your absolute favourite sport is ${sport}.`)  // 6
            console.log(`You are amazing at ${superpower}.`) // 7
            rl.close();
                 
            });
          });
        });
      });
    });
  });
});
