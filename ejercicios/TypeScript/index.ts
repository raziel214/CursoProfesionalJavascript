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


function add(a: number, b: number) {
    
    return a + b;

}
const result = add(9, 20);
console.log(result);


function createAdder(a:number):(number)=>number { 
    return function (b: number) {
        
        return a+b
        
    }

}

const addfour = createAdder(7)
const fourPlus = addfour(20)

console.log(fourPlus)

function fullName(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
}

const richard = fullName('Agente');
console.log(richard);


interface Rectangulo{
    ancho: number
    alto:number
    

}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6
};

function area(r: Rectangulo): number{ 
    return r.alto*r.ancho
}

const areaRect = area(rect);

console.log(areaRect);

rect.toString = function () {
    return `Un rectangulo ${this.color}`
};
