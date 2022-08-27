let btn=document.getElementById('button')

let inputValue=document.getElementById('inputValue')

let name=document.getElementById('name')

let description=document.getElementById('desc')

let temperature=document.getElementById('temp')



btn.addEventListener('click',function(){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=50a7aa80fa492fa92e874d23ad061374`)
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

