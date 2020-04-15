// Boolean
let muted: boolean = true;
muted = false;

// Números
let age = "6";
let numerador: number = 42;
let denominador: number = parseInt(age);
let resultado = numerador / denominador;
console.log(resultado);

// String
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;
console.log(saludo)

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
console.log(people[1])
// people.push("9000")

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001);
console.log(peopleAndNumbers[1])

// Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };
