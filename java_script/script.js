

document.getElementById("myAnchor").addEventListener("click", function (event) {
    event.preventDefault()
});

//btnClick fun... start

function btnClick() {

    let cityName = document.querySelector(".form-control").value;

    // geodata fetching
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29f4f9d56133ff31bff3505baabbb098`)
        .then(fromeServer => fromeServer.json())
        .then(jsonData => getdata(jsonData,cityName))
        .catch(e => console.log(e))





}
//btnClick fun... end




//   //btnClick fun... call
btnClick();


//getdata fun... start
function getdata(weather,City_name) {

   let city= City_name.toUpperCase();
  
    let Current_temperature = weather.main.temp;
    let x = Current_temperature - 273.15
    let temp = x.toFixed(1);

    let Wind_speed = weather.wind.speed;

    let Minimum_temperature = weather.main.temp_min;
    let y = Minimum_temperature - 273.15

    let mini = y.toFixed(1);

    let Maximum_temperatur = weather.main.temp_max;
    let z = Maximum_temperatur - 273.15

    let max = z.toFixed(1);


    let HtmlContents = `
        <div class='widget-container'>
          <div class='top-left'>
            <h1 class='city' id='city'>${city}</h1>
           
      <!--       <a target='_blank' href='https://codepen.io/myleschuahiock/'><p id='codepen-link'>codepen.io/myleschuahiock</p></a> -->
            <p class='geo'></p>
          </div>
          <div class='top-right'>
            <h1 id='weather-status'>Weather / Weather Status</h1>
            <img class='weather-icon' src='https://myleschuahiock.files.wordpress.com/2016/02/sunny2.png'>
          </div>
          <div class='horizontal-half-divider'></div>
          <div class='bottom-left'>
            <h1 id='temperature'>${temp}</h1>
            <h2 id='celsius'>&degC</h2>
          
           
          </div>
          <div class='vertical-half-divider'></div>
          <div class='bottom-right'>
            <div class='other-details-key'>
              <p>Wind Speed</p>
              <p>Minimum_temperature</p>
              <p>Maximum_temperatur</p>
             
            </div>
            <div class='other-details-values'>
              <p class='windspeed'>${Wind_speed} Km/h</p>
              <p class='humidity'>${mini}&degC</p>
              <p class='pressure'>${max}&degC</p>
           
            </div>
          </div>
        </div>
       
     `
    document.querySelector(".wrapper ").innerHTML = HtmlContents;


}


