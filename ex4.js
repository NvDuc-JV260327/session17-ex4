let container = document.querySelector('.container');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let gray = document.querySelector('.gray');
yellow.addEventListener('mouseenter',function() {
    container.style.backgroundColor = 'yellow';
});
yellow.addEventListener('mouseleave',function() {
    container.style.backgroundColor = 'white';
});

green.addEventListener('mouseenter',function() {
    container.style.backgroundColor = 'green';
});
green.addEventListener('mouseleave',function() {
    container.style.backgroundColor = 'white';
});

gray.addEventListener('mouseenter',function() {
    container.style.backgroundColor = 'gray';
});
gray.addEventListener('mouseleave',function() {
    container.style.backgroundColor = 'white';
});
