//Menu button action
let menuButton = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuButton.onclick = () => {
    menuButton.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

window.onscroll = () => {
    menuButton.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

//Scroll Effect
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-bio h1, .about-resume', { origin: 'left'});
ScrollReveal().reveal('.home-bio p', {origin: 'right'});
ScrollReveal().reveal('.home-bio, heading', {origin: 'top'});
ScrollReveal().reveal('.profile-pic, .about-items, .learning-items, .form', {origin: 'bottom'});

//Typing animation
const animType = new Typed ('.animated-text',{
    strings: ['CICT Student','Gamer', 'Anime Lover', 'K-Pop Fan'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true
});