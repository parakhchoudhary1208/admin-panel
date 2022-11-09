const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click',() => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click',() => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-themes-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

var openBtn = document.querySelector("#openBtn");
const close = document.querySelector("#close");
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'grid';
}

close.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
}

modal.addEventListener('click',function(e){
    if(e.target.classList.contains('modal')){
        closeModal();
    }
})



