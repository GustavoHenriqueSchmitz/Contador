let num = 0

function somar() {
    num = num + 1
    render()
}

function subtrair() {
    num = num - 1
    render()
}

function zerar() {
    num = num - num
    render()
}

function metade() {
    num = num / 2
    render()
}

function multiplica() {
    num = num * 2
    render()
}

function render() {
    const cont = document.querySelector("#contagem")
    cont.innerText = num
}

render()
