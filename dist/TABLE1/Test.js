"use strict";
// 1. Constructor, méthode, this
// Utilisation du constructeur, des méthodes et du mot-clé this.
class Persons {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const p1 = new Persons("Alice");
p1.greet(); // Résultat : Hello, my name is Alice
// 2. Constructeur privé
// Un constructeur privé empêche la création d'instances directes (ex. singleton).
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2); // Résultat : true
// 3. Private, public
// Modificateurs d'accès pour les propriétés et méthodes.
class Animal1 {
    constructor(name) {
        this.age = 5;
        this.name = name;
    }
    getAge() {
        return this.age;
    }
}
const a01 = new Animal1("Dog");
console.log(a01.name); // Résultat : Dog
console.log(a01.getAge()); // Résultat : 5
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
const c1 = new Circle(3);
console.log(c1.getArea()); // Résultat : 28.27...
// 5. Initialisation courte dans le constructeur
// Déclare et initialise directement les propriétés dans le constructeur.
class Pointe {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const p2 = new Pointe(1, 2);
console.log(p2); // Résultat : { x: 1, y: 2 }
// 6. Classe générique
// Utilisation d’un type paramétré dans une classe.
class Box {
    constructor(value) {
        this.content = value;
    }
    getContent() {
        return this.content;
    }
}
const stringBox = new Box("Hello");
console.log(stringBox.getContent()); // Résultat : Hello
// 7. Fill (méthode Array.prototype.fill)
// Remplit un tableau avec une valeur statique.
const filled = new Array(4).fill(0);
console.log(filled); // Résultat : [0, 0, 0, 0]
// 8. Interface et classe abstraite
// Classe abstraite avec méthode implémentée et à implémenter.
class Animale2 {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animale2 {
    makeSound() {
        console.log("Bark");
    }
}
const d1 = new Dog();
d1.makeSound(); // Résultat : Bark
d1.move(); // Résultat : Moving...
// 9. Decorator factory
// Fabrique de décorateurs qui personnalisent les comportements.
function Log(prefix) {
    return function (target, key) {
        let value = target[key];
        const getter = () => {
            console.log(`${prefix} get: ${value}`);
            return value;
        };
        const setter = (val) => {
            console.log(`${prefix} set: ${val}`);
            value = val;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Product {
    constructor() {
        //@Log("Price")
        this.price = 0;
    }
}
const prod = new Product();
prod.price = 99; // Affiche : Price set: 99
console.log(prod.price); // Affiche : Price get: 99
const u1 = { id: 1, name: "Alice" };
// u1.id = 2; ❌ Erreur
// 11. Chaînage optionnel
// Accès sécurisé aux propriétés potentiellement nulles/undefined.
const user = {
    profile: {
        email: "alice@example.com",
    },
};
console.log(user.profile?.email); // Résultat : alice@example.com
//console.log(user.address?.city); // Résultat : undefined
// 12. Override
// Redéfinir une méthode héritée (avec override si strict mode activé).
class Base {
    greet() {
        console.log("Hello");
    }
}
class Sub extends Base {
    greet() {
        console.log("Hi!");
    }
}
new Sub().greet(); // Résultat : Hi!
const myDog = { name: "Rex", breed: "Labrador" };
console.log(myDog);
// 14. Getters et setters
// Accès et modification de propriétés avec contrôle.
class Person2 {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0) {
            this._age = value;
        }
    }
}
const p3 = new Person2();
p3.age = 30;
console.log(p3.age); // Résultat : 30
const adds = (a, b) => a + b;
console.log(adds(1, 2)); // Résultat : 3
// 16. Fonction générique avec keyof
// Utilise keyof pour restreindre les types de clé.
function getProperty(obj, key) {
    return obj[key];
}
const car = { brand: "Toyota", year: 2020 };
console.log(getProperty(car, "brand")); // Résultat : Toyota
const Conf = { host: "localhost", port: 9000 };
console.log(Conf);
// 18. Tuple
// Tableau à longueur et types fixes.
let personne1 = ["Alice", 30];
console.log(personne1); // Résultat : ["Alice", 30]
let move = "left";
// move = "up"; Erreur
