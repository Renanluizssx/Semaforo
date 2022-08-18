    //declaração de variáveis
    let vermelho = document.querySelector('#vermelho')
    let laranja = document.querySelector('#laranja')
    let verde = document.querySelector('#verde')
function pare() {
    vermelho.classList.remove('opacidade')
    laranja.classList.add('opacidade')
    verde.classList.add('opacidade')
}
function atencao() {
    laranja.classList.remove('opacidade')
    vermelho.classList.add('opacidade')
    verde.classList.add('opacidade')
} 
function siga() {
    verde.classList.remove('opacidade')
    vermelho.classList.add('opacidade')
    laranja.classList.add('opacidade')
}