// 1. Constructor, méthode, this
// Utilisation du constructeur, des méthodes et du mot-clé this.

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p1 = new Person("Alice");
p1.greet(); // Résultat : Hello, my name is Alice

// 2. Constructeur privé
// Un constructeur privé empêche la création d'instances directes (ex. singleton).

class Singleton {
  private static instance: Singleton;

  private constructor() {}

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
  private age: number = 5;
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getAge() {
    return this.age;
  }
}

const a1 = new Animal1("Dog");
console.log(a1.name); // Résultat : Dog
console.log(a1.getAge()); // Résultat : 5

// 4. Interface et classe concrète
// Implémentation d'une interface dans une classe concrète.

interface Shape {
  getArea(): number;
}

class Cercle implements Shape {
  constructor(private radius: number) {}

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const c1 = new Cercle(3);
console.log(c1.getArea()); // Résultat : 28.27...

// 5. Initialisation courte dans le constructeur
// Déclare et initialise directement les propriétés dans le constructeur.

class Pointe {
  constructor(public x: number, public y: number) {}
}

const p2 = new Pointe(1, 2);
console.log(p2); // Résultat : { x: 1, y: 2 }

// 6. Classe générique
// Utilisation d’un type paramétré dans une classe.

class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // Résultat : Hello

// 7. Fill (méthode Array.prototype.fill)
// Remplit un tableau avec une valeur statique.

const filled = new Array(4).fill(0);
console.log(filled); // Résultat : [0, 0, 0, 0]

// 8. Interface et classe abstraite
// Classe abstraite avec méthode implémentée et à implémenter.

abstract class Animale2 {
  abstract makeSound(): void;

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

function Log(prefix: string) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = () => {
      console.log(`${prefix} get: ${value}`);
      return value;
    };

    const setter = (val: any) => {
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
 //@Log("Price")
  price: number = 0;
}

const prod = new Product();
prod.price = 99; // Affiche : Price set: 99
console.log(prod.price); // Affiche : Price get: 99

// 10. Attribut en lecture seule dans une interface
// Utilise readonly pour empêcher la modification.

interface User {
  readonly id: number;
  name: string;
}

const u1: User = { id: 1, name: "Alice" };
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
  override greet() {
    console.log("Hi!");
  }
}

new Sub().greet(); // Résultat : Hi!

// 13. Héritage entre interfaces
// Une interface peut hériter d'une autre.

interface Animal3 {
  name: string;
}

interface Dog2 extends Animal3 {
  breed: string;
}

const myDog: Dog2 = { name: "Rex", breed: "Labrador" };
console.log(myDog);

// 14. Getters et setters
// Accès et modification de propriétés avec contrôle.

class Person2 {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value > 0) {
      this._age = value;
    }
  }
}

const p3 = new Person2();
p3.age = 30;
console.log(p3.age); // Résultat : 30

// 15. Interface comme type de fonction
// Déclarer le type d’une fonction avec une interface.

interface AddFn {
  (a: number, b: number): number;
}

const adds: AddFn = (a, b) => a + b;
console.log(adds(1, 2)); // Résultat : 3

// 16. Fonction générique avec keyof
// Utilise keyof pour restreindre les types de clé.

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const car = { brand: "Toyota", year: 2020 };
console.log(getProperty(car, "brand")); // Résultat : Toyota

// 17. Attributs et méthodes optionnels dans une interface
// Ajoute ? pour indiquer des champs optionnels.

interface Config {
  host?: string;
  port?: number;
}

const Conf: Config = { host: "localhost" };
console.log(Conf);

// 18. Tuple
// Tableau à longueur et types fixes.

let personne: [string, number] = ["Alice", 30];
console.log(personne); // Résultat : ["Alice", 30]

// 19. Literal
// Spécifie des valeurs précises possibles.

type Directions = "left" | "right";

let move: Directions = "left";
// move = "up"; Erreur
