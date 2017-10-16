const fs=require('fs');

console.log("Starting notes...");

var fetchPost = () =>{
  try{
var poststr =fs.readFileSync('post-data.json');
return JSON.parse(poststr);
     }
     catch(e){
        return [];
     }

};

var savePost =() =>{

};




var  addPost =(title,body) => {

  var posts=fetchPost();
  var post ={
    title,
    body
  };


var dupPost= posts.filter((post) =>{
  return post.title===title;
});
if(dupPost.length===0){

 posts.push(post);
  fs.writeFileSync('post-data.json',JSON.stringify(posts));

}
};


var getAll =()=>{

  console.log("get All posts");
};

var remove =(title)=>{

  console.log("removing",title);
};

module.exports ={
  getAll,
  addPost,
  remove

};
