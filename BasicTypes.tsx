// String
const Name : string = "Toewailyun";

// Number
const Age : number = 27;

// Boolean
const Married : boolean = false;

// Date
const BirthDate : Date = new Date() ;


// Array
const Numbers : number[] = [1,2,3];
let list: Array<number> = [1, 2, 3];
const StringAry: string[] = ["toe","wai","lyun"];
const BoolAry: boolean[] = [true,false,false] ;

// Tuple
const Tuple : [number,string] = [1, "toe"];

// Enum
enum Color {
    red,
    green,
    blue};

let c: Color = Color.green;


// Any
let randomValue : any = 10;
randomValue = "toe";
randomValue = false;

// Void
function printMessage(message : string) : void {
    console.log(message);
}

function printNumber(number : number) : void {
    console.log(number);
}

// Never

function handleError(message : string) : never {
    throw new Error(message);
}

// unknown
// `any` နဲ့ ဆင်တူပေမယ့် **ပိုပြီး safe** ဖြစ်ပါတယ်။

let unknownValue : unknown = 10;
unknownValue = "toe";
unknownValue = false;

let stringValue : string = unknownValue as string;
let numberValue : number = unknownValue as number;
let booleanValue : boolean = unknownValue as boolean;


// Null & Undefined

let NullValue : null = null;
let UndefinedValue : undefined = undefined;



// Object

type Person = {
    name : string,
    age : number
};

const person : Person = {
    name : "Toewailyun",
    age : 27
};

const anotherPerson : {name : string, age : number} = {
    name : "Aung Aung",
    age : 30
};

// Function Typing

// Function with parameters and return type
function add(x : number, y : number) : number {
    return x + y;
}
console.log(add(5, 10));

// Function without return type
function logMessage(message : string) : void {
    console.log(message);
}



// Function with optional parameters
function multiply(x : number, y? : number) : number {
    if (y) {
        return x * y;
    }
    return x;
}
console.log(multiply(5));


// Function with default parameters
function greet(name : string = "Guest") : string {
    return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet("Toewailyun"));



// Function type interface
interface MathOperation {
    (x : number, y : number) : number;
}

const addMath : MathOperation = (x : number, y : number) => x + y;
console.log(addMath(5,4))




// Function type alias
type StringOperation = (str : string ) => string;
const toUpperCase : StringOperation = (str : string) => str.toUpperCase();
console.log(toUpperCase("toe wai lyun"));



// Function type in type alias with optional parameter
type GreetFunction = (name : string, greeting? : string) => string;

const greetFunction : GreetFunction = (name : string, greeting : string = "Hello") : string => {
    return `${greeting}, ${name}!`;
};
console.log(greetFunction("Toe","Hi"));
console.log(greetFunction("Toe"));




// Function type in interface with default parameter
interface FarewellFunction {
    (name : string, farewell? : string) : string;
}

const farewellFunction : FarewellFunction = (name : string, farewell : string = "Goodbye") : string => {
    return `${farewell}, ${name}!`;
};
console.log(farewellFunction("Toe","Bye"));
console.log(farewellFunction("Toe"));


// Function type with rest parameters
type SumFunction = (...numbers : number[]) => number;
const sumFunction : SumFunction = (...numbers : number[]) : number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumFunction(1,4,5,6,7));



// Function type with union types
type StringOrNumberOperation = (input : string | number) => string;
type NumberOrNumberOperation = (input : string) => number;

const stringOrNumberOperation : StringOrNumberOperation = (input : string | number) : string => {
    return `Input is: ${input.toString()}`;
}   
console.log(stringOrNumberOperation("toe"));
console.log(stringOrNumberOperation(12345));



// Function type with intersection types
type Nameable = { name : string };
type Ageable = { age : number };
type Altable = { age : number}
type Alternate = { age : number}
type PersonInfo = Nameable & Ageable & Altable & Alternate;

const getPersonInfo = (person : PersonInfo) : string => {
    return `Name: ${person.name}, Age: ${person.age}`;
}
console.log(getPersonInfo({name : "Toewailyun", age : 27}));


// Interface & Type
interface Vehicle {
    make : string;
    model : string;
    year : number;
}
type Car = {
    make : string;
    model : string;
    year : number;
};
type Car2 = {
    make : string; model : string; year : number;

}
const myVehicle : Vehicle = {
    make : "Toyota",
    model : "Camry",
    year : 2020
};
const myCar : Car = {
    make : "Honda",
    model : "Civic",
    year : 2019
};
const myCar2 : Car2 = {make : "Honda", model : "Civic", year : 2019};






