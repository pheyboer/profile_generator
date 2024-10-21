const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable! :) ", (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          rl.question("Which sport is your ABSOLUTE favourite?", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(`This is your profile: ${answer1} loves listening to ${answer3} while doing/playing ${answer2}, eating ${answer5} for ${answer4}, loves ${answer6}, and is amazing at ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  }); 
});