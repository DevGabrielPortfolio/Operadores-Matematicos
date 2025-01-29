function acessar(){
    const nome = document.getElementById('nome').value;
    localStorage.setItem('nome', nome);
    window.location.href = '../../templates/home.html'
}