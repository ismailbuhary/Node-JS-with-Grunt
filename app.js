console.log('Starting app.');
const fs=require('fs');
const os=require('os');
const _=require('lodash');
const yargs=require('yargs');
const notes=require('./notes.js');

var filteredArray= _.uniq(['Mike','MIB',1,2,3,4,1,2,3,5])

console.log(_.isString('Andrew'));
console.log(filteredArray);
console.log("Process",process.argv);
console.log("Yargs:",yargs.argv);

const args=yargs.argv;

console.log(os.userInfo());

var command= process.argv[2];
if (command==='add'){
  notes.addNote(args.title,args.body);
}
else if (command==="list"){
   notes.getAll();
}
else if(command==="remove"){

notes.removeNotes(args.title);

}
//fs.appendFileSync('greatings.txt','\n Hello Sulimaan');
