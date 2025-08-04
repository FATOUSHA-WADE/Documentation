// ✅ 1. Interface et type
// Les interfaces et les types permettent de décrire la forme des objets.

interface User1 {
  name: string;
  age: number;
}
const u2: User1 = { name: "Alice", age: 25 };

type Producte = {
  id: number;
  label: string;
};
const p0: Producte = { id: 1, label: "Book" };

// ✅ 2. Intersection de types
// Combine plusieurs types ensemble (et logique).

type A = { a: string };
type B = { b: number };
type AB = A & B;
const obj: AB = { a: "hello", b: 42 };

interface C {
  x: boolean;
}
type D = C & { y: number };
const cd: D = { x: true, y: 10 };

// ✅ 3. Param de fonction par défaut
// Une fonction peut avoir des paramètres avec valeurs par défaut.

function greet(name: string = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
greet("Alice"); // Hello, Alice

function multiply(a: number, b: number = 2) {
  return a * b;
}
console.log(multiply(5)); // 10

// ✅ 4. Héritage
// Une classe peut hériter d'une autre.

class Animal {
  move() {
    console.log("Moving...");
  }
}
class Dogs extends Animal {
  bark() {
    console.log("Bark!");
  }
}
const dog1 = new Dogs();
dog1.move(); // Moving...
dog1.bark(); // Bark!

interface Shape {
  area(): number;
}
class Shape implements Shape {
  constructor(public side: number) {}
  area() {
    return this.side ** 2;
  }
}
const sq = new Shape(4);
console.log(sq.area()); // 16

// ✅ 5. Type union
// Un type peut accepter plusieurs formes.

let value: string | number;
value = "text";
value = 42;

type Status = "loading" | "success" | "error";
let Status: Status = "loading";

// ✅ 6. Propriété de discrimination
// Utilisée pour affiner des types unions avec une propriété commune.

type Cat = { type: "cat"; meow: () => void };
type Doge = { type: "dog"; bark: () => void };
type Animal2 = Cat | Doge;

function makeSound(animal: Animal2) {
  if (animal.type === "cat") animal.meow();
  else animal.bark();
}

const d: Cat = { type: "cat", meow: () => console.log("Meow") };
makeSound(d); // Meow

// ✅ 7. Attributs et méthodes de classe
// Déclaration de propriétés et méthodes dans une classe.

class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  start() {
    console.log(`${this.brand} is starting`);
  }
}
const c = new Car("Toyota");
c.start(); // Toyota is starting

class Counter {
  count = 0;
  increment() {
    this.count++;
  }
}
const ctr = new Counter();
ctr.increment();
console.log(ctr.count); // 1

// ✅ 8. Paramètres callback
// Une fonction peut recevoir une autre fonction en paramètre.

function processData(data: number[], callback: (n: number) => void) {
  data.forEach(callback);
}
processData([1, 2], n => console.log(n * 2)); // 2, 4

function transform(str: string, cb: (s: string) => string) {
  return cb(str);
}
console.log(transform("hello", s => s.toUpperCase())); // HELLO

// ✅ 9. Fonction générique
// Permet de définir des types dynamiques et réutilisables.

function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<number>(5)); // 5

function wrapInArray<T>(value: T): T[] {
  return [value];
}
console.log(wrapInArray("hello")); // ["hello"]

// ✅ 10. Décorateurs de propriété
// Permet de modifier le comportement d'une propriété (exp. base).

function LogProperty(target: any, key: string) {
  let value = target[key];
  Object.defineProperty(target, key, {
    get: () => {
      console.log(`Get ${key}: ${value}`);
      return value;
    },
    set: (newValue) => {
      console.log(`Set ${key}: ${newValue}`);
      value = newValue;
    },
  });
}
// Les décorateurs (comme @LogProperty) sont une fonctionnalité expérimentale en TypeScript.
class Person3 {
  //@LogProperty
  name = "Initial";
}
const person = new Person3();
person.name = "Updated";
console.log(person.name); // Set..., Get...

// ✅ 11. Type unknown
// Comme `any` mais oblige une vérification de type avant utilisation.

let input: unknown = "hello";
if (typeof input === "string") {
  console.log(input.toUpperCase()); // HELLO
}

input = 42;
if (typeof input === "number") {
  console.log(input + 1); // 43
}

// ✅ 12. Tableau en lecture seule
// Un tableau qui ne peut pas être modifié.

const readOnlyArr: ReadonlyArray<number> = [1, 2, 3];
// readOnlyArr.push(4); // ❌ Erreur

const roNames: readonly string[] = ["Alice", "Bob"];
// roNames[0] = "Eve"; // ❌ Erreur

// ✅ 13. Type Object
// Déclare un type objet générique.

function printKeys(obj: Object) {
  console.log(Object.keys(obj));
}
printKeys({ a: 1, b: 2 }); // ["a", "b"]

function isObject(val: any): val is Object {
  return val !== null && typeof val === "object";
}
console.log(isObject({})); // true

// ✅ 14. Arrow function
// Syntaxe courte pour les fonctions.

const add = (a: number, b: number): number => a + b;
console.log(add(2, 3)); // 5

const greetUser = (name: string) => `Hello, ${name}`;
console.log(greetUser("Sam")); // Hello, Sam

// ✅ 15. Attribut en lecture seule
// Utilise `readonly` pour rendre une propriété non modifiable.

class Point {
  readonly x: number = 0;
  readonly y: number = 0;
}
const pt = new Point();
// pt.x = 5; //  Erreur

interface Config {
  readonly Port: number;
}
const cfg: Config = { Port: 8080 };
// cfg.port = 3000; //  Erreur

// ✅ 16. typeof
// Vérifie le type d'une variable à l’exécution.

const val = "text";
if (typeof val === "string") {
  console.log(val.toUpperCase());
}

const z = true;
if (typeof z === "boolean") {
  console.log(!z); // false
}

// ✅ 17. in
// Vérifie si une clé existe dans un objet.

const ob2 = { x: 1 };
console.log("x" in ob2); // true

const user2 = { name: "Max" };
console.log("email" in user2); // false

// ✅ 18. instanceof
// Vérifie si un objet appartient à une classe.

class Engine {}
const e = new Engine();
console.log(e instanceof Engine); // true

class House {}
const h = new House();
console.log(h instanceof House); // true
  