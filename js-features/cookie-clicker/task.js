const element = document.getElementById('cookie');
let clicker = document.getElementById('clicker__counter');
let counterValue = Number(clicker.innerHTML);

function counter () {
    clicker.innerHTML = counterValue++;
    element.style.width = '200px';
}

function change () {
    element.style.width = '300px';
}
element.addEventListener('click', counter);
element.addEventListener('mousedown', change);