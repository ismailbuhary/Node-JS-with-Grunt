const fs=require('fs');

console.log("Starting notes...");

module.exports ={
  addNote,
  getAll
}



var  addNote =(title,body) => {

  var notes=[];
  var note ={
    title,
    body
  };

notes.push(note);
fs.WritefileSync('notes-data.json',JSON.stringify(notes));
};


var getAll =()=>{

  console.log("get All");
};

var remove =(title)=>{

  console.log("removing",title);
};
