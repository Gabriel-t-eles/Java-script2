let Nome = document.querySelector("#Nome");
let Sobrenome = document.querySelector("#Sobrenome");
let Botao = document.querySelector("#Botao");
let NomeSobrenome = document.querySelector("#NomeSobrenome");

function alterarTexto(){
    let texto = String(Nome.value + " " + Sobrenome.value);
    NomeSobrenome.textContent = texto;
}

Botao.onclick = function(){
    alterarTexto();
}