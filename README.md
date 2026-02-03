
## 📑 Table of Contents

- [Typescript Exercise](#typescript-exercise)
  - [What is TypeScript](#what-is-typescript)
  - [TypeScript Basic Types](#typescript-basic-types)
  - [Type Annotation & Type Inference](#type-annotation--type-inference)
  - [Interfaces & Type Aliases](#interfaces--type-aliases)
  - [Compiling TypeScript](#compiling-typescript)
  - [Union & Intersection Types](#union--intersection-types)
  - [Generics in TypeScript](#what-are-generics-in-typescript)
  - [Utility Types](#utility-types-ဆိုတာ-ဘာလဲ)
- [React With TypeScript](#react-with-typescript)
  - [React Hooks with TypeScript](#react-hooks-with-typescript)
  - [Props & Children Typing](#props--children-typing)
  - [Event Handling Types](#event-handling-types)

## Typescript_Exercise


### What is TypeScript?

**TypeScript** ဆိုတာ JavaScript ကို အခြေခံထားတဲ့ **strongly-typed programming language** တစ်ခုဖြစ်ပြီး Microsoft က ဖန်တီးထားတာပါ။ JavaScript ကို ပိုပြီး **safe, scalable, maintainable** ဖြစ်အောင် တိုးချဲ့ထားတဲ့ language လို့ နားလည်နိုင်ပါတယ်။

---

 1. Why TypeScript?

JavaScript က flexible ဖြစ်ပေမယ့် —

* Type error တွေ runtime မှာမှ ပေါ်တတ်
* Project ကြီးလာရင် bug ရှာရခက်
* Code ဖတ်ရခက်လာတတ်

➡️ TypeScript က ဒီပြဿနာတွေကို **compile time မှာပဲ ဖမ်းပေး** ပါတယ် ✅

---

 2. TypeScript = JavaScript + Types

TypeScript က JavaScript ရဲ့ **superset** ဖြစ်ပါတယ်။

```ts
let message: string = "Hello TypeScript";
let age: number = 20;
let isOnline: boolean = true;
```

➡️ Type မမှန်ရင် error ကို compile time မှာ ပြပါတယ် ❌

---

 3. Type Safety (Main Advantage)

```ts
function add(a: number, b: number) {
  return a + b;
}

add(5, 10);   // ✅ OK
add(5, "10"); // ❌ Error
```

➡️ Runtime error မဖြစ်ခင်မှာပဲ သိနိုင်ပါတယ် 👍

---

 4. Type Inference

TypeScript က type ကို အချို့အခြေအနေတွေမှာ **auto detect** လုပ်ပေးပါတယ်။

```ts
let username = "Aung Aung"; // string
username = 123; // ❌ Error
```

---

 5. Interfaces

Object structure ကို သတ်မှတ်ဖို့ `interface` ကို သုံးပါတယ်။

```ts
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const user: User = {
  id: 1,
  name: "Su Su",
  isAdmin: false,
};
```

---

 6. Type Aliases

```ts
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
```

➡️ Union types ကို လွယ်ကူစွာ သုံးနိုင်ပါတယ်

---

 7. TypeScript with Functions

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}
```

➡️ Parameter + return type နှစ်ခုလုံးကို သတ်မှတ်နိုင်ပါတယ်

---

 8. TypeScript with React

```tsx
interface Props {
  title: string;
}

function Header({ title }: Props) {
  return <h1>{title}</h1>;
}
```

➡️ React props error တွေကို ကာကွယ်ပေးပါတယ် ✅

---

 9. TypeScript vs JavaScript

| Feature             | JavaScript | TypeScript |
| ------------------- | ---------- | ---------- |
| Types               | ❌ No       | ✅ Yes      |
| Compile-time checks | ❌          | ✅          |
| Large projects      | ❌ Hard     | ✅ Easy     |
| Tooling support     | Medium     | Excellent  |

---

 10. Common Misconceptions

❌ TypeScript = New runtime language

✅ TypeScript → JavaScript သို့ compile လုပ်ပြီး browser မှာ run ပါတယ်

---

 11. When to use TypeScript

✅ Medium to large projects
✅ Team projects
✅ React / Next.js / NestJS

❌ Small scripts (optional)

---

* TypeScript = JavaScript + Types
* Bugs ကို early catch လုပ်နိုင်
* Code readable & maintainable
* Modern web development အတွက် industry standard

---






### TypeScript Basic Types

TypeScript ရဲ့ **Basic Types** တွေက program ထဲမှာ သုံးမယ့် data အမျိုးအစားတွေကို တိတိကျကျ သတ်မှတ်ပေးနိုင်အောင် ကူညီပေးပါတယ်။ ဒါကြောင့် bug တွေကို early stage မှာ ဖမ်းနိုင်ပြီး code ကို ပိုပြီး safe ဖြစ်စေပါတယ်။

---

1. string

စာသား (text) အမျိုးအစားကို ကိုယ်စားပြုပါတယ်။

```ts
let username: string = "Aung Aung";
let message: string = `Hello ${username}`;
```

---

 2. number

ကိန်းဂဏန်း အမျိုးအစားအားလုံး (integer, float) ကို သုံးပါတယ်။

```ts
let age: number = 25;
let price: number = 1999.99;
```

---

 3. boolean

True / False value အတွက် သုံးပါတယ်။

```ts
let isLoggedIn: boolean = true;
let hasError: boolean = false;
```

---

 4. array

တူညီတဲ့ type ရှိတဲ့ data တွေကို စုထားတဲ့ list ဖြစ်ပါတယ်။

```ts
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["Su Su", "Aung Aung"];
```

---

 5. tuple

Array ဖြစ်ပေမယ့် **order နဲ့ type တိတိကျကျ** သတ်မှတ်ထားတာပါ။

```ts
let user: [number, string] = [1, "Kyaw Kyaw"];
```

---

6. enum

အတူတူ ဆိုင်တဲ့ constant value တွေကို group လုပ်ဖို့ သုံးပါတယ်။

```ts
enum Status {
  Success,
  Error,
  Loading,
}

let currentStatus: Status = Status.Success;
```

---

7. any

TypeScript ရဲ့ type checking ကို **ပိတ်လိုက်တဲ့ type** ဖြစ်ပါတယ်။

```ts
let value: any = 10;
value = "hello";
value = true;
```

⚠️ Best practice အနေနဲ့ `any` ကို မသုံးသင့်ပါ ❌

---

 8. unknown

`any` နဲ့ ဆင်တူပေမယ့် **ပိုပြီး safe** ဖြစ်ပါတယ်။

```ts
let data: unknown;
data = "text";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

---

 9. void

Function က ဘာမှ return မလုပ်တဲ့အခါ သုံးပါတယ်။

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

---

 10. null & undefined

Value မရှိတာကို ကိုယ်စားပြုပါတယ်။

```ts
let result: null = null;
let value: undefined = undefined;
```

Strict mode မှာ အသုံးပြုရင် သတိထားရပါတယ်။

---

 11. never

ဘယ်တော့မှ value မ return မလုပ်တဲ့ function အတွက် သုံးပါတယ်။

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

---



* `string` → စာသား
* `number` → ကိန်းဂဏန်း
* `boolean` → true / false
* `array` → list of values
* `tuple` → fixed structure array
* `enum` → constant group
* `any` → avoid using
* `unknown` → safer than any
* `void` → no return
* `never` → no value ever

---





### Type Annotation & Type Inference

 What is Type Annotation?

Type Annotation ဆိုတာ
👉 Variable / function ကို ဒီ type ဖြစ်ရမယ် လို့ ကိုယ်တိုင်ရေးပေးတာပါ


* Variable annotation

```js
let name: string = "Alex";
let age: number = 20;
let isAdmin: boolean = true;
```

* Function annotation

```js
function add(a: number, b: number): number {
  return a + b;
}
```

* Arrow function

```js
const greet = (name: string): string => {
  return `Hello ${name}`;
};
```

* Array & object annotation

```js
let numbers: number[] = [1, 2, 3];

let user: { id: number; name: string } = {
  id: 1,
  name: "Alex",
};
```

---

 What is Type Inference?

Type Inference ဆိုတာ
 TypeScript က ကိုယ်တိုင် type ကို ခန့်မှန်းပေးတာ

* Variable inference
```js
let count = 10;
// TS knows: number


❌ Error

count = "ten";
```


* Function return inference

```js
function multiply(a: number, b: number) {
  return a * b;
}
// return type => number (auto)
```

* useState inference (React)
```js
const [count, setCount] = useState(0);
// TS => number
```

* Object inference

```js
const user = {
  id: 1,
  name: "Alex",
};
```



---

### Interfaces & Type Aliases

 Interface

 What is Interface?

 Object structure (shape) ကို define လုပ်ဖို့

* Basic interface

```js
interface User {
  id: number;
  name: string;
}
```

* Optional & readonly

```js
interface User {
  id: number;
  name?: string;
  readonly email: string;
}
```

* Interface extend

```js
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

```



 Type Alias

What is Type Alias?

Type ကို နာမည်တစ်ခု assign လုပ်တာ


* Object type
```js
type User = {
  id: number;
  name: string;
};
```

* Union type 
```js

type Status = "loading" | "success" | "error";
```

* Function type
```js
type Add = (a: number, b: number) => number;
```

* Intersection
```js
type AdminUser = User & { role: string };
```

---

## Compiling TypeScript

## tsc & tsconfig.json

### What is compiling?

Browser / Node.js က TypeScript ကိုမဖတ်နိုင်ပါဘူး
ဒါကြောင့် TypeScript ကို JavaScript ပြောင်းတဲ့ process ကို compile လို့ခေါ်ပါတယ်။

```js
TypeScript (.ts / .tsx)  →  JavaScript (.js)
```

### tsc (TypeScript Compiler)

* Install TypeScript
```js
npm install -g typescript
```

* Check version
```js
tsc -v
```

* Compile single file
```js
tsc index.ts
```
➡️ index.js ထွက်လာမယ်

* Compile with watch mode 

```js
tsc --watch
```
file save တိုင်း auto compile



### What is tsconfig.json?

* TypeScript compiler ကို ဘယ်လို compile လုပ်မလဲ လို့ညွှန်ကြားတဲ့ config file ပါ

Create file

```js
tsc --init
```

---

## Union & Intersection Types (TypeScript)

* Union (|) → OR (ဒီ type ဖြစ်နိုင်တယ် သို့မဟုတ် အဲ့ဒီ type)

* Intersection (&) → AND (ဒီ type နဲ့ အဲ့ဒီ type နှစ်ခုလုံး)

## Union Types (|)

* Basic Union
```js
let id: number | string;

id = 1;
id = "A001";
// id = true ❌
```
### Union in Functions

```js
function printId(id: number | string) {
  console.log(id);
}

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

```

### Union with Literal Types
```js
type Status = "loading" | "success" | "error";

let state: Status = "loading";

```

## Intersection Types (&)


## Basic Intersection
```js
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name:"toe",
  salary: 20000
};

```
* properties အားလုံးပါရမယ်

## Intersection with Interfaces

```js
interface User {
  id: number;
}

interface Admin {
  role: "admin";
}

type AdminUser = User & Admin;

```
---

## Intersection in React Props

```js
interface BaseProps {
  children: React.ReactNode;
}

interface ButtonProps {
  variant: "primary" | "secondary";
}

type Props = BaseProps & ButtonProps;
```

---

## What are Generics in TypeScript?

* Generics let you write reusable, type-safe code that works with different data types without losing type information.

👉 Think of generics as “types with placeholders”.

```js
function identity(value: any) {
  return value;
}
```

❌ Problem: any removes type safety.

* Generic Version

```js
function identity<T>(value: T): T {
  return value;
}
```

* T is a type variable
* TypeScript figures out what T is when you use the function


```js
identity<string>("Hello");
identity<number>(100);
```
Safe + flexible.

---

 * Generic Functions

Example: Get first element

```js
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<number>([1, 2, 3]);     // number
getFirst<string>(["a", "b"]);   // string
```

TypeScript remembers the type.

---

* Generic Arrow Function

```js
const wrapValue = <T>(value: T) => {
  return { value };
};

wrapValue<string>("Hello");
wrapValue<number>(10);

```

* Generic Interfaces
```js
interface ApiResponse<T> {
  data: T;
  success: boolean;
}


Usage:

const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "John", age: 25 },
  success: true,
};
```

🔥 Very common in API + React apps.

* Generic Types (Type Aliases)

```js
type Box<T> = {
  value: T;
};

const numberBox: Box<number> = { value: 10 };
const stringBox: Box<string> = { value: "Hello" };
```
* Generics with Multiple Types
```js
function pair<T, U>(a: T, b: U) {
  return [a, b];
}

pair<string, number>("age", 25);
```

* Generic Constraints (extends)

Sometimes you want to limit what T can be.
```js
function getLength<T extends { length: number }>(value: T) {
  return value.length;
}

getLength("Hello");     // ✅
getLength([1, 2, 3]);  // ✅
getLength(123);        // ❌ Error
```
* Generics in React 

useState with Generics
```js
const [count, setCount] = useState<number>(0);
```

* Props with Generics
```js
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return <>{items.map(renderItem)}</>;
}


Usage:

<List
  items={[1, 2, 3]}
  renderItem={(item) => <div>{item}</div>}
/>
```

## Utility Types ဆိုတာ ဘာလဲ?

* Utility Types ဆိုတာ TypeScript မှာ ပါဝင်ပြီးသား (built-in) ဖြစ်တဲ့ အထူးအသုံးဝင်တဲ့ Type တွေပါ။ ဒီ Type တွေကို သုံးပြီး ရှိပြီးသား Type တွေကို ပြောင်းလဲပြီး အသစ်တွေ ဖန်တီးလို့ရပါတယ်။

```js
// မူရင်း User Type
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    address: string;
}

// Utility Types သုံးပြီး အသစ်ပြောင်းခြင်း
type PartialUser = Partial<User>;  // property အားလုံး optional ဖြစ်သွား
type SimpleUser = Pick<User, 'id' | 'name'>;  // လိုတဲ့ property တွေပဲ ယူ
type UserWithoutAge = Omit<User, 'age'>;  // age ကို ဖယ်ထုတ်
```

## အဓိက Utility Types (၁၀) မျိုး

## 1.Partial<T> 

```js
interface User {
    id: number;
    name: string;
    email: string;
}

// User ရဲ့ property အားလုံး optional ဖြစ်သွား
type PartialUser = Partial<User>;

// သုံးပုံ
const user1: PartialUser = {};  // ✓ ဘာမှမထည့်လည်း ရ
const user2: PartialUser = { id: 1 };  // ✓ id ပဲထည့်
const user3: PartialUser = { name: "မောင်မောင်" };  // ✓ name ပဲထည့်
const user4: PartialUser = { 
    id: 1, 
    name: "မောင်မောင်", 
    email: "maung@example.com" 
};  // ✓ အကုန်ထည့်

// ❌ ဒါမျိုးလည်း ရ
const user5: PartialUser = { phone: "09123456789" };  // ✗ Error! phone မရှိ
```
---
## 2. Required<T> 

```js
interface Config {
    apiUrl?: string;      // optional
    timeout?: number;     // optional  
    retry?: boolean;      // optional
}

// Config ရဲ့ optional property အားလုံး required ဖြစ်သွား
type RequiredConfig = Required<Config>;

// သုံးပုံ
const config1: RequiredConfig = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retry: true
};  // ✓ အကုန်ထည့်

const config2: RequiredConfig = {
    apiUrl: "https://api.example.com"
};  // ✗ Error! timeout, retry မထည့်
```
## 3. Readonly<T>

```js
interface Book {
    title: string;
    author: string;
    price: number;
}

// Book ရဲ့ property အားလုံး ပြင်လို့မရ (immutable)
type ReadonlyBook = Readonly<Book>;

// သုံးပုံ
const book: ReadonlyBook = {
    title: "မြန်မာ့သမိုင်း",
    author: "ဒေါက်တာသန်းထွန်း",
    price: 5000
};

book.title = "သမိုင်းအသစ်";  // ✗ Error! ပြင်လို့မရ
book.price = 6000;              // ✗ Error! ပြင်လို့မရ

```

---
## 4. Pick<T, K>

```js
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
}

// Product ကနေ id, name, price ပဲယူ
type ProductPreview = Pick<Product, 'id' | 'name' | 'price'>;

// သုံးပုံ
const preview: ProductPreview = {
    id: 1,
    name: "iPhone 15",
    price: 2000000
};  // ✓ ဒါပဲလိုတယ်


// ❌ ဒါမျိုးမရ
const wrongPreview: ProductPreview = {
    id: 1,
    name: "iPhone 15"
};  // ✗ Error! price မပါ

```
---
## 5. Omit<T, K>

```js
interface Student {
    id: number;
    name: string;
    age: number;
    address: string;
    phone: string;
    nrc: string;      // မပြချင်တာ
    password: string; // မပြချင်တာ
}

// Student ကနေ nrc, password ဖယ်ထုတ်
type PublicStudent = Omit<Student, 'nrc' | 'password'>;

// သုံးပုံ
const student: PublicStudent = {
    id: 1,
    name: "မောင်မောင်",
    age: 20,
    address: "ရန်ကုန်",
    phone: "09123456789"
};  // ✓ nrc, password မပါ

// ❌ ဒါမျိုးမရ
const wrongStudent: PublicStudent = {
    id: 1,
    name: "မောင်မောင်",
    nrc: "12/ABC(N)123456"  // ✗ Error! nrc မပါနိုင်
};

```
---
## 6. Record<K, T>

```js
// Key တွေ ဘယ်လိုဖြစ်မယ်၊ Value တွေ ဘယ်လိုဖြစ်မယ် သတ်မှတ်
type PageTitles = Record<string, string>;

// သုံးပုံ
const titles: PageTitles = {
    home: "ပင်မစာမျက်နှာ",
    about: "ကျွန်ုပ်တို့အကြောင်း",
    contact: "ဆက်သွယ်ရန်"
};

// ဒါမျိုးလည်းရေး
type UserRole = 'admin' | 'user' | 'guest';
type RolePermissions = Record<UserRole, string[]>;

const permissions: RolePermissions = {
    admin: ['create', 'read', 'update', 'delete'],
    user: ['read', 'update'],
    guest: ['read']
};

```
---
## 7. Exclude<T, U>

```js
type Colors = 'red' | 'blue' | 'green' | 'yellow';
type PrimaryColors = Exclude<Colors, 'yellow'>;  // 'yellow' ဖယ်ထုတ်

// Result: 'red' | 'blue' | 'green'

// သုံးပုံ
const color1: PrimaryColors = 'red';    // ✓
const color2: PrimaryColors = 'blue';   // ✓
const color3: PrimaryColors = 'yellow'; // ✗ Error!
```
---
## 8. Extract<T, U>
```js
type Animals = 'cat' | 'dog' | 'bird' | 'fish';
type Pets = Extract<Animals, 'cat' | 'dog'>;  // cat, dog ပဲယူ

// Result: 'cat' | 'dog'

// သုံးပုံ
const pet1: Pets = 'cat';   // ✓
const pet2: Pets = 'dog';   // ✓
const pet3: Pets = 'bird';  // ✗ Error!
```
## 9.NonNullable<T>

```js
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;  // null, undefined ဖယ်

// Result: string

// သုံးပုံ
const str1: DefinitelyString = "မင်္ဂလာပါ";  // ✓
const str2: DefinitelyString = null;            // ✗ Error!
const str3: DefinitelyString = undefined;       // ✗ Error!

```
---
## 10. ReturnType<T> 

```js
function getUser() {
    return {
        id: 1,
        name: "မောင်မောင်",
        age: 25
    };
}

type UserReturnType = ReturnType<typeof getUser>;

// Result: { id: number; name: string; age: number; }

// သုံးပုံ
const user: UserReturnType = {
    id: 2,
    name: "စုစု",
    age: 22
};

```


---














# React With Typescript

# React Hooks with TypeScript

React ကို TypeScript နဲ့ သုံးတဲ့အခါ **Hooks** တွေကို type-safe ဖြစ်အောင် သုံးနိုင်တာက အရေးကြီးဆုံးအချက်ပါ။ 

---

## 1. useState with TypeScript

### Basic Type

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Union Type

```tsx
const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
```

---
## 2. useEffect with TypeScript

`useEffect` မှာ type ကို များသောအားဖြင့် inference လုပ်နိုင်လို့ explicit type မရေးလည်းရပါတယ်။

```tsx
import { useEffect, useState } from "react";

function User() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    setName("Aung Aung");
  }, []);

  return <div>{name}</div>;
}
```
⚠️ `useEffect` က `void | (() => void)` ကို return ပြန်ရပါတယ်။

---

## 3. useRef with TypeScript

### DOM Reference

```tsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

### Mutable Value

```tsx
const countRef = useRef<number>(0);
```

---

## 4. useContext with TypeScript

### Create Context

```tsx
import { createContext, useContext } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);
```

### Use Context

```tsx
function ThemeButton() {
  const context = useContext(ThemeContext);

  if (!context) return null;

  return (
    <button onClick={context.toggleTheme}>
      Theme: {context.theme}
    </button>
  );
}
```

---

## 5. useReducer with TypeScript

```tsx
import { useReducer } from "react";

type Action = | { type: "increment" }  | { type: "decrement" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

---

## 6. useCallback with TypeScript

```tsx
import { useCallback } from "react";

const handleClick = useCallback((id: number): void => {
  console.log(id);
}, []);
```

---

## 7. useMemo with TypeScript

```tsx
import { useMemo } from "react";

const total = useMemo<number>(() => {
  return items.reduce((sum, item) => sum + item.price, 0);
}, [items]);
```

---

## 8. Custom Hooks with TypeScript

```tsx
import { useState } from "react";

function useToggle(initial: boolean): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initial);

  const toggle = () => setValue(v => !v);

  return [value, toggle];
}
```

Usage:

```tsx
const [isOpen, toggle] = useToggle(false);
```

---

## Best Practices

* `useState` မှာ initial value မရှိရင် generic type သုံးပါ
* `useRef` မှာ `null` ကို ထည့်စဉ်းစားပါ
* `useContext` မှာ `null` safety ကို handle လုပ်ပါ
* `any` ကို ရှောင်ပါ

---


React Hooks + TypeScript =

* Safer code
* Better autocomplete
* Fewer runtime bugs
* Professional codebase

✅ React + TypeScript ကို production level သုံးချင်ရင် Hooks typing ကို သေချာနားလည်ထားရပါမယ်။

---


# Props & Children Typing 

## 1. Why Props Typing Matters

TypeScript helps you:

* Catch bugs at compile time
* Make components self-documented
* Get better IntelliSense (autocomplete)
* Avoid invalid prop usage

Without proper typing, React components become harder to maintain as apps grow.

---

## 2. Basic Props Typing

The most common way is to define a **Props type** and use it in your component.

```tsx
type ButtonProps = {
  label: string;
};


function Button(props: ButtonProps) {
  return <button>{props.label}</button>;
}

```

### Destructuring Props (Recommended)

```tsx
type ButtonProps = {
  label: string;
};

function Button({ label }: ButtonProps) {
  return <button>{label}</button>;
}
```

---

## 3. Optional Props

Use `?` to mark props as optional.

```tsx
type CardProps = {
  title: string;
  subtitle?: string;
};

function Card({ title, subtitle }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
```

---

## 4. Typing Event Props

When passing functions as props:

```tsx
type InputProps = {
  onChange: (value: string) => void;
};

function Input({ onChange }: InputProps) {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
```

---

## 5. Children Typing (The Important Part)

### The Correct Way: `React.ReactNode`

```tsx
type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}
```

✅ `React.ReactNode` supports:

* JSX elements
* strings & numbers
* fragments
* arrays
* conditional rendering

---

## 6. Children with Other Props

```tsx
type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

function Layout({ title, children }: LayoutProps) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
```

Usage:

```tsx
<Layout title="Dashboard">
  <p>Welcome back!</p>
</Layout>
```

---

## 7. `React.FC` and Children (Why It’s Not Recommended)

```tsx
const Box: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
```

⚠️ Why many teams avoid `React.FC`:

* Automatically adds `children` (less explicit)
* Can cause confusion with defaultProps
* Less flexible for generics

✅ Modern recommendation: **explicit props typing**

---

## 8. Restricting Children (Advanced)

Only allow a specific component:

```tsx
type TabsProps = {
  children: React.ReactElement<TabProps>[];
};
```

Only allow text:

```tsx
type TextOnlyProps = {
  children: string;
};
```

---

## 9. Props with Default Values


```tsx
type AvatarProps = {
  size?: number;
};

function Avatar({ size = 40 }: AvatarProps) {
  return <img width={size} height={size} />;
}
```
---
✔ Always define a Props type or interface
✔ Use `React.ReactNode` for children
✔ Prefer destructuring in function parameters
✔ Avoid `React.FC` unless your team standardizes it
✔ Keep props small and meaningful

* Props typing ဆိုတာ Component ကို ဘယ်လို data ပို့လို့ရလဲဆိုတာ သတ်မှတ်ပေးခြင်းပါ
* `children` ကို type လုပ်တဲ့အခါ `React.ReactNode` ကို အသုံးပြုပါ
* Optional props တွေအတွက် `?` သုံးပါ
* `React.FC` မသုံးပဲ explicit typing လုပ်တာက ပိုလုံခြုံပါတယ်
---

















# Event Handling Types

## Core Rule (Memorize This)
```js
React.EventType<HTML_ELEMENT>
```

## MUST-KNOW Event Types
```js
export default function Button() {
   
    // Form Submit Handler
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    }
      
    // Text Input Change Handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input changed: ", e.target.value);
    
    }

    // File Input Change Handler
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            console.log("File selected: ", e.target.files[0].name);
        }   
    }

    // Select Dropdown Change Handler
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Selected option: ", e.target.value);
    }
    
    // Textarea Change Handler
    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log("Textarea changed: ", e.target.value);
    }
    
    // Button Click Handler
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Button clicked");
        console.log("Mouse position:", e.clientX, e.clientY);
    }
    

  
    return (
        <div>
            <form onSubmit={handleSubmit} >
           
                {/* Text Input */}
                 <input type="text" onChange={handleChange} />

                {/* File Input */}
                <div style={{marginBottom: '15px'}}>
                    <label htmlFor="fileInput">File Upload: </label>
                    <input 
                        id="fileInput"
                        type="file" 
                        accept="image/*" 
                        onChange={handleFile}
                        style={{width: '100%'}}
                    />
                </div>

                {/* Select Dropdown */}
                <div style={{marginBottom: '15px'}}>
                    <label htmlFor="mySelect">Select Option: </label>
                    <select 
                        id="mySelect" 
                        onChange={handleSelect}
                        style={{width: '100%', padding: '8px'}}
                    >
                        <option value="">Choose...</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                {/* Textarea */}
                <div style={{marginBottom: '15px'}}>
                    <label htmlFor="mytext">Textarea: </label>
                    <textarea 
                        id="mytext" 
                        onChange={handleTextArea}
                        placeholder="Type something..."
                        rows={3}
                        style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}
                    ></textarea>
                </div>
                
                 <button onClick={handleClick} type="submit" style={{marginBottom: '15px'}} >
                        Click
                 </button>
            </form>

        

            
        </div>
    )
}
```