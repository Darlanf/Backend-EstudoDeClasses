import { User } from "./user";

//Paradigma IMPERATIVO

let valor1 = 10;
let valor2 = 8;

let media = (valor1 + valor2) / 2;
console.log(media);

valor2 = 5;
media = (valor1 + valor2) / 2;
console.log(media);

//Paradigma PROCEDURAL

valor2 = 12;
function calcularMedia(x: number, y: number) {
  return (x + y) / 2;
}

media = calcularMedia(valor1, valor2);
console.log(media);

valor2 = 14;
media = calcularMedia(valor1, valor2);
console.log(media);

//Paradigma orientado a objetos

let user1 = new User("us1", "João", 30);
let user99 = new User("us99", "Maria", 20);

// user1.nome = "João teste";
// user99.idade = 17;

user1.mostrarNome();

user1.ativarUser();

user1.mostrarNome();
