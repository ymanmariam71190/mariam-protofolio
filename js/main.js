// add class active to header scroll

let header = document.querySelector('header');

window.onscroll = function() {
    if (this.scrollY >= 50){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}
let linkes = document.getElementById('links');
function openCloseMenu() {
    linkes.classList.toggle('active');
}