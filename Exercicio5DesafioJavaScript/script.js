let nome;
let endereco;
let email1;
let email2;
let senha1;
let senha2;

function Logica() {
    nome=document.getElementById("MyForm").nome1.value;
    endereco=document.getElementById("MyForm").endereco1.value;
    email1=document.getElementById("MyForm").email1.value;
    email2=document.getElementById("MyForm").email2.value;
    senha1=document.getElementById("MyForm").senha1.value;
    senha2=document.getElementById("MyForm").senha2.value;

    if (nome=="") {
        alert("Preencha o campo nome")
    }
    else if (endereco=="") {
        alert("Preencha o campo endereço")
    }
    else if (email1=="") {
        alert("Preencha o campo email")
    }
    else if (email2=="") {
        alert("Preencha o campo confirmar email")
    }
    else if (senha1=="") {
        alert("Preencha o campo senha")
    }
    else if (senha2=="") {
        alert("Preencha o campo confirmar senha")
    }
    else if (senha1!=senha2) {
        alert("Senhas não compatíveis'")
    }
    else if (email1!=email2) {
        alert("Emails não compatíveis'")
    }
    else
    alert("Email concluído com sucesso")





    if (valor1==""||valor2=="") {
        alert("Digite um número")
    }
    else
    resultado = parseInt(valor1)+parseInt(valor2);
    alert("O resultado da soma é "+resultado);
}