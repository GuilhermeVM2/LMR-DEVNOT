let HT; //horas trabalhadas
let VH; //Valor da hora
let PD; //percentual de desconto
let TD; //total de desconto
let SB; //Salário bruto
let SL; //Salário líquido

HT = prompt('Digite as Horas Trabalhadas:', 'informe aqui')
VH = prompt('Entre com vlaor da hora:','Informe aqui.')
PD = prompt('Informe o Percentual de desconto:','em porcentagem')
SB = parseFloat(HT)*parseFloat(VH);
TD = parseFloat(PD)*SB/100;
SL = SB - TD;

document.write('Salário = ', SL);

