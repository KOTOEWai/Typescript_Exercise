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
console.log(addMath(5,5))


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
    return `Name: ${person.name}, Age: ${person.age} , Age: ${person.age} , Age: ${person.age}`;
}


console.log(getPersonInfo({name : "Toewailyun", age : 27}));

