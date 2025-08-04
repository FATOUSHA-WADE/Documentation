declare const fruits: string[];
declare const légumes: string[];
declare const aliments: string[];
declare const personne: {
    nom: string;
    age: number;
};
declare const contact: {
    email: string;
};
declare const profil: {
    email: string;
    nom: string;
    age: number;
};
declare const obj1: {
    x: number;
    y: number;
};
declare const obj2: {
    y: number;
    z: number;
};
declare const fusion: {
    y: number;
    z: number;
    x: number;
};
declare let a: number;
declare let b: number;
declare let ref1: {
    nom: string;
};
declare let ref2: {
    nom: string;
};
type Dictionnaire = {
    [clé: string]: string;
};
declare const traductions: Dictionnaire;
type NotesParID = {
    [id: number]: number;
};
declare const notes: NotesParID;
declare const original: {
    nom: string;
};
declare const copie: {
    nom: string;
};
declare const obj3: {
    personne: {
        nom: string;
    };
};
declare const deepClone: any;
declare function additionner(...nombres: number[]): number;
declare let nom: string | null;
declare let nomAffiché: string;
declare let age: number;
declare let ageAffiché: number;
declare let a1: number, b1: number;
declare let first: number, rest: [number, number, number];
declare const fruits2: string[];
declare const f1: string, f2: string;
declare const personne2: {
    nom: string;
    age: number;
};
declare const nom2: string, age2: number;
declare function sealed(constructor: Function): void;
declare class Greeter {
    greeting: string;
    constructor(message: string);
}
declare function logProperty(target: any, key: string): void;
declare class Person {
    name: string;
}
declare const contacts: Map<string, string>;
