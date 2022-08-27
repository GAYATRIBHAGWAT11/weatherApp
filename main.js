let btn=document.getElementById('button')

let inputValue=document.getElementById('inputValue')

let name=document.getElementById('name')

let description=document.getElementById('desc')

let temperature=document.getElementById('temp')



btn.addEventListener('click',function(){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value} &appid=d9b78a321a618288e65ab6ad3513bf4d`)
.then(response=>response.json())
.then(data=>{
    let nameValue=data['name'];
    let tempValue=data['main']['temp'];
    let descvalue=data['weather'][0]['description'];

    name.innerHtml=nameValue;
    temperature.innerHTML=tempValue;
    description.innerHTML=descvalue;

})


.catch(err=>alert('wrong city name!'))
})

// &appid=d9b78a321a618288e65ab6ad3513bf4d