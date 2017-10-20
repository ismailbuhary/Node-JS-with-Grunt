

const req=require("request");

var getWeather =(lat,lon,callback)=>{
req({
url:`https://api.darksky.net/forecast/2bc3e9fdec6fd3fca32fb60166ebb2a9/${lat},${lon}`,
json:true

},(error,response,body)=>{
    
  if(!error && response.statusCode===200){

callback(undefined,{

  apprentTemp :body.currently.apparentTemperature
});
  }
  else {
  callback("unable to connect and to get data");
}
});
}
module.exports={
  getWeather
}
