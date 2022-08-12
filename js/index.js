// go to index.html and sfter footer add a link to this file (<script src="js/index.js"></script>)


// -- GETTING TOGGLE BUTTON to rotate HAMBURGER stripes and change them into an X and make MENU appear -- //
// create a constance navToggle and designate an element from our DOM (HTML Document Object Model)
const navToggle = document.querySelector('.nav-toggle');

// -- GETTING HAMBURGER MENU to work (disappear) by clicking on menu items/links-- //
// creates a node list where it's gonna find All the '.nav__link' links
const navLinks = document.querySelectorAll('.nav__link')

// when we click on our toggle (menu button) we want to do a function (an arrow function)
// and we want to toggle a class we have not created yet called 'nav-open' by doing that 
// it's gonna mean everytime we click on our button we should add that class
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});
// to test this we go to style.css and after .nav-toggle {...} we create a class '.nav-open {background: red;}'
// and by clicking on our menu button we add that .nav-open {background: red;} class to our body itself
// that what means the line 'document.body.classList.toggle('nav-open'); and if we click on that button the color of body will be red'

// for each link inside we are gonna do a function and just like before we need to create an event listener 
// so for each link we're gonna add an event listener for a click
// and if somebody clicks once again we will do a function (an arrow function) 'link.addEventListener('click', () => {...}'
// to remove 'nav-open'. And the reason I want to simply REMOVE it instead of doing enithing else with it is 
// because it is really important - just in case we somehow get it clicked or activated when it's off screen we don' want it to somehow open
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})