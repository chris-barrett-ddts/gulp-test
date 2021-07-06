// Import the filesystem module
const fs = require('fs');

// Get the current filenames
// before the function
getCurrentFilenames();
console.log("\nFile Contents of example_file:",
fs.readFileSync("example_file.txt", "utf8"));

// Copying the file to a the same name
fs.copyFile("example_file.txt", "./app/copied_file.txt", (err) => {
if (err) {
	console.log("Error Found:", err);
}
else {

	// Get the current filenames
	// after the function
	getCurrentFilenames();
	console.log("\nFile Contents of copied_file:",
	fs.readFileSync("./app/copied_file.txt", "utf8"));
}
});

// Function to get current filenames
// in directory
function getCurrentFilenames() {
console.log("\nCurrent filenames:");
fs.readdirSync(__dirname).forEach(file => {
	console.log(file);
});
}
