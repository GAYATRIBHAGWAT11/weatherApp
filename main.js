let btn=document.getElementById('button')

let inputValue=document.getElementById('inputValue')

let name=document.getElementById('name')

let description=document.getElementById('desc')

let temperature=document.getElementById('temp')

let humidityValue=document.getElementById('humidity')



btn.addEventListener('click',function(){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value} &appid=d9b78a321a618288e65ab6ad3513bf4d`)
.then(response=>response.json())
.then(data=>{
    let nameValue=`Temp: ${data['name']}`;
    let tempValue=`${data['main']['temp']} °C`;
    let humidity=`humidity: ${data['main']['humidity']}`;
    let descvalue=data['weather'][0]['description'];

    name.innerHtml=nameValue;
    temperature.innerHTML=tempValue;
    humidityValue.innerHTML=humidity;
    description.innerHTML=descvalue;

})


.catch(err=>alert('wrong city name!'))
})

// &appid=d9b78a321a618288e65ab6ad3513bf4d

