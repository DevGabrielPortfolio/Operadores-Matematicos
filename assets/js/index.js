// será preenchido com as memorias de calculo
let memoria = [];

function abrirCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.add('show');

    function fecharFora(event) {
        if (!card.contains(event.target) && !event.target.matches('.btn')) {
            card.classList.remove('show');
            document.removeEventListener('click', fecharFora);

            // Esconder todas as divs de resultados
            let resultados = document.getElementsByClassName('resultados');
            for (let i = 0; i < resultados.length; i++) {
                resultados[i].style.display = 'none';
            }

            // Limpar todos os inputs da classe 'valores'
            let inputs = document.getElementsByClassName('valores');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            }
        }
    }

    setTimeout(() => {
        document.addEventListener('click', fecharFora);
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

    // Atualiza o histórico de memória ao abrir
    atualizarMemoriaCalculo();
    atualizarMemoriaCalculoPagamentoPrazo();
    atualizarMemoriaCalculoPagamentoVista();

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

// Função para atualizar o histórico na tela
function atualizarMemoriaCalculo() {
    const historicoMemorias = document.getElementById('historico-memorias');

    if (memoria.length === 0) {
        historicoMemorias.innerHTML = '<p>Nenhuma operação realizada ainda.</p>';
    } else {
        historicoMemorias.innerHTML = memoria.map(item => `
            <div>
                <p><strong>OPERAÇÃO:</strong> ${item.operacao}</p>
                <p><strong>CONTA:</strong> ${item.conta}</p>
                <p><strong>RESULTADO:</strong> ${item.resultado}</p>
                <hr>
            </div>
        `).join('');
    }
}

function atualizarMemoriaCalculoPagamentoPrazo() {
    const historicoMemorias = document.getElementById('historico-memorias');

    if (memoria.length === 0) {
        historicoMemorias.innerHTML = '<p>Nenhuma operação realizada ainda.</p>';
    } else {
        historicoMemorias.innerHTML = memoria.map(item => `
            <div>
                <p><strong>OPERAÇÃO:</strong> ${item.operacao}</p>
                <p><strong>PERCENTUAL:</strong> ${item.porcentagem}</p>
                <p><strong>ACRÉSCIMO:</strong> ${item.acrescimo}</p>
                <p><strong>CONTA:</strong> ${item.conta}</p>
                <p><strong>RESULTADO:</strong> ${item.resultado}</p>
                <hr>
            </div>
        `).join('');
    }
}

function atualizarMemoriaCalculoPagamentoVista() {
    const historicoMemorias = document.getElementById('historico-memorias');

    if (memoria.length === 0) {
        historicoMemorias.innerHTML = '<p>Nenhuma operação realizada ainda.</p>';
    } else {
        historicoMemorias.innerHTML = memoria.map(item => `
            <div>
                <p><strong>OPERAÇÃO:</strong> ${item.operacao}</p>
                <p><strong>PERCENTUAL:</strong> ${item.porcentagem}</p>
                <p><strong>DESCONTO:</strong> ${item.acrescimo}</p>
                <p><strong>CONTA:</strong> ${item.conta}</p>
                <p><strong>RESULTADO:</strong> ${item.resultado}</p>
                <hr>
            </div>
        `).join('');
    }
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

    memoria.push({
        operacao: 'SOMA',
        conta: `${num1} + ${num2}`,
        resultado: resultado
    });
}

function limparSoma(){
    document.getElementById('number1-soma').value = '';
    document.getElementById('number2-soma').value = '';

    document.getElementById('resultadoSoma').style.display = 'none';
    document.getElementById('resultadoTextoSoma').textContent = '';
}


function calcularSubtracao(){
    let num1 = document.getElementById('number1-subtracao').value;
    let num2 = document.getElementById('number2-subtracao').value;

    if(!verificarNumeroValido(num1) || !verificarNumeroValido(num2)){
        alert('Valor01 ou Valor02 inválidos! Digite um número válido.');
        return;
    }

    let resultado = parseFloat(num1) - parseFloat(num2);

    let divVisivel = document.getElementById('resultadoSubtracao');
    let resultadoTexto = document.getElementById('resultadoTextoSubtracao');
    divVisivel.style.display = 'block'; // Torna visível
    resultadoTexto.textContent = 'Resultado: ' + resultado;

    memoria.push({
        operacao: 'SUBTRAÇÃO',
        conta: `${num1} - ${num2}`,
        resultado: resultado
    });
}

function limparSubtracao(){
    document.getElementById('number1-subtracao').value = '';
    document.getElementById('number2-subtracao').value = '';

    document.getElementById('resultadoSubtracao').style.display = 'none';
    document.getElementById('resultadoTextoSubtracao').textContent = '';
}

function calcularMultiplicacao(){
    let num1 = document.getElementById('number1-multiplicacao').value;
    let num2 = document.getElementById('number2-multiplicacao').value;

    if(!verificarNumeroValido(num1) || !verificarNumeroValido(num2)){
        alert('Valor01 ou Valor02 inválidos! Digite um número válido.');
        return;
    }

    let resultado = parseFloat(num1) * parseFloat(num2);

    let divVisivel = document.getElementById('resultadoMultiplicacao');
    let resultadoTexto = document.getElementById('resultadoTextoMultiplicacao');
    divVisivel.style.display = 'block'; // Torna visível
    resultadoTexto.textContent = 'Resultado: ' + resultado;

    memoria.push({
        operacao: 'MULTIPLICAÇÃO',
        conta: `${num1} * ${num2}`,
        resultado: resultado
    });
}

function limparMultiplicacao(){
    document.getElementById('number1-multiplicacao').value = '';
    document.getElementById('number2-multiplicacao').value = '';

    document.getElementById('resultadoMultiplicacao').style.display = 'none';
    document.getElementById('resultadoTextoMultiplicacao').textContent = '';
}


function calcularDivisao(){
    let num1 = document.getElementById('number1-divisao').value;
    let num2 = document.getElementById('number2-divisao').value;

    if(!verificarNumeroValido(num1) || !verificarNumeroValido(num2)){
        alert('Valor01 ou Valor02 inválidos! Digite um número válido.');
        return;
    }

    if(num1 == 0 || num2 == 0){
        alert('Divisão por 0 detectada! substitua os valores.');
    }else{
        let resultado = parseFloat(num1) / parseFloat(num2);
        let divVisivel = document.getElementById('resultadoDivisao');
        let resultadoTexto = document.getElementById('resultadoTextoDivisao');
        divVisivel.style.display = 'block'; // Torna visível
        resultadoTexto.textContent = 'Resultado: ' + resultado;
    
        memoria.push({
            operacao: 'DIVISÃO',
            conta: `${num1} / ${num2}`,
            resultado: resultado
        });
    }

}

function limparDivisao(){
    document.getElementById('number1-divisao').value = '';
    document.getElementById('number2-divisao').value = '';

    document.getElementById('resultadoDivisao').style.display = 'none';
    document.getElementById('resultadoTextoDivisao').textContent = '';
}

function calcularPorcentagem(){
    let num1 = document.getElementById('number1-porcentagem').value;
    let num2 = document.getElementById('number2-porcentagem').value;

    if(!verificarNumeroValido(num1) || !verificarNumeroValido(num2)){
        alert('Valor01 ou Valor02 inválidos! Digite um número válido.');
        return;
    }else if(num2 < 0){
        alert('A porcentagem não pode ser um número negativo!');
    }else{
        let resultado = (parseFloat(num1) * parseFloat(num2)) / 100;
    
        let divVisivel = document.getElementById('resultadoPorcentagem');
        let resultadoTexto = document.getElementById('resultadoTextoPorcentagem');
        divVisivel.style.display = 'block'; // Torna visível
        resultadoTexto.textContent = 'Resultado: ' + resultado;
    
        memoria.push({
            operacao: 'PORCENTAGEM',
            conta: `${num2}% de ${num1}`,
            resultado: resultado
        });
    }

}

function limparPorcentagem(){
    document.getElementById('number1-porcentagem').value = '';
    document.getElementById('number2-porcentagem').value = '';

    document.getElementById('resultadoPorcentagem').style.display = 'none';
    document.getElementById('resultadoTextoPorcentagem').textContent = '';
}


function calcularPagamentoPrazo(){
    let num1 = document.getElementById('number1-pagamentoPrazo').value;
    let num2 = document.getElementById('number2-pagamentoPrazo').value;

    if(!verificarNumeroValido(num1) || !verificarNumeroValido(num2)){
        alert('Valor01 ou Valor02 inválidos! Digite um número válido.');
        return;
    }else if(num2 == 0){
        alert('Acréscimo de 0% não existe!');
    }else{
        let acrescimo = parseFloat(num1) * parseFloat(num2) / 100;
        let resultado = parseFloat(num1) + acrescimo;

        let divVisivel = document.getElementById('resultadoPagamentoPrazo');
        let resultadoTexto = document.getElementById('resultadoTextoPagamentoPrazo');

        divVisivel.style.display = 'block'; // Torna visível
        resultadoTexto.textContent = `Total à pagar: R$ ${resultado.toFixed(2)}`;

        //novo modelo de salvar a operação
        memoria.push({
            operacao: 'PAGAMENTO À PRAZO',
            porcentagem: `${num2}%`,
            acrescimo: `R$ ${acrescimo.toFixed(2)}`,
            conta: `R$ ${num1} + R$ ${acrescimo.toFixed(2)}`,
            resultado: resultado
        });
    }

}

function limparPagamentoPrazo(){
    document.getElementById('number1-pagamentoPrazo').value = '';
    document.getElementById('number2-pagamentoPrazo').value = '';

    document.getElementById('resultadoPagamentoPrazo').style.display = 'none';
    document.getElementById('resultadoTextoPagamentoPrazo').textContent = '';
}



function calcularPagamentoVista(){
    let num1 = document.getElementById('number1-pagamentoVista').value;
    let num2 = document.getElementById('number2-pagamentoVista').value;

    if(!verificarNumeroValido(num1) || !verificarNumeroValido(num2)){
        alert('Valor01 ou Valor02 inválidos! Digite um número válido.');
        return;
    }else if(num2 == 0){
        alert('Acréscimo de 0% não existe!');
    }else{
        let desconto = parseFloat(num1) * parseFloat(num2) / 100;
        let resultado = parseFloat(num1) - desconto;

        let divVisivel = document.getElementById('resultadoPagamentoVista');
        let resultadoTexto = document.getElementById('resultadoTextoPagamentoVista');

        divVisivel.style.display = 'block'; // Torna visível
        resultadoTexto.textContent = `Total à pagar: R$ ${resultado.toFixed(2)}`;

        //novo modelo de salvar a operação
        memoria.push({
            operacao: 'PAGAMENTO À VISTA',
            porcentagem: `${num2}%`,
            acrescimo: `R$ ${desconto.toFixed(2)}`,
            conta: `R$ ${num1} - R$ ${desconto.toFixed(2)}`,
            resultado: resultado
        });
    }

}

function limparPagamentoVista(){
    document.getElementById('number1-pagamentoVista').value = '';
    document.getElementById('number2-pagamentoVista').value = '';

    document.getElementById('resultadoPagamentoVista').style.display = 'none';
    document.getElementById('resultadoTextoPagamentoVista').textContent = '';
}