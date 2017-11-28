//take in process args
//make instance of gitwitch
//pass string to that instance
//console.log a returned string


let arguments = [];
let string = ""

arguments = process.argv;
arguments = arguments.slice(2);

string = arguments.join(" ");

let gitwitch;