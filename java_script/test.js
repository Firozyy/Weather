let cityName="delhi";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29f4f9d56133ff31bff3505baabbb098`)
        .then(fromeServer => fromeServer.json())
        .then(jsonData => getdata(jsonData))
        .catch(e => console.log(e))
function getdata(weather) {
    // let City_name = weather
    
    console.log(weather);
   


}
