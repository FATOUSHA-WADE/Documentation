declare let ages: number;
declare let pi: number;
declare let myFunc: Function;
declare const sum: Function;
declare function combine(a: number, b: number): number;
declare function combine(a: string, b: string): string;
declare let isActive: boolean;
declare let isLoggedIn: boolean;
declare enum Direction {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3
}
declare enum Color {
    Red = "RED",
    Blue = "BLUE"
}
declare let Name: string;
declare let greeting: string;
declare let id: string | number;
declare function throwError(): never;
declare function infinite(): never;
declare function identity<T>(arg: T): T;
declare function wrap<T>(value: T): {
    value: T;
};
declare let person: object;
declare function printObject(o: object): void;
type Point = {
    x: number;
    y: number;
};
declare const p: Point;
type StringOrNumber = string | number;
declare let value: StringOrNumber;
declare function printCoords(coord: {
    x: number;
    y: number;
}): void;
declare const rect: {
    width: number;
    height: number;
};
declare function multiply(a: number, b: number): number;
declare function sayHello(): void;
declare const people: {
    name: string;
}[];
declare const personFound: {
    name: string;
} | undefined;
declare const numbers: number[];
declare const found: number | undefined;
interface PersonWithAddress {
    name: string;
    address: {
        city: string;
        postalCode: string;
    };
}
declare const personNested: PersonWithAddress;
type Tree = {
    value: number;
    children?: Tree[];
};
declare const t: Tree;
declare function logMessage(): void;
declare function getNothing(): undefined;
declare let Fruits: string[];
declare let scores: Array<number>;
declare function add(a: number, b: number): number;
declare function getUserName(): string;
