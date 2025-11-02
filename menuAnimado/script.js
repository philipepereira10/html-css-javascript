const botao = document.querySelector('.botao-menu');
const menuLateral = document.querySelector('.menu-lateral');
const background = document.querySelector('.background');
const conteudo = document.querySelector('.conteudo');

botao.addEventListener('click', function() {
    // Alterna a classe "ativo" em todos os elementos relacionados
    menuLateral.classList.toggle('ativo');
    conteudo.classList.toggle('ativo');
    background.classList.toggle('ativo');
    botao.classList.toggle('ativo');

    // Muda a cor de fundo conforme o estado do menu
    document.body.style.backgroundColor = 
        menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1';// se MenuLateral conter a classe ativo se sim tem a 1 cor senao a 2 cor
});

background.addEventListener('click', function() {
     // Cancela a classe "ativo" em todos os elementos relacionados
    menuLateral.classList.remove('ativo');
    conteudo.classList.remove('ativo');
    background.classList.remove('ativo');
    botao.classList.remove('ativo');
    document.body.style.backgroundColor = "#ecf0f1"
})