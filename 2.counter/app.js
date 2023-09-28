let count=0;
let value=document.querySelector('#value');
let buttons=document.querySelectorAll('.btn');

buttons.forEach(function(btn){
  btn.addEventListener('click',function(current){
   let styles= current.currentTarget.classList;
    if(styles.contains('increment')){
      count=count+1;
      
    }
    else if(styles.contains('decrement')){
      count=count-1;
    }
    else{
      count=0;
    }
    if(count<0){
      value.style.color='red'
    }
    else if(count>0){
      value.style.color='green'
    }
    else{
      value.style.color='cadetblue'
    }
    value.innerText=count;
  })
})

