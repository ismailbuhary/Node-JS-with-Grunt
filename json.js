var fs=require('fs');




var obj ={
  name:'Andrew'
};

var stringObj =JSON.stringify(obj);
console.log(stringObj);

var personInfo ='{"name":"Sulimaan","age":25}';

var person =JSON.parse(personInfo);


fs.writeFileSync('notes.json',stringObj);
console.log(person);


var noteString= fs.readFileSync('notes.json');
var note =JSON.parse(noteString);
console.log(typeof note);
console.log(note.name);
