const config = require('./config.json');
const request = require('request');

const API_Key = 'b942a4a2b51d0b5bc823a2d128537f4e';
const location = process.argz[2];


var url = config.api.weatherURLwithUnits;
url=url.replace("!!!", API_Key)
url=url.replace("???", location)
url=url.replace("$$$", "metric")


if(!location){
    return console.log("Please eneter the name of the location correctly");
}

request(url, (error, response, body)=>{
    const data = JSON.parse(body)
    console.log(data)
    console.log("It is currently " + data.main.temp + " in "+ location)
})
