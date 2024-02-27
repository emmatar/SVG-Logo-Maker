const { Shape } = require('./lib/shapes.js');
const inquirer = require('inquirer');
const fs = require('fs');

const init = () => {
    inquirer.prompt([
        {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo:',
        choices: ['Circle','Triangle','Square']
        },
        {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color:'
        },
        {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo. (Must be 3 characters or less)'
        },
        {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color:'
        }
    ]).then((response) => {
        let svg;
        if(response.shape === 'Circle'){
            svg = new Shape(response.shapeColor, response.text, response.textColor)
        } else if(response.shape === 'Triangle'){
            svg = new Shape(response.shapeColor, response.text, response.textColor)
        } else if(response.shape === 'Square'){
            svg = new Shape(response.shapeColor, response.text, response.textColor)
        }
        fs.writeFileSync('./examples/logo.svg', svg.render())
        console.log(`Generated logo.svg`);
    })
}

init();