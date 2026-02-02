
// Example of a generic function in TypeScript
function getTypes<T>(arg: T): T {
    return arg;
}

getTypes<number>(42);
getTypes<string> ("Hello, TypeScript!");

// Example with multiple generic types
function MultipleTypes<T, U>(arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
}
MultipleTypes<number, string>(100, "Generics in TypeScript");

// Example of a generic arrow function
const Agree =<T> (arg: T):T => {
    return arg;
}

Agree<boolean>(true);
Agree<Array<number>>([1, 2, 3, 4, 5]);


// Generic Constraints
function withConstraints<T extends { length: number }>(arg: T): T {
    console.log(arg.length);
    return arg;
}
withConstraints("Hello, World!");
withConstraints([1, 2, 3, 4, 5]);
// The following line would cause a TypeScript error due to the constraint
// withConstraints(42); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.


// Generic Interfaces

interface GenericIdentityFn<T> {
    (arg: T): T;
}
const identity: GenericIdentityFn<number> = function(arg: number): number {
    return arg;
}
identity(123);
const identityString: GenericIdentityFn<string> = function(arg: string): string {
    return arg;
}
identityString("Generic Interface Example");



// Generic Types
type GenericArray<T> = Array<T>;
type GenericObject<T> = { [key: string]: T };
type GenericStringArray = GenericArray<string>;
type GenericNumberArray = GenericArray<number>;

const strArray: GenericStringArray = ["a", "b", "c", "d", "e"];
console.log(strArray);

const numArray: GenericNumberArray = [1, 2, 3, 4, 5];
console.log(numArray);

const obj: GenericObject<number> = { a: 1, b: 2, c: 3 };
console.log(obj);


const numberArray: GenericArray<number> = [1, 2, 3, 4, 5];
const stringArray: GenericArray<string> = ["a", "b", "c", "d", "e"];
console.log(numberArray);
console.log(stringArray);
