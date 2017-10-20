console.log("Starting geocode");
const request = require("request");
const geocodeAddress=(address,callback)=>{
var uri =encodeURIComponent(address);
request({
url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+uri+'&key=AIzaSyCgTiwry9J-iuxvOVhSTt6LY0EcNzwEtec',
json :true
},(error,response,body)=>{
  if(error || body.status==="ZERO_RESULTS"){

    callback('unable to connect to server');
  }
  else if(body.status==="OK"){
callback(undefined,{
  address: body.results[0].formatted_address ,
latitude: body.results[0].geometry.location.lat,
longitude:body.results[0].geometry.location.lng

});


}
//  var info = JSON.parse(body);

});
};

module.exports={
geocodeAddress

};
