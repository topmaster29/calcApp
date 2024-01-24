/**
 * @file index.js
 * @module index
 * @description A small command line calculator application
 * @requires module:prompt
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zarko
 * @date 2024/01/24
 * @copyright Copyright © by Zarko. All rights reserved
 */

// Internam imports
let prompt = require('./prompt');
// External imports
let path = require("path");
global.appRoot = path.resolve(process.cwd());
let rootPath = "";
let baseFileName = path.basename(
	module.filename,
	path.extname(module.filename)
);
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
				}
			}
			
		}
	}
	console.log(`END ${namespacePrefix}${functionName} function`);
}
let programRunning = false;
programRunning = true;
application();
