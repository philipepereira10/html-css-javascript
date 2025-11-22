

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

let container = document.querySelector('.container');

let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');

let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    let dotOld = indicator.querySelector('ul li.active');
    dotOld.classList.remove('active');
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerHTML = '0' + (active + 1);


}
// NEXT
nextButton.onclick = () => {

    list.style.setProperty('--calculation' , 1);

    if (active + 1 > lastPosition) {
        active = 0;
    } else {
        active = active + 1;
    }

    setSlider();

    items[active].classList.add('active');

}


// PREV
prevButton.onclick = () => {

    list.style.setProperty('--calculation' , -1);

    if (active - 1 < firstPosition) {
        active = lastPosition;
    } else {
        active = active - 1;
    }

    setSlider();

    items[active].classList.add('active');
}
