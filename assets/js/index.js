// criando a função chamada pelo botão de acessar
function acessar(){
    // criando uma constante para armazenar o valor do nome digitado
    const nome = document.getElementById('nome').value;
    // verificando se o nome foi digitado
    if(nome == ''){
        // notificando o usuário no caso do nome ser inválido
        alert('Nome não detectado, digite um nome válido!');
        // se não cair na verificação
    }else{
        // manda o valor do nome para o documento principal
        localStorage.setItem('nome', nome);
        window.location.href = '../../templates/home.html'
    }
}