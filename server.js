//requiring application dependencies
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const port= process.env.PORT||3000;

//configuring dotenv package
require("dotenv").config();

//setting up open weather API key
const apiKey = `${process.env.API_KEY}`;

//serving your static page from the public directory
app.use(express.static("public"));

//express app set up and body-parser configuration
app.use(bodyParser.urlencoded({ extended: true }));

//setting up the templating view engine serving ejs
app.set("view engine", "ejs");


//default display on app launch
app.get('/', (req, res)=>{
res.render("index", { weather: null, error: null  })
})

app.get('/weather', (req, res)=>{

})

//making a default post request
app.post('/', (req, res)=>{

    //city passed into the form
    let city= req.body.city

    //use city name to fetch data
    let url= 'https://community-open-weather-map.p.rapidapi.com/weather'
})
app.post('/weather', (req, res)=>{
    
})
//requesting for the data using the url
req(url, function(err, res, body){
    //checking the json data fetched on return
    if(err){
    res.render('index', {weather:null, error:'Error, Please keep trying'})
    }
    else{
        let weather= JSON.parse(body);
    }
})
console.log(weather)

if (weather.main == undefined) {
                res.render('index', { weather: null, error: 'Error, please try again' });
            } else {
                
                // we shall use the data got to set up your output
                let place = `${weather.name}, ${weather.sys.country}`,
                  /* you shall calculate the current timezone using the data fetched*/
                  weatherTimezone = `${new Date(
                    weather.dt * 1000 - weather.timezone * 1000
                  )}`;
                let weatherTemp = `${weather.main.temp}`,
                  weatherPressure = `${weather.main.pressure}`,
                  /* you will fetch the weather icon and its size using the icon data*/
                  weatherIcon = `http://community-openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
                  weatherDescription = `${weather.weather[0].description}`,
                  humidity = `${weather.main.humidity}`,
                  clouds = `${weather.clouds.all}`,
                  visibility = `${weather.visibility}`,
                  main = `${weather.weather[0].main}`,
                  weatherFahrenheit;
                weatherFahrenheit = (weatherTemp * 9) / 5 + 32;
               
               
                res.render("index", {
                    weather: weather,
                    place: place,
                    temp: weatherTemp,
                    pressure: weatherPressure,
                    icon: weatherIcon,
                    description: weatherDescription,
                    timezone: weatherTimezone,
                    humidity: humidity,
                    fahrenheit: weatherFahrenheit,
                    clouds: clouds,
                    visibility: visibility,
                    main: main,
                    error: null,
                  });
                }
        
                app.listen(port, function () {
                    console.log('Example app listening on port 3000!')
                    })
        