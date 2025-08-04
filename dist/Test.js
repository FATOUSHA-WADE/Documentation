// 1. Constructor, méthode, this
// Utilisation du constructeur, des méthodes et du mot-clé this.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
var Persons = /** @class */ (function () {
    function Persons(name) {
        this.name = name;
    }
    Persons.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Persons;
}());
var p1 = new Persons("Alice");
p1.greet(); // Résultat : Hello, my name is Alice
// 2. Constructeur privé
// Un constructeur privé empêche la création d'instances directes (ex. singleton).
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
var s1 = Singleton.getInstance();
var s2 = Singleton.getInstance();
console.log(s1 === s2); // Résultat : true
// 3. Private, public
// Modificateurs d'accès pour les propriétés et méthodes.
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.age = 5;
        this.name = name;
    }
    Animal1.prototype.getAge = function () {
        return this.age;
    };
    return Animal1;
}());
var a01 = new Animal1("Dog");
console.log(a01.name); // Résultat : Dog
console.log(a01.getAge()); // Résultat : 5
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var c1 = new Circle(3);
console.log(c1.getArea()); // Résultat : 28.27...
// 5. Initialisation courte dans le constructeur
// Déclare et initialise directement les propriétés dans le constructeur.
var Pointe = /** @class */ (function () {
    function Pointe(x, y) {
        this.x = x;
        this.y = y;
    }
    return Pointe;
}());
var p2 = new Pointe(1, 2);
console.log(p2); // Résultat : { x: 1, y: 2 }
// 6. Classe générique
// Utilisation d’un type paramétré dans une classe.
var Box = /** @class */ (function () {
    function Box(value) {
        this.content = value;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    return Box;
}());
var stringBox = new Box("Hello");
console.log(stringBox.getContent()); // Résultat : Hello
// 7. Fill (méthode Array.prototype.fill)
// Remplit un tableau avec une valeur statique.
var filled = new Array(4).fill(0);
console.log(filled); // Résultat : [0, 0, 0, 0]
// 8. Interface et classe abstraite
// Classe abstraite avec méthode implémentée et à implémenter.
var Animale2 = /** @class */ (function () {
    function Animale2() {
    }
    Animale2.prototype.move = function () {
        console.log("Moving...");
    };
    return Animale2;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Bark");
    };
    return Dog;
}(Animale2));
var d1 = new Dog();
d1.makeSound(); // Résultat : Bark
d1.move(); // Résultat : Moving...
// 9. Decorator factory
// Fabrique de décorateurs qui personnalisent les comportements.
function Log(prefix) {
    return function (target, key) {
        var value = target[key];
        var getter = function () {
            console.log("".concat(prefix, " get: ").concat(value));
            return value;
        };
        var setter = function (val) {
            console.log("".concat(prefix, " set: ").concat(val));
            value = val;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
var Product = /** @class */ (function () {
    function Product() {
        //@Log("Price")
        this.price = 0;
    }
    return Product;
}());
var prod = new Product();
prod.price = 99; // Affiche : Price set: 99
console.log(prod.price); // Affiche : Price get: 99
var u1 = { id: 1, name: "Alice" };
// u1.id = 2; ❌ Erreur
// 11. Chaînage optionnel
// Accès sécurisé aux propriétés potentiellement nulles/undefined.
var user = {
    profile: {
        email: "alice@example.com",
    },
};
console.log((_a = user.profile) === null || _a === void 0 ? void 0 : _a.email); // Résultat : alice@example.com
//console.log(user.address?.city); // Résultat : undefined
// 12. Override
// Redéfinir une méthode héritée (avec override si strict mode activé).
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.greet = function () {
        console.log("Hello");
    };
    return Base;
}());
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    function Sub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sub.prototype.greet = function () {
        console.log("Hi!");
    };
    return Sub;
}(Base));
new Sub().greet(); // Résultat : Hi!
var myDog = { name: "Rex", breed: "Labrador" };
console.log(myDog);
// 14. Getters et setters
// Accès et modification de propriétés avec contrôle.
var Person2 = /** @class */ (function () {
    function Person2() {
        this._age = 0;
    }
    Object.defineProperty(Person2.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 0) {
                this._age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person2;
}());
var p3 = new Person2();
p3.age = 30;
console.log(p3.age); // Résultat : 30
var adds = function (a, b) { return a + b; };
console.log(adds(1, 2)); // Résultat : 3
// 16. Fonction générique avec keyof
// Utilise keyof pour restreindre les types de clé.
function getProperty(obj, key) {
    return obj[key];
}
var car = { brand: "Toyota", year: 2020 };
console.log(getProperty(car, "brand")); // Résultat : Toyota
var Conf = { host: "localhost", port: 9000 };
console.log(Conf);
// 18. Tuple
// Tableau à longueur et types fixes.
var personne1 = ["Alice", 30];
console.log(personne1); // Résultat : ["Alice", 30]
var move = "left";
// move = "up"; Erreur
