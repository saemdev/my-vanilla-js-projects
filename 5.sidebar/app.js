let btnToggle=document.querySelector('.sidebar-toggle');
let btnClose=document.querySelector('.close-btn');
let sidebar=document.querySelector('.sidebar')


btnToggle.addEventListener('click',function(){
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }else{
        sidebar.classList.add('show-sidebar')
    }
})
btnClose.addEventListener('click',function(){
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }
})