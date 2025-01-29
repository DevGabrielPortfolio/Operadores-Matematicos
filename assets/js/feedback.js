


// criando uma variável que armazena o botão não
let button = document.getElementById('nao');
//criando variavel par armazenar a altura da página
let height = window.innerHeight - 50;
//criando variavel par armazenar a largura da página
let width = window.innerWidth - 50;

// atribuindo um evento ao bottão
button.addEventListener('mouseover', function(){
    // randomizando a posição x e y
    button.style.position = 'absolute';
    button.style.top = Math.random() * height + 'px';
    button.style.left = Math.random() * width + 'px';
})