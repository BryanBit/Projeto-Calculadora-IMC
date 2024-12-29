function funcoes(){
    validarCampos()
    calcularImc()
}

function validarCampos() {
    var peso = document.getElementById ('ipeso')
    var alt = document.getElementById ('ialtura')

    var pesoVal = Number (peso.value)
    var altVal = Number (alt.value)

    if (pesoVal == 0 && altVal == 0) {
        alert ('Preencha corretamente todos os campos!')
    } else if (pesoVal == 0) {
        alert ('Preencha o campo PESO!')
    } else if (altVal == 0) {
        alert ('Preencha o campo ALTURA!')
    }
    else {
        alterarDisplay()
    }
}
function alterarDisplay() {
    var calc = document.querySelector('.calc');
    calc.style.height = '190px';

    var botaoCalc = document.getElementById('botaoCalc');
    botaoCalc.style.display = 'none';

    var botaoRefaz = document.getElementById ('botaorefaz')
    botaoRefaz.style.display = 'block'

    var result = document.getElementById ('result')
    result.style.display = 'block'

    var parag = document.getElementById ('parag')
    parag.style.display = 'none'

    var inputs = document.getElementById ('inputs')
    inputs.style.display = 'none'
}

function calcularImc() {
    var peso = document.getElementById ('ipeso')
    var alt = document.getElementById ('ialtura')

    var pesoVal = Number (peso.value)
    var altVal = Number (alt.value)

    var calcImc = pesoVal / (altVal * altVal)
    var result = document.getElementById ('result')
    result.innerHTML = `Seu IMC é de ${calcImc.toFixed(2)}`
}