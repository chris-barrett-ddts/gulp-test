
const { src, dest } = require("gulp");

function mytask(callback) {
   console.log('Hello world!');
   callback(new Error('Something bad has happened'));
}

exports.mytask = mytask;
