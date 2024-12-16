function mudarTamanho() {
    const calculadora = document.querySelector('.calc');
    calculadora.style.height = '440px';
    var botao = document.getElementById('botao');
    botao.style.display = 'none';
    var botaoRefaz = document.getElementById ('botaorefaz')
    botaoRefaz.style.display = 'block'
    var result = document.getElementById ('result')
    result.style.display = 'block'
    result.innerHTML = 'Seu IMC é'
}
