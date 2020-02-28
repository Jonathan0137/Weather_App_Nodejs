const config = require('./config.json');
const request = require('request');
const dotenv = require('dotenv').config();

const location = process.argv[2];
var url = config.api.weatherURLwithUnits;


url=url.replace("!!!", process.env.API_Key)
url=url.replace("???", location)
url=url.replace("$$$", "metric")


if(!location){
    return console.log("Please eneter the name of the location correctly");
}

request(url, (error, response, body)=>{
    const data = JSON.parse(body)
    // console.log(data)
    console.log("It is currently " + data.main.temp + " degrees in "+ location)
})
