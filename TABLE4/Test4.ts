// ✅ 1. IndexOf
// Recherche l’indice de la première occurrence d’un élément.
const fruitss = ['apple', 'banana', 'mango'];
console.log(fruitss.indexOf('banana')); // Résultat : 1

const letters = ['a', 'b', 'c', 'a'];
console.log(letters.indexOf('a')); // Résultat : 0

// ✅ 2. typeof
// Vérifie le type primitif d'une variable.
const X = 42;
if (typeof X === 'number') {
  console.log("X est un nombre");
}

const y = "hello";
if (typeof y === 'string') {
  console.log("y est une chaîne");
}

// ✅ 3. in
// Vérifie si une propriété existe dans un objet.
const user = { name: "Alice" };
console.log("name" in user); // Résultat : true

const car = { model: "Tesla", year: 2023 };
console.log("year" in car); // Résultat : true

// ✅ 4. instanceof
// Vérifie si un objet est une instance d'une classe.
class Personn {}
const pn = new Personn();
console.log(pn instanceof Personn); // Résultat : true

class Animale {}
const dog = new Animale();
console.log(dog instanceof Animale); // Résultat : true

// ✅ 5. forEach
// Itère sur chaque élément du tableau.
const nums1 = [1, 2, 3];
nums1.forEach(n => console.log(n * 2)); // Résultat : 2, 4, 6

const greetings = ['hi', 'hello'];
greetings.forEach(msg => console.log(msg + '!')); // Résultat : hi!, hello!

// ✅ 6. LastIndexOf
// Renvoie l’indice de la dernière occurrence.
const colors = ['red', 'blue', 'red'];
console.log(colors.lastIndexOf('red')); // Résultat : 2

const nums7 = [5, 6, 7, 6];
console.log(nums7.lastIndexOf(6)); // Résultat : 3

// ✅ 7. Every
// Teste si tous les éléments satisfont une condition.
const nums2 = [2, 4, 6];
console.log(nums2.every(n => n % 2 === 0)); // Résultat : true

const words2 = ['hello', 'hi'];
console.log(words2.every(w => typeof w === 'string')); // Résultat : true

// ✅ 8. Unshift
// Ajoute un ou plusieurs éléments au début du tableau.
const arr1 = [2, 3];
arr1.unshift(1);
console.log(arr1); // Résultat : [1, 2, 3]

const list = ['b', 'c'];
list.unshift('a');
console.log(list); // Résultat : ['a', 'b', 'c']

// ✅ 9. Sort
// Trie les éléments du tableau.
const nums3 = [3, 1, 2];
nums3.sort();
console.log(nums3); // Résultat : [1, 2, 3]

const names = ['Charlie', 'Alice', 'Bob'];
names.sort();
console.log(names); // Résultat : ['Alice', 'Bob', 'Charlie']

// ✅ 10. Splice
// Ajoute/supprime des éléments dans le tableau.
const arr2 = [1, 2, 3, 4];
arr2.splice(1, 2);
console.log(arr2); // Résultat : [1, 4]

const lang = ['JS', 'TS', 'Python'];
lang.splice(1, 0, 'Go');
console.log(lang); // Résultat : ['JS', 'Go', 'TS', 'Python']

// ✅ 11. Filter
// Crée un nouveau tableau avec les éléments filtrés.
const nums4 = [1, 2, 3, 4];
const even = nums4.filter(n => n % 2 === 0);
console.log(even); // Résultat : [2, 4]

const animals = ['dog', 'cat', 'bat'];
const filtered = animals.filter(a => a.startsWith('c'));
console.log(filtered); // Résultat : ['cat']

// ✅ 12. Shift
// Supprime le premier élément du tableau.
const arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3); // Résultat : [2, 3]

const queue = ['first', 'second', 'third'];
queue.shift();
console.log(queue); // Résultat : ['second', 'third']

// ✅ 13. Reduce
// Réduit le tableau à une seule valeur.
const nums5 = [1, 2, 3];
const summ = nums5.reduce((acc, val) => acc + val, 0);
console.log(summ); // Résultat : 6

const product = [2, 3, 4].reduce((acc, val) => acc * val, 1);
console.log(product); // Résultat : 24

// ✅ 14. Join
// Convertit un tableau en chaîne avec séparateur.
const words = ['hello', 'world'];
console.log(words.join(' ')); // Résultat : "hello world"

const path = ['home', 'user', 'docs'];
console.log(path.join('/')); // Résultat : "home/user/docs"

// ✅ 15. ReduceRight
// Réduction de droite à gauche sur un tableau.
const arr4 = ['a', 'b', 'c'];
const right = arr4.reduceRight((acc, val) => acc + val);
console.log(right); // Résultat : "cba"

const nums8 = [1, 2, 3];
const reverseSum = nums8.reduceRight((acc, val) => acc - val);
console.log(reverseSum); // Résultat : 0 (3 - 2 - 1)

// ✅ 16. Concat
// Fusionne plusieurs tableaux.
const m = [1, 2];
const n = [3, 4];
console.log(m.concat(n)); // Résultat : [1, 2, 3, 4]

const x1 = ['a'];
const x2 = ['b', 'c'];
console.log(x1.concat(x2)); // Résultat : ['a', 'b', 'c']

// ✅ 17. Some
// Teste si au moins un élément satisfait une condition.
const nums6 = [1, 3, 5];
console.log(nums6.some(n => n % 2 === 0)); // Résultat : false

const values = [0, null, 5];
console.log(values.some(v => Boolean(v))); // Résultat : true

// ✅ 18. Pop
// Supprime le dernier élément du tableau.
const stack = [1, 2, 3];
stack.pop();
console.log(stack); // Résultat : [1, 2]

const logs = ['start', 'process', 'end'];
logs.pop();
console.log(logs); // Résultat : ['start', 'process']
