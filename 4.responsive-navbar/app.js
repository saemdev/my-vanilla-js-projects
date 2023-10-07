let navToggle=document.querySelector('.nav-toggle');
let menus=document.querySelector('.menus');

navToggle.addEventListener('click',function(){
    if(menus.classList.contains('show-links')){
        menus.classList.remove('show-links')
    }else{
        menus.classList.add('show-links')
    }
})
