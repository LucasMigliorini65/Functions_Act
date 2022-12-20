// Exercicio pets
var cachorro = 15
var gato = 15
var coelho = 5 
var animais = [cachorro, gato, coelho]
var names = ["cachorro", "gato", "coelho"]

var a = 0 


for (var i = 0; i <= 2; i++) {
    var nomeDoPet = prompt(" Qual é o nome do seu " + names[a]);
    var especieDoPet = prompt("Qual é a espécie do seu " + names[a]);
    var idade = parseInt(prompt("Informe a idade do seu " + names[a] + ":" ));
    calcularPet();
    a++
}
function calcularPet() {
    res = idade * animais[i]
    alert(nomeDoPet + " tem " + res + " anos de verdade! Os " + especieDoPet + " tem diferença de " + animais[i] + " anos em relação a um humano." )
}



// Exercicio lanche
const max =  70

function calcularMeuLanche() {
    var anos = prompt("Quantos anos você tem: ");
    var lanche = prompt("Quantos lanche você come por dia: ");
    u =  lanche * 365;
    ur = max - anos ;
    nn = ur * u; 
    alert( "Você precisará de "+ nn + " lanches para durar até "+ max + " anos");

}
for(var i = 0; i  <= 2; i++) {
    calcularMeuLanche();
}


// Exercicio circuferencia
function es() {
    let escolha = parseInt(prompt("escolha as segintes opções: \n 1.) para circunferência \n ou \n 2.) para área"));
    if (escolha == 1) {
        for (let i = 0; i < 3; i++) {
            calcularCircunferencia();
        }
    } else if (escolha == 2) {
        for (let i = 0; i < 3; i++) {
            calcularArea();
        }
    }
    else {
        es();
    }
     }
es()
function calcularCircunferencia(raio) {
    raio = parseInt(prompt("qual o raio do circulo"))
    alert(`A circunferência é ${2 * 3.14 * raio}`)
}

function calcularArea(raio) {
    raio = parseInt(prompt("qual o raio do circulo"))
    var raio_elevado = raio * raio;
    alert(`A área é ${3.14 * (raio_elevado)}`)
}


// Exercicio temperatura
function celsius(temperatura) {
    temperatura = parseInt(prompt("digite a temperatura em celcius"))
    var total_fahrenheit = temperatura * 1.8 + 32
    alert(`${temperatura} º em celsius equivalem à ${total_fahrenheit} em Fahrenheit`)
}

function Fahrenheit(temperatura) {
    temperatura = parseInt(prompt("digite a temperatura em Fahrenheit"))
    var total_celsius = (temperatura - 32) * (5/9)
    alert(`${temperatura} º em Fahrenheit equivalem à ${total_celsius} em celsius`)
}

function temperatura() {
    let escolha = parseInt(prompt("escolha as segintes opções: \n\n 1.) c ———> F  ou 2.) f ———> c "));
    if (escolha == 1) {
        celsius();
    } else if (escolha == 2) {
        Fahrenheit();
    }
   
}

temperatura()