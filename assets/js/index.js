function acessar(){
    const nome = document.getElementById('nome').value;
    if(nome == ''){
        alert('Nome não detectado, digite um nome válido!');
    }else{
        localStorage.setItem('nome', nome);
        window.location.href = '../../templates/home.html'
    }
}