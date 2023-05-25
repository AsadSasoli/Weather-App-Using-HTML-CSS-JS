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
        document.getElementById('ctem').innerHTML=datt.current_observation.condition.temperature+"C"
        var weather = datt.current_observation.condition.text
        if (weather == "Partly Cloudy") {
            document.getElementById('cimag').src="IMG/Partly Cloudy.png"
            document.getElementById('cimag').style.width="100px"
            document.getElementById('weather-card').style.width="300px"
        }else if(weather == "Mostly Cloudy"){
            document.getElementById('cimag').src="IMG/Mostly Cloudy.png"
            document.getElementById('cimag').style.width="100px"
            document.getElementById('weather-card').style.width="300px"
        }
        for(var i=1;i<=6;i++){
            document.getElementById('data').innerHTML+=`
                <div class="card">
                    <h1>${datt.forecasts[i].day}</h1>
                    <h3>${datt.forecasts[i].text}</h3>
                    <h2>Hight:<span>${datt.forecasts[i].high}</span></h2>
                    <h2>Low:<span>${datt.forecasts[i].low}</span></h2>
                    <img src="IMG/Partly Cloudy.png" width="100px" height="100px">
                </div>
            `
        }
    })
    
}
