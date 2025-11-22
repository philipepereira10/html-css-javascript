document.addEventListener('DOMContentLoaded', () => {

    // Slider
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const container = document.querySelector('.container');
    const items = container.querySelectorAll('.list .item');
    const indicator = document.querySelector('.indicators');
    const dots = indicator.querySelectorAll('ul li');
    const list = container.querySelector('.list');

    let active = 0;
    const firstPosition = 0;
    const lastPosition = items.length - 1;

    function setSlider() {
        const itemOld = container.querySelector('.list .item.active');
        itemOld.classList.remove('active');

        const dotOld = indicator.querySelector('ul li.active');
        dotOld.classList.remove('active');
        dots[active].classList.add('active');

        indicator.querySelector('.number').innerHTML = '0' + (active + 1);
    }

    nextButton.addEventListener('click', () => {
        list.style.setProperty('--calculation', 1);
        active = (active + 1 > lastPosition) ? 0 : active + 1;
        setSlider();
        items[active].classList.add('active');
    });

    prevButton.addEventListener('click', () => {
        list.style.setProperty('--calculation', -1);
        active = (active - 1 < firstPosition) ? lastPosition : active - 1;
        setSlider();
        items[active].classList.add('active');
    });

    // Hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

});
