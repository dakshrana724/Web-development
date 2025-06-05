
const apiKey="3bbbe091c9a2049af9dee4bc4433467e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const finput=document.querySelector(".search-btn button");
const city=document.querySelector(".search-bar input");

const weathericon=document.querySelector(".weather-image");


const spellmistake=document.querySelector(".container2");
// console.log(city)



async function weatherinfo(city){
    const apifetching= await fetch(apiUrl+city+`&appid=${apiKey}`);
    console.log(apifetching)
    var data=await apifetching.json();
    console.log(data);
    
    
    if(data.message=="city not found"){
        spellmistake.style.display="none";
        document.querySelector(".oops").style="block"
        

    }


    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".percentage").innerHTML=data.main.humidity+"%";
    document.querySelector(".speed").innerHTML=data.wind.speed+" km/h";
    
    if (data.weather[0].main=="Clear"){
       weathericon.src="clear.png";
    }
    else if (data.weather[0].main=="Clouds"){
       weathericon.src="clouds.png";
    }
    else if (data.weather[0].main=="Drizzle"){
       weathericon.src="drizzle.png";
    }
    else if (data.weather[0].main=="Mist"){
       weathericon.src="Mist.png";
    }
    else if (data.weather[0].main=="Rain"){
       weathericon.src="rain.png";
    }
    else if (data.weather[0].main=="Snow"){
       weathericon.src="snow.png";
    }
    
    spellmistake.style.display="block"
    document.querySelector(".oops").style.display="none";
}



finput.addEventListener("click",()=>{
    weatherinfo(city.value)

})

document.querySelector(".oops").style.display="none";
