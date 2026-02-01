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


//Tuple ဆိုတာ
//👉 fixed length + fixed type order array ဖြစ်ပါတယ်
const Tuple : [number,string] = [1, "toe"];
const Tuple2 : [number,boolean,string] = [2, true, "wai"];
const Tuple3 : [string,number,boolean] = ["lyun", 3, false];


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



// Interface & Type

// interface 👉 object ရဲ့ shape (structure) ကို define လုပ်ဖို့

//type 👉 any type (object, union, primitive, function) ကို define လုပ်ဖို့

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


// primitive type alias example
type Id = number | string;
let userId : Id;
userId = 12345;
userId = "abcde"

// Function type alias example
type add = (x : number, y : number) => number;
const addFunction : add = (x : number, y : number) : number => x + y;
console.log(addFunction(10,20));

// Union type alias example
type Status = "success" | "error" | "loading";
let currentStatus : Status;
currentStatus = "success";
currentStatus = "error";
currentStatus = "loading";

// Intersection type alias example
type Employee = {
    name : string;
    age : number;
};
type Manager = {    
    name : string;
    age : number;
    department : string;
};
type ManagementEmployee = Employee & Manager;

const managementEmployee : ManagementEmployee = {
    name : "Toewailyun",
    age : 27,
    department : "IT"
};  

// Extending interface example
interface Animal {
    name : string;
    age : number;
}
interface Dog extends Animal {
    breed : string;
}
const myDog : Dog = {
    name : "Buddy",
    age : 3,
    breed : "Golden Retriever"
};


// Extending type alias example
type AnimalType = {
    name : string;
    age : number;
};
type DogType = AnimalType & {
    name : string;
    age : number;
    breed : string;
};
const myDogType : DogType = {
    name : "Max",
    age : 4,
    breed : "Labrador"
};



