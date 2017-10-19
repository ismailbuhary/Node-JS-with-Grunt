console.log('Starting app.');
const fs=require('fs');
const os=require('os');
const _=require('lodash');
const yargs=require('yargs');
const posts=require('./post.js');

var filteredArray= _.uniq(['Mike','MIB',1,2,3,4,1,2,3,5]);

console.log(_.isString('Andrew'));
console.log(filteredArray);
console.log("Process",process.argv);
console.log("Yargs:",yargs.argv);

const args=yargs.argv;

console.log(os.userInfo());

var command= process.argv[2];

if(command==="read"){

var readpost =posts.readPost(args.title);
if (readpost){
console.log( `post read ${readpost.title}`);
}
else {
console.log("Post not read");

}


}

else if (command==='add'){

  var post =posts.addPost(args.title,args.body);
  if(post){
 console.log(`Post was added with the title :${post.title}`);

  }else {
console.log('Post was not added');
  }
}
else if (command==="list"){
   posts.getAll();
}
else if(command==="remove"){

var postRemoved = posts.removePost(args.title);
var message = postRemoved ? 'Post was removed' : 'Post not found';
console.log(message);
}else {
  console.log("command not recognized");
}
//fs.appendFileSync('greatings.txt','\n Hello Sulimaan');
