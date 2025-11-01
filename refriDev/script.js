let list = document.querySelectorAll('.item');
let next = document.getElementById("next");
let prev = document.getElementById("prev");


// count = 0
// 0,1,2
// 

let count = list.length 
let active = 0;

next.onclick = function() {
    let activeOld = document.querySelector('.active'); //buscar no html a classe Active
    activeOld.classList.remove('active');

    // Se o slide atual for o último (índice maior ou igual a count - 1),
    // volta para o primeiro (índice 0),
    // senão, avança para o próximo (active + 1)
    active = active >= count - 1 ? 0 : active + 1;
    list[active].classList.add('active');
}

prev.onclick = function() {
    let activeOld = document.querySelector('.active'); //buscar no html a classe Active
    activeOld.classList.remove('active');

    active = active <= 0 ? count - 1 : active - 1;
    list[active].classList.add('active');
}