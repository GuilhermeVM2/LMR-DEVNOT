var valor1;
var valor2;
var valor3;
var valor4;

function logica() {


    valor1 = document.getElementById('email1').value;
    valor2 = document.getElementById('email2').value;
    valor3 = document.getElementById('senha1').value;
    valor4 = document.getElementById('senha2').value;
    if (valor1 == valor2 && valor3 == valor4) {
        alert("Cadastro ok")
    }
    else
        alert("Email ou senha incorreta");
}