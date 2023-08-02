const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      name:"text", 
      message:"What is the text for the logo?",
    },
    {
      name:"textColour", 
      message:"Enter the text colour as hexadecimal (#xxxxxx) or css colour name:",
    },
    {
      name:"shape", 
      message:"Choose a shape for the logo:",
      type: "list",
      choices: ["circle", "triangle", "square"]
    },
    {
      name:"shapeColour", 
      message:"Enter the shape colour as hexadecimal (#xxxxxx) or css colour name:",
    }
  ])
  .then(answers => {

    fs.writeFile(
      "Generated/logo.svg", 
      svg,
      {},
      error => {
        if (error) {
          console.log("An error occurred writing the logo.");
        } else {
          console.log("We made your logo. It can be found in the 'Generated' folder.");
        }
      });

  })
  .catch(error => {
    console.log(error);
    console.log('There was a problem asking questions. Ask the developer to debug.');
  });

