// 1. Exclusion de fichiers dans tsconfig.json
// 👉 Explication: Ce bloc montre comment exclure certains fichiers TypeScript de la compilation via `tsconfig.json`.

/*{
  "compilerOptions": {
    "outDir": "./dist", // clé de destination
    "target": "es6",  // spécifie la version javascript utilisé
    "module": "commonjs", // module utilisé node .js /js basique
    "strict": true  // vérification pour les types pour les versions
  },
  "exclude": [
    "node_modules",
    "cycle.ts",
    "../*.dev.ts"
  ]
}*/




// 2. Spread operator

const fruits = ["pomme", "banane"];
const légumes = ["carotte", "tomate"];
const aliments = [...fruits, ...légumes];
console.log(aliments);


const personne = { nom: "Alice", age: 30 };
const contact = { email: "alice@example.com" };
const profil = { ...personne, ...contact };
console.log(profil);

//  Explication: les propriétés de `obj2` écrasent celles de `obj1` en cas de conflit (ici `y`).
const obj1 = { x: 1, y: 2 };
const obj2 = { y: 3, z: 4 };
const fusion = { ...obj1, ...obj2 };
console.log(fusion);





// 3. Type primitif vs référence

// Explication: les types primitifs sont copiés par valeur.
let a = 5;
let b = a;
b = 10;
// Résultat: a = 5, b = 10

let ref1 = { nom: "Alice" };
let ref2 = ref1;
ref2.nom = "Bob";
console.log(ref1.nom, ref2.nom);
//  Résultat: ref1.nom = "Bob", ref2.nom = "Bob"
//  Explication: les objets sont copiés par référence.




// 4. Index properties

type Dictionnaire = {
  [clé: string]: string;
};

const traductions: Dictionnaire = {
  bonjour: "hello",
  au_revoir: "goodbye",
  merci: "thank you"
};
console.log(traductions);
//  Résultat: traductions["bonjour"] = "hello"

type NotesParID = {
  [id: number]: number;
};

const notes: NotesParID = {
  101: 18,
  102: 14
};
console.log(notes[101]);
console.log(notes[102]);

//  Résultat: notes[101] = 18




// 5. let - var - const
// Explication: `let` et `const` sont limités au bloc (portée), `var` est fonctionnelle.

if (true) {
  var x = 5;
  let y = 10;
  const z = 15;
  console.log(y + z);
  // Résultat console: 25
}




// 6. Copie objet
const original = { nom: "Claire" };
const copie = { ...original };
console.log(copie);
// Résultat: copie = { nom: "Claire" }

// Explication: `JSON.parse(JSON.stringify(...))` permet une "deep copy" (copie profonde).
const obj3 = { personne: { nom: "Alice" } };
const deepClone = JSON.parse(JSON.stringify(obj3));
console.log(deepClone);
// Résultat: deepClone = { personne: { nom: "Alice" } }



// 7. Rest parameters
//  Explication: les `rest parameters` regroupent les arguments dans un tableau.
function additionner(...nombres: number[]): number {
  return nombres.reduce((acc, val) => acc + val, 0); 
}
additionner(1, 2, 3);
// 👉 Exemple d’appel: additionner(1, 2, 3) → Résultat: 6




// 8. Nullish coalescing
let nom: string | null = null;
let nomAffiché = nom ?? "Anonyme";
console.log(nomAffiché);
// Résultat: nomAffiché = "Anonyme"

// Explication: `??` ne remplace que `null` ou `undefined`, pas 0 ou "".
let age = 0;
let ageAffiché = age ?? 18;
console.log(ageAffiché);
// Résultat: ageAffiché = 0




// 9. Destructuration
let [a1, b1] = [1, 2];
// Résultat: a1 = 1, b1 = 2

let [first, ...rest] = [1, 2, 3, 4];
// Résultat: first = 1, rest = [2, 3, 4]

const fruits2 = ["pomme", "banane", "kiwi"];
const [f1, f2] = fruits2;
// Résultat: f1 = "pomme", f2 = "banane"

const personne2 = { nom: "Alice", age: 30 };
const { nom: nom2, age: age2 } = personne2;
// Résultat: nom2 = "Alice", age2 = 30





// 10. Décorateurs

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
// Explication: `@sealed` empêche l'ajout de nouvelles propriétés au constructeur et à son prototype.
// Résultat: les instances de `Greeter` ne peuvent pas être modifiées (scellées).

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
}

//  Explication: `logProperty` est un décorateur personnalisé qui trace les accès à une propriété.

function logProperty(target: any, key: string) {
  let value = target[key];
  const getter = () => {
    console.log(`Getter for ${key} returned ${value}`);
    return value;
  };
  const setter = (newVal: any) => {
    console.log(`Set ${key} to ${newVal}`);
    value = newVal;
  };
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Person {
  public name!: string;
}
// 👉 Explication: le `!` indique à TypeScript que `name` sera défini manuellement plus tard.





// 11. Map
// 👉 Explication: `Map` permet de stocker des paires clé-valeur avec itération par `for...of`.

const contacts = new Map<string, string>();
contacts.set("Alice", "alice@example.com");
contacts.set("Bob", "bob@example.com");

for (const [nom, email] of contacts) {
  console.log(`${nom} : ${email}`);
}
// 👉 Résultat console:
// Alice : alice@example.com
// Bob : bob@example.com
