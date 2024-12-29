var peso = document.getElementById ('ipeso')
var alt = document.getElementById('ialtura')

function enviar() {
    var pesoVal = Number(peso.value)
    var altVal = Number(alt.value)
    if (pesoVal == 0 || altVal ==0) {
        window.alert ('Preenche essa porra direito aí mano!')
    }
    else {
        alert ('Tudo certo por enquanto.')
    }
}