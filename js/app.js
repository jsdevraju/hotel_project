const navbar = document.querySelector('.nav_item ul');
const handleMenu = document.querySelector('.hand_menu');

handleMenu.addEventListener('click', () =>{
    navbar.classList.toggle('active')
})