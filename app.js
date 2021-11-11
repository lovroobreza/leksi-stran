const navClose = document.querySelector('.nav-close')
const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')
const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', ()=> {
    navMenu.classList.remove('show-menu')
})

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
})

/* CHANGE HEADER */
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

