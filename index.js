let contador = 0
let contabilizador = 0

function somar(variavel) {
    
    if (variavel == 'contador') {
        contador = contador + contabilizador
        render()
    }
    
    if (variavel == 'contabilizador') {
        contabilizador = contabilizador + 1
        render()
    }

}

function subtrair(variavel) {

    if (variavel == 'contador') {
        contador = contador - contabilizador
        render()
    }
    
    if (variavel == 'contabilizador') {
        contabilizador = contabilizador - 1
        render()
    }

}

function zerar() {

    contador = 0
    contabilizador = 0
    render()

}

function metade(variavel) {
    
    if (variavel == 'contador') {
        contador = contador / 2
        render()
    }
    
    if (variavel == 'contabilizador') {
        contabilizador = contabilizador / 2
        render()
    }

}

function multiplicar(variavel) {

    if (variavel == 'contador') {
        contador = contador * contador
        render()
    }
    
    if (variavel == 'contabilizador') {
        contabilizador = contabilizador * contabilizador
        render()
    }

}

function render() {
    const cont = document.querySelector("#contagem")
    const contabi = document.querySelector("#contabilizagem")
    cont.innerText = contador
    contabi.innerText = contabilizador
}

render()
