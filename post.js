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

var savePost =(posts) =>{
fs.writeFileSync('post-data.json',JSON.stringify(posts));

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
  savePost(posts);
  return post;
}

};


var getAll =()=>{

  console.log("get All posts");
};

var removePost =(title)=>{

  var posts =fetchPost();
var filterPosts = posts.filter((post)=> post.title!== title);
savePost(filterPosts);
return filterPosts.length !== posts.length;

};

var readPost =(title)=>{
var posts=fetchPost();
var filterPosts = posts.filter((post)=> post.title===title);

return filterPosts[0];

};

module.exports ={
  getAll,
  addPost,
  removePost,
  readPost

};
