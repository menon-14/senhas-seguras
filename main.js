const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorA11('.parametro-senha__botao');

botoes[0].onclik = diminuiTamanho;
botoes[1].onclik = aumantaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){ 
    tamanhoSenha = tamanhoSenha-1
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha = tamanhoSenha+1;
    }
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes)
