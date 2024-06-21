// String
console.log(`This is my word !`);
console.log("My name is Rafael");
console.log('I Have seventeen years old');

// Number
console.log(25);
console.log(2+2);
console.log(11.2);
console.log(6+(3*9));

// BooLeans
console.log(10>5);
console.log(7<2);
console.log('Rafael' != 'Rafael');

// Ol
console.log(true && true);
console.log(false || false);
console.log(!false);

// Nan
console.log(0/0);

// S B N
console.log("My word is beautiful");
console.log(-33);
console.log(true);

// Balada

let idade = prompt(`informe a sua Idade`)
if (idade >= 18){
    console.log(`Pode Entrar`);
}
 

// Atv 8

const nome = `Rafael`;
if (nome == `Rafael`){
    console.log("Seja Bem-Vindo Rafael")
}

// Atv 9

console.log(Math.pow(2,2));
console.log(Math.pow(3,2));
console.log(Math.pow(18,2));

// Atv 10

let velocidadecar = prompt(`Digite a valocidade`);
if (velocidadecar > 80){
    console.log(`Voce esta dentro da velocidade da rodovia`)
}
if (velocidadecar <= 80){
    console.log(`Voce esta abaixo da da velocidade maxima`)
}

// Atv 11

let cnh = prompt(`Possui CNH ?`);
let Idade = prompt(`Qual a sua idade ?`);
if (Idade >= 18 && cnh == `sim`){
    console.log(`pode dirigir`);
}
else if (Idade >= 18 && cnh == `nao`){
    console.log(`Nao pode dirigir`);
}
else if(Idade < 18 ){
    console.log(`Nao pode dirigir`);
}
else if (Idade < 18 && cnh == `nao`){
    console.log(`nao pode dirigir`);
}


// Atv 12

console.log(`\n ex 12:`);
var x = 1;
while (x<=10){
    console.log(x);
    x=x+1;
}

// Atv 13

console.log(`\n EX 13:`);
var y = 100
for(y;y>=50;y=y-1){
    console.log(y);
}

// Atv 14

console.log(`\n EX 14:`);
for(var z=2; z<=50; z=z+1){
    if(z%2==0){
        console.log(`O numero ${z} é par`);
    }
}


// Atv 15

console.log(`\n EX 15:`);

var nume = prompt(`Coloque um numero desejado para saber se ele é primo`)

if (nume==2){
    console.log(`O numero${nume} é primo`);
}

else if (nume==3){
    console.log(`O numero${nume} é primo`);
}

else if (nume==5){
    console.log(`O numero${nume} é primo`);
}

else if (nume==7){
    console.log(`O numero${nume} é primo`);
}

else if (nume%2==0){
    console.log(`O numero${nume} nao é primo`);
}

else if (nume%3==0){
    console.log(`O numero ${nume} nao é primo`);
}

else if (nume%5==0){
    console.log(`O numero ${nume} nao é primo`);
}

else if (nume%7==0){
    console.log(`O numero ${nume} nao é primo`);
}

else{
    console.log(`O numero ${nume} é primo`);
}