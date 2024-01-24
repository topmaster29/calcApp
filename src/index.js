/**
 * @file index.js
 * @module index
 * @description A small command line calculator application
 * @requires module:myMath
 * @requires module:prompt
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zarko
 * @date 2024/01/24
 * @copyright Copyright © by Zarko. All rights reserved
 */

// Internal imports
let myMath = require('./myMath');
let prompt = require('./prompt');
// External imports
let path = require("path");
global.appRoot = path.resolve(process.cwd());
let rootPath = "";
let baseFileName = path.basename(module.filename,path.extname(module.filename));
let namespacePrefix = `application.${baseFileName}`;

/**
 * @function application
 * @description This is the main program loop, the init for the entire application.
 * @returns {void}
 * @author Zarko
 * @date 2024/01/24
 */
function application() {
	let functionName = application.name;
	let argumentDriveInterface = false;
	let commandInput, commandResult;
	let inputData1 = 0;
	let inputData2 = 0;
	console.log(`BEGIN ${namespacePrefix}${functionName} function`);
	console.log(`BEGIN main program loop`);
	console.log("BEGIN command parser");
	if (argumentDriveInterface === false) {
		while (programRunning) {
			commandInput = prompt.prompt("Enter a math operation: ");

			if (commandInput !== undefined) {
				if (
					commandInput.toUpperCase().trim() === "EXIT" ||
					commandInput.toUpperCase().trim() === "QUIT" ||
					commandInput.toUpperCase().trim() === "Q" ||
					commandInput.toUpperCase().trim() === "X"
				) {
					console.log("END command Parser");
					programRunning = false;
					console.log("END main program loop");
					console.log("Exiting, Good bye, have a nice day & stay safe!");
				} else if (commandInput.toUpperCase().trim() === 'ADD') {
					inputData1 = getUserInput('Enter the first number to add: ');
					inputData2 = getUserInput('Enter the second number to add: ');
					let addResult = myMath.add(inputData1, inputData2);
					console.log(`sum is: ${addResult}`);
				}
			}
			
		}
	}
	console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function getUserInput
 * @description Gets an input number from the user and validates that it is an number.
 * @param {string} message The string message to query the user for input.
 * @returns {integer} An inteer value converted from the user input.
 * @author Zarko
 * @date 2024/01/24
 */
function getUserInput(message) {
    let functionName = getUserInput.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`message is: ${message}`)
    let returnData = 0;
	let inputData;
	let validInputString = false;
    while (!validInputString) {
		inputData = prompt.prompt(message);
		if (!isNaN(parseInt(inputData))) {
			validInputString = true;
			returnData = parseInt(inputData);
		}
	}
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
}

let programRunning = false;
programRunning = true;
application();
