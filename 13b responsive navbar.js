const toggleButton=document.getElementsByClassName('toggle-button')[0]
const navbarLinks=document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')  /*this javascript will help you to enable home,contact,user when we click the 3 button on top of site*/
})