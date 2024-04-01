let botao = document.querySelector('#botao');
let textHexadecimal = document.querySelector('h2');
let titulo = document.querySelector('h1');
function MontarHex() {
    let array = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let a1 = array[sortear()];
    let a2 = array[sortear()];
    let b1 = array[sortear()];
    let b2 = array[sortear()];
    let c1 = array[sortear()];
    let c2 = array[sortear()];
    return "#" + a1 + a2 + b1 + b2 + c1 + c2;
}
function sortear() {
    let variavel = Math.floor(Math.random() * 15);
    return variavel;
}
botao.addEventListener('click', function (event) {
    document.body.style.backgroundColor = MontarHex();
    textHexadecimal.style.color = MontarHex();
    titulo.style.color = MontarHex();
    textHexadecimal.innerHTML = MontarHex();
})