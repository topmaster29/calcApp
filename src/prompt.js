/**
 * @file prompt.js
 * @module prompt
 * @description A simple prompt module to get input from the user using process.stdin.
 * @requires {@link https://www.npmjs.com//path|path}
 * @author Zarko
 * @date 2024/01/24
 * @copyright Copyright © by Zarko. All rights reserved
 */

let fs = require('fs');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `prompt.${baseFileName}`;
let term = 13; // carriage return 

/**
 * @function prompt
 * @description Prompts the user for some input and returns the input.
 * @param {string} ask What the prompt should display when asking the user for input. 
 * @returns {string} A string of whatever input the user gave.
 * @author Zarko
 * @date 2024/01/24
 */
function prompt(ask) {
    let functionname = prompt.name;
    console.log(`BEGIN ${namespacePrefix}${functionname} function`);
    
}