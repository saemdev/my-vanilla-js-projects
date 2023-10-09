let modalBtn=document.querySelector('.modal-btn');
let btnClose=document.querySelector('.btn-close');
let modal=document.querySelector('.modal-container')
modalBtn.addEventListener('click',function(){
    modal.classList.add('open-modal')
})
btnClose.addEventListener('click',function(){
    modal.classList.remove('open-modal')
})