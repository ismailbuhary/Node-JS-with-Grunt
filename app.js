console.log('Starting app.');
const fs=require('fs');
const os=require('os');
const _=require('lodash');
const yargs=require('yargs');
const posts=require('./post.js');

var filteredArray= _.uniq(['Mike','MIB',1,2,3,4,1,2,3,5])

console.log(_.isString('Andrew'));
console.log(filteredArray);
console.log("Process",process.argv);
console.log("Yargs:",yargs.argv);

const args=yargs.argv;

console.log(os.userInfo());

var command= process.argv[2];
if (command==='add'){
  posts.addPost(args.title,args.body);
}
else if (command==="list"){
   posts.getAll();
}
else if(command==="remove"){

posts.removeNotes(args.title);

}
//fs.appendFileSync('greatings.txt','\n Hello Sulimaan');
