const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');


// This function makes the SVG string that will be written to the logo file

function renderSvg(answers) {

  let shapeObject;
  switch (answers.shape) {
    case "circle":
      shapeObject = new Circle();
      break;
    case "triangle":
      shapeObject = new Triangle();
      break;
    case "square":
      shapeObject = new Square();
      break;
  }

  shapeObject.setColor(answers.shapeColour);

  return `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
      ${shapeObject.render()}
    
      <text x="150" y="105" fill="${answers.textColour}">
        ${answers.text}
      </text>
    
      <style>
        <![CDATA[
          text {
            dominant-baseline: hanging;
            font: 40px "Times New Roman", serif;
            text-anchor: middle;
          }
        ]]>
      </style>
    </svg>
    `;
}


inquirer
  .prompt([
    {
      name:"text", 
      message:"What is the text for the logo?",
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        } else {
          return "Enter no more than 3 characters"
        }
      }
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
    const svgData = renderSvg(answers);

    fs.writeFile(
      "Generated/logo.svg", 
      svgData,
      {},
      error => {
        if (error) {
          console.log("An error occurred writing the logo.");
        } else {
          console.log("Generated logo.svg");
        }
      });

  })
  .catch(error => {
    console.log(error);
    console.log('There was a problem asking questions. Ask the developer to debug.');
  });

