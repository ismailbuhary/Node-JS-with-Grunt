console.log("stating app..");

var req=require("request");
var darksky = require("./weather.js");

const geocode = require('./geocode/geocode.js');

var args=require('yargs')
    .usage('--address [args]')
    .option({
        a:{
            demand:true,
            alias:'address',
            describe:'Address to fetch weather for',
            String:true

        }

    })
    .help()
    .argv;


geocode.geocodeAddress(args.address,(errMsg,results)=>{

  if(errMsg){
    console.log('error');

  }
    else{
console.log(JSON.stringify(results,undefined,2));
    darksky.getWeather(results.latitude,results.longitude,(err,weatherResults)=>{
            if(err){
              console.log("unable to find results");
            }
              else{

              console.log(JSON.stringify(weatherResults,undefined,2));
              }
        });
  }});












//
