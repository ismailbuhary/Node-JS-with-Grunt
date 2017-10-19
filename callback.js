var userInfo = (id,name,callback)=> {
  var user={
    id : id,
  name :name
};
callback(user);
};



userInfo('111','Vikram',(x)=>{

  console.log(x);
});
