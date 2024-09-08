const apiKey="d1a5473423cb8869da94a45b1ca06c4c";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=d1a5473423cb8869da94a45b1ca06c4c&q=";
const searchbox=document.querySelector(".input");
const searchbtn=document.querySelector(".searchimg");

async function checkweather(city){
    const response=await fetch(apiURL+ city);
    var data= await response.json();
    console.log(data);
    if(response.status=="404"){
        document.querySelector(".error").style.display="block";
        document.querySelector(".mainshit").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";
        document.querySelector(".mainshit").style.display="block";
    }
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidityper").innerHTML=data.main.humidity+"%";
    document.querySelector(".windspeed").innerHTML=data.wind.speed+" kmph";
    if(data.weather[0].main=="Rain" || data.weather[0].main=="Drizzle"){
        document.querySelector(".weatherimg").src="drizzle.png";
        document.querySelector(".weatherimg").style.height="100px";
        document.querySelector(".weatherimg").style.margin="50px";
    }
    else if(data.weather[0].main=="clear"){
        document.querySelector(".weatherimg").src="clear.webp";
    }    
    else if(data.weather[0].main=="clouds"){
        document.querySelector(".weatherimg").src="weather2.png";
    }
    else if(data.weather[0].main=="mist"){
        document.querySelector(".weatherimg").src="mist.png";
        document.querySelector(".weatherimg").style.height="100px";
        document.querySelector(".weatherimg").style.margin="50px";
    }
    else if(data.weather[0].main=="snow"){
        document.querySelector(".weatherimg").src="snow.png";
        document.querySelector(".weatherimg").style.height="100px";
        document.querySelector(".weatherimg").style.margin="50px";
    }
    else{
        document.querySelector(".weatherimg").src="weather.webp";
    }
    // document.querySelector(".mainshit").style.display="block";
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})
searchbtn.addEventListener("keypress", (event)=>{
    if(event.key=="Enter")
    {checkweather(searchbox.value);}
})