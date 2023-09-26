let hexColors=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

let color=document.getElementById('color');
let btn=document.getElementById('btn');

// event handler in button

btn.addEventListener('click',function(){
  
  let addHash='#';
  for(let i=0; i<6; i++){
    let randomNumber=getRandomNumber()
    addHash=addHash+hexColors[randomNumber]
  }
  color.innerText=addHash;
  document.body.style.backgroundColor=addHash
  
})

// function for getting random number from array
function getRandomNumber(){
  return Math.floor(Math.random()*hexColors.length)
}