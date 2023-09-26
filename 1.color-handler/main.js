
let colorNameArray=['red','blue','green','yellow'];

let color=document.getElementById('color');
let btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    let randomNumber=getColors()
    // console.log(randomNumber)
    color.innerText=colorNameArray[randomNumber];
    document.body.style.backgroundColor=colorNameArray[randomNumber]
    
})

function getColors(){
   return Math.floor(Math.random()*colorNameArray.length) 
}
