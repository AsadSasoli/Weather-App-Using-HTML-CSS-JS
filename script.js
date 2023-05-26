function bttn() {
    var city = document.getElementById('city').value
    // window.location.href="main.html"
    const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location='+city+'e&format=json&u=f';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '997905fecbmsh76f09fbc71cd204p1a2c5djsn1da092752572',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    fetch(url,options)
    .then(res=>res.json())
    .then(datt =>{
        console.log(datt)
        document.getElementById('ccity').innerHTML=datt.location.city
        document.getElementById('ctxt').innerHTML=datt.current_observation.condition.text
        document.getElementById('ctem').innerHTML=datt.current_observation.condition.temperature+"°C"
        var weather = datt.current_observation.condition.text
        if (weather == "Partly Cloudy") {
            document.getElementById('cimag').src="IMG/Partly Cloudy.png"
            document.getElementById('cimag').style.width="100px"
            document.getElementById('weather-card').style.width="300px"
        }else if(weather == "Mostly Cloudy"){
            document.getElementById('cimag').src="IMG/Mostly Cloudy.png"
            document.getElementById('cimag').style.width="100px"
            document.getElementById('weather-card').style.width="300px"
        }else if(weather == "Cloudy"){
            document.getElementById('cimag').src="IMG/Partly Cloudy.png"
            document.getElementById('cimag').style.width="100px"
            document.getElementById('weather-card').style.width="300px"
        }else if(weather == "Haze"){
            document.getElementById('cimag').src="IMG/Haze.png"
            document.getElementById('cimag').style.width="100px"
            document.getElementById('weather-card').style.width="300px"
        }else if(weather == "Thunderstorms"){
            document.getElementById('cimag').src="IMG/Scattered Thunderstorms.png"
            document.getElementById('cimag').style.width="100px"
            document.getElementById('weather-card').style.width="300px"
        }else if(weather == "Rainy"){
            document.getElementById('cimag').src="IMG/Rain Cloud Storm.png"
            document.getElementById('cimag').style.width="100px"
            document.getElementById('weather-card').style.width="300px"
        }else if(weather == "Sunny"  ||weather == "Hot"){
            document.getElementById('cimag').src="IMG/Sunny.png"
            document.getElementById('cimag').style.width="100px"
            document.getElementById('weather-card').style.width="300px"
        }else if(weather == "Smoke"){
            document.getElementById('cimag').src="IMG/Smoke.png"
            document.getElementById('cimag').style.width="100px"
            document.getElementById('weather-card').style.width="300px"
        }else if(weather == "Clear"){
            document.getElementById('cimag').src="IMG/CLear.png"
            document.getElementById('cimag').style.width="100px"
            document.getElementById('weather-card').style.width="300px"
        }
        var fimage
        for(var i=1;i<=6;i++){
            if(datt.forecasts[i].text == "Partly Cloudy"){
                fimage = "IMG/Partly Cloudy.png"
            }else if(datt.forecasts[i].text == "Mostly Cloudy"){
                fimage = "IMG/Mostly Cloudy.png"
            }else if(datt.forecasts[i].text == "Cloudy"){
                fimage = "IMG/Partly Cloudy.png"
            }else if(datt.forecasts[i].text == "Haze"){
                fimage = "IMG/Haze.png"
            }else if(datt.forecasts[i].text == "Thunderstorms"){
                fimage = "IMG/Scattered Thunderstorms.png"
            }else if(datt.forecasts[i].text == "Rainy"){
                fimage = "IMG/Rain Cloud Storm.png"
            }else if(datt.forecasts[i].text == "Sunny"){
                fimage = "IMG/Sunny.png"
            }else if(datt.forecasts[i].text == "Smoke"){
                fimage = "IMG/Mostly IMG/Smoke.png"
            }else if(datt.forecasts[i].text == "Clear"){
                fimage = "IMG/CLear.png"
            }else if(datt.forecasts[i].text == "Mostly Sunny"){
                fimage = "IMG/Sunny.png"
            }else if(datt.forecasts[i].text == "Hot"){
                fimage = "IMG/Sunny.png"
            }
            document.getElementById('data').innerHTML+=`
                <div class="card">
                    <h1>${datt.forecasts[i].day}</h1>
                    <h3>${datt.forecasts[i].text}</h3>
                    <h2>Hight:<span>${datt.forecasts[i].high}°C</span></h2>
                    <h2>Low:<span>${datt.forecasts[i].low}°C</span></h2>
                    <img src="${fimage}" width="100px" height="100px">
                </div>
            `
        }
    })
    
}
