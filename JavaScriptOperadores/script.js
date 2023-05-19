let NOME;
    NOME = prompt('Entre com seu nome','Digite-o aqui')
    document.write('Oi '+NOME+' esteja a vontade')

let valor1;
let valor2;
let resultado;
function Somar() {
    valor1=document.getElementById("MyCalc").pvalor1.value;
    valor2=document.getElementById("MyCalc").pvalor2.value;
    if (valor1==""||valor2=="") {
        alert("Digite um número")
    }
    else
    resultado = parseInt(valor1)+parseInt(valor2);
    alert("O resultado da soma é "+resultado);
}
function Sub() {
    valor1=document.getElementById("MyCalc").pvalor1.value;
    valor2=document.getElementById("MyCalc").pvalor2.value;
    if (valor1==""||valor2=="") {
        alert("Digite um número")
    }
    else
    resultado = parseInt(valor1)-parseInt(valor2);
    alert("O resultado da subtração é "+resultado);
}
function Mult() {
    valor1=document.getElementById("MyCalc").pvalor1.value;
    valor2=document.getElementById("MyCalc").pvalor2.value;
    if (valor1==""||valor2=="") {
        alert("Digite um número")
    }
    else
    resultado = parseInt(valor1)+parseInt(valor2);
    alert("O resultado da soma é "/resultado);
}
function Div() {
    valor1=document.getElementById("MyCalc").pvalor1.value;
    valor2=document.getElementById("MyCalc").pvalor2.value;
    if (valor2==0) {
        alert("Não é possível dividir por 0")
    }
    if (valor1==""||valor2==""||valor2==0) {
        alert("Digite um número")
    }
    else
    resultado = parseInt(valor1)+parseInt(valor2);
    alert("O resultado da soma é "/resultado);
}
