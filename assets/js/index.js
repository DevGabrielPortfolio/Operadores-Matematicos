// será preenchido com as memorias de calculo
let memoria = [];

function abrirCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.add('show');

    // Adiciona um evento para fechar ao clicar fora
    function fecharFora(event) {
        if (!card.contains(event.target) && !event.target.matches('.btn')) {
            card.classList.remove('show');
            document.removeEventListener('click', fecharFora); // Remove o evento ao fechar
        }
    }

    setTimeout(() => {
        document.addEventListener('click', fecharFora); // Adiciona o evento com delay para evitar fechamento imediato
    }, 0);
}

// Funções para cada botão que abre o respectivo card
function abrirSomar() {
    // passando o 'id' para a função que abre os cards
    abrirCard('card-soma');
}

function abrirSubtrair() {
    // passando o 'id' para a função que abre os cards
    abrirCard('card-subtracao');
}

function abrirMultiplicar() {
    // passando o 'id' para a função que abre os cards
    abrirCard('card-multiplicacao');
}

function abrirDividir() {
    // passando o 'id' para a função que abre os cards
    abrirCard('card-divisao');
}

function abrirPorcentagem() {
    // passando o 'id' para a função que abre os cards
    abrirCard('card-porcentagem');
}

function abrirPagamentoPrazo() {
    // passando o 'id' para a função que abre os cards
    abrirCard('card-pagamentoPrazo');
}

function abrirPagamentoVista() {
    // passando o 'id' para a função que abre os cards
    abrirCard('card-pagamentoVista');
}

// Função para abrir efechar a janela de memória
function abrirMemoriaCalculo() {
    const janelaMemoria = document.getElementById('janela-memoria');
    
    // Se a janela estiver escondida, mostrar
    janelaMemoria.classList.toggle('active');
    
    // adicionando evento de clique para verificar se foi clicado fora da tela
    function fecharForaMemoria(event) {
        // Verifica se o clique foi fora da janela de memória
        if (!janelaMemoria.contains(event.target)) {
            janelaMemoria.classList.remove('active'); // Fecha a janela de memória
            document.removeEventListener('click', fecharForaMemoria); // Remove o evento
        }
    }

    // Se a janela de memória foi aberta, verifica cliques fora dela
    if (janelaMemoria.classList.contains('active')) {
        setTimeout(() => {
            document.addEventListener('click', fecharForaMemoria);
        }, 0);
    }
}

function verificarNumeroValido(numero) {
    if (numero === '' || isNaN(numero)) {
        return false; // Retorna falso se não for um número válido
    }
    return true; // Retorna verdadeiro se for um número válido
}

// Função para limpar a memória
function limparMemoriaCalculo() {
    memoria.length = 0; // Limpa o array de memória
    document.getElementById('historico-memorias').innerHTML = '<p>Memória apagada.</p>';
}

function calcularSoma(){
    let num1 = document.getElementById('number1-soma').value;
    let num2 = document.getElementById('number2-soma').value;

    // Verificar se os números são válidos
    if (!verificarNumeroValido(num1) || !verificarNumeroValido(num2)) {
        alert('Valor1 ou Valor2 inválidos! Digite um número válido.');
        return;
    }

    // Realiza o cálculo da soma
    let resultado = parseFloat(num1) + parseFloat(num2);

    // Exibe o resultado e altera a visibilidade
    let divVisivel = document.getElementById('resultadoSoma');
    let resultadoTexto = document.getElementById('resultadoTextoSoma');
    divVisivel.style.display = 'block'; // Torna visível
    resultadoTexto.textContent = 'Resultado: ' + resultado;
}
