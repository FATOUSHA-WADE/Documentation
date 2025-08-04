"use strict";
// 1. Number
// Représente un type primitif pour tous les nombres (entiers, décimaux, etc.).
// C’est l’un des types fondamentaux en TypeScript.
let ages = 25;
console.log(ages); // Résultat : 25
let pi = 3.14;
console.log(pi); // Résultat : 3.14
//  2. Le type FUNCTION
// Ce type générique désigne toute fonction, sans détailler les types d’arguments ou de retour.
// Il est souvent utilisé quand les détails de la fonction ne sont pas importants, mais reste imprécis.
let myFunc = () => console.log("Hello World");
myFunc(); // Résultat : Hello World
const sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 3)); // Résultat : 5
function combine(a, b) {
    return a + b;
}
console.log(combine(2, 3)); // Résultat : 5
console.log(combine("foo", "bar")); // Résultat : foobar
//  4. Boolean
// Type de base qui sert à représenter deux états logiques : true ou false.
let isActive = true;
console.log(isActive); // Résultat : true
let isLoggedIn = false;
console.log(isLoggedIn); // Résultat : false
//  5. Enum
// Structure permettant de définir un ensemble de valeurs constantes nommées.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // Résultat : 0
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
console.log(Color.Blue); // Résultat : BLUE
//  6. String
// Type primitif pour les chaînes de caractères.
let Name = "Alice";
console.log(Name); // Résultat : Alice
let greeting = `Hello, ${Name}`;
console.log(greeting); // Résultat : Hello, Alice
//  7. Type union
// Permet de combiner plusieurs types dans une même variable ou paramètre.
let id = 123;
console.log(id); // Résultat : 123
id = "ABC123";
console.log(id); // Résultat : ABC123
//  8. Type never
// Indique que quelque chose ne peut jamais se produire (ex: erreur ou boucle infinie).
function throwError() {
    throw new Error("Erreur");
}
// throwError(); // Déclenche une erreur
function infinite() {
    while (true) { }
}
// infinite(); // Boucle infinie
// 9. Fonction générique
// Utilise des types paramétrés (<T>) pour fonctionner avec divers types.
function identity(arg) {
    return arg;
}
console.log(identity(42)); // Résultat : 42
function wrap(value) {
    return { value };
}
console.log(wrap("test")); // Résultat : { value: 'test' }
// 10. Type object
// Désigne tout objet non primitif.
let person = { name: "Alice" };
console.log(person); // Résultat : { name: 'Alice' }
function printObject(o) {
    console.log(o);
}
printObject({ x: 10 }); // Résultat : { x: 10 }
const p = { x: 1, y: 2 };
console.log(p); // Résultat : { x: 1, y: 2 }
let value = "Hello";
console.log(value); // Résultat : Hello
// 12. Type objet anonyme
// Objet défini directement sans passer par un alias ou une interface.
function printCoords(coord) {
    console.log(`x: ${coord.x}, y: ${coord.y}`);
}
printCoords({ x: 10, y: 20 }); // Résultat : x: 10, y: 20
const rect = { width: 5, height: 7 };
console.log(rect); // Résultat : { width: 5, height: 7 }
// 13. Type de retour de fonction
// Indique explicitement le type de la valeur que renvoie une fonction.
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5)); // Résultat : 10
function sayHello() {
    console.log("Hello");
}
sayHello(); // Résultat : Hello
// 14. Find
// Méthode permettant de rechercher un élément dans un tableau.
const people = [{ name: "Alice" }, { name: "Bob" }];
const personFound = people.find(p => p.name === "Bob");
console.log(personFound); // Résultat : { name: 'Bob' }
const numbers = [1, 2, 3, 4];
const found = numbers.find(n => n > 2);
console.log(found); // Résultat : 3
const personNested = {
    name: "Alice",
    address: { city: "Paris", postalCode: "75000" }
};
console.log(personNested); // Résultat : objet avec adresse imbriquée
const t = { value: 1, children: [{ value: 2 }] };
console.log(t); // Résultat : arbre imbriqué
// 16. Fn sans retour : void - undefined
// Désigne une fonction qui ne retourne rien ou qui retourne undefined explicitement.
function logMessage() {
    console.log("Logging...");
}
logMessage(); // Résultat : Logging...
function getNothing() {
    return undefined;
}
console.log(getNothing()); // Résultat : undefined
// 17. Array
// Type représentant une liste ordonnée de valeurs du même type.
let Fruits = ["apple", "banana"];
console.log(Fruits); // Résultat : ['apple', 'banana']
let scores = [10, 20, 30];
console.log(scores); // Résultat : [10, 20, 30]
// 18. Fn avec retour
// Fonction qui renvoie explicitement une valeur d’un certain type.
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Résultat : 8
function getUserName() {
    return "Alice";
}
console.log(getUserName()); // Résultat : Alice
//# sourceMappingURL=Test3.js.map