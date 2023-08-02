const inquirer = require('inquirer');
const fs = require('fs');


function renderSvg(answers) {
  return `<?xml version="1.0" standalone="no"?>
    <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
    
      <rect x="20" y="120" width="160" height="50" fill="red"/>
    
      <circle cx="100" cy="100" r="60" fill="grey" opacity="0.5"/>
    
      <text x="10" y="10">
        ${answers.text}
      </text>
    
      <style>
        <![CDATA[
          text {
            dominant-baseline: hanging;
            font: 28px Arial, sans-serif;
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
          console.log("We made your logo. It can be found in the 'Generated' folder.");
        }
      });

  })
  .catch(error => {
    console.log(error);
    console.log('There was a problem asking questions. Ask the developer to debug.');
  });

