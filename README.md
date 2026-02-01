# Typescript_Exercise


# What is TypeScript?

**TypeScript** ဆိုတာ JavaScript ကို အခြေခံထားတဲ့ **strongly-typed programming language** တစ်ခုဖြစ်ပြီး Microsoft က ဖန်တီးထားတာပါ။ JavaScript ကို ပိုပြီး **safe, scalable, maintainable** ဖြစ်အောင် တိုးချဲ့ထားတဲ့ language လို့ နားလည်နိုင်ပါတယ်။

---

## 1. Why TypeScript?

JavaScript က flexible ဖြစ်ပေမယ့် —

* Type error တွေ runtime မှာမှ ပေါ်တတ်
* Project ကြီးလာရင် bug ရှာရခက်
* Code ဖတ်ရခက်လာတတ်

➡️ TypeScript က ဒီပြဿနာတွေကို **compile time မှာပဲ ဖမ်းပေး** ပါတယ် ✅

---

## 2. TypeScript = JavaScript + Types

TypeScript က JavaScript ရဲ့ **superset** ဖြစ်ပါတယ်။

```ts
let message: string = "Hello TypeScript";
let age: number = 20;
let isOnline: boolean = true;
```

➡️ Type မမှန်ရင် error ကို compile time မှာ ပြပါတယ် ❌

---

## 3. Type Safety (Main Advantage)

```ts
function add(a: number, b: number) {
  return a + b;
}

add(5, 10);   // ✅ OK
add(5, "10"); // ❌ Error
```

➡️ Runtime error မဖြစ်ခင်မှာပဲ သိနိုင်ပါတယ် 👍

---

## 4. Type Inference

TypeScript က type ကို အချို့အခြေအနေတွေမှာ **auto detect** လုပ်ပေးပါတယ်။

```ts
let username = "Aung Aung"; // string
username = 123; // ❌ Error
```

---

## 5. Interfaces

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

## 6. Type Aliases

```ts
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
```

➡️ Union types ကို လွယ်ကူစွာ သုံးနိုင်ပါတယ်

---

## 7. TypeScript with Functions

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}
```

➡️ Parameter + return type နှစ်ခုလုံးကို သတ်မှတ်နိုင်ပါတယ်

---

## 8. TypeScript with React

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

## 9. TypeScript vs JavaScript

| Feature             | JavaScript | TypeScript |
| ------------------- | ---------- | ---------- |
| Types               | ❌ No       | ✅ Yes      |
| Compile-time checks | ❌          | ✅          |
| Large projects      | ❌ Hard     | ✅ Easy     |
| Tooling support     | Medium     | Excellent  |

---

## 10. Common Misconceptions

❌ TypeScript = New runtime language

✅ TypeScript → JavaScript သို့ compile လုပ်ပြီး browser မှာ run ပါတယ်

---

## 11. When to use TypeScript

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


# TypeScript Basic Types

TypeScript ရဲ့ **Basic Types** တွေက program ထဲမှာ သုံးမယ့် data အမျိုးအစားတွေကို တိတိကျကျ သတ်မှတ်ပေးနိုင်အောင် ကူညီပေးပါတယ်။ ဒါကြောင့် bug တွေကို early stage မှာ ဖမ်းနိုင်ပြီး code ကို ပိုပြီး safe ဖြစ်စေပါတယ်။

---

## 1. string

စာသား (text) အမျိုးအစားကို ကိုယ်စားပြုပါတယ်။

```ts
let username: string = "Aung Aung";
let message: string = `Hello ${username}`;
```

---

## 2. number

ကိန်းဂဏန်း အမျိုးအစားအားလုံး (integer, float) ကို သုံးပါတယ်။

```ts
let age: number = 25;
let price: number = 1999.99;
```

---

## 3. boolean

True / False value အတွက် သုံးပါတယ်။

```ts
let isLoggedIn: boolean = true;
let hasError: boolean = false;
```

---

## 4. array

တူညီတဲ့ type ရှိတဲ့ data တွေကို စုထားတဲ့ list ဖြစ်ပါတယ်။

```ts
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["Su Su", "Aung Aung"];
```

---

## 5. tuple

Array ဖြစ်ပေမယ့် **order နဲ့ type တိတိကျကျ** သတ်မှတ်ထားတာပါ။

```ts
let user: [number, string] = [1, "Kyaw Kyaw"];
```

---

## 6. enum

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

## 7. any

TypeScript ရဲ့ type checking ကို **ပိတ်လိုက်တဲ့ type** ဖြစ်ပါတယ်။

```ts
let value: any = 10;
value = "hello";
value = true;
```

⚠️ Best practice အနေနဲ့ `any` ကို မသုံးသင့်ပါ ❌

---

## 8. unknown

`any` နဲ့ ဆင်တူပေမယ့် **ပိုပြီး safe** ဖြစ်ပါတယ်။

```ts
let data: unknown;
data = "text";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

---

## 9. void

Function က ဘာမှ return မလုပ်တဲ့အခါ သုံးပါတယ်။

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

---

## 10. null & undefined

Value မရှိတာကို ကိုယ်စားပြုပါတယ်။

```ts
let result: null = null;
let value: undefined = undefined;
```

Strict mode မှာ အသုံးပြုရင် သတိထားရပါတယ်။

---

## 11. never

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

# Type Annotation & Type Inference

## What is Type Annotation?

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

## What is Type Inference?

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

# Interfaces & Type Aliases

## Interface

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



## Type Alias

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

# Compiling TypeScript

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

# Union & Intersection Types (TypeScript)

## Union (|) → OR (ဒီ type ဖြစ်နိုင်တယ် သို့မဟုတ် အဲ့ဒီ type)

## Intersection (&) → AND (ဒီ type နဲ့ အဲ့ဒီ type နှစ်ခုလုံး)

### Union Types (|)

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

# Intersection Types (&)

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
---
* Props typing ဆိုတာ Component ကို ဘယ်လို data ပို့လို့ရလဲဆိုတာ သတ်မှတ်ပေးခြင်းပါ
* `children` ကို type လုပ်တဲ့အခါ `React.ReactNode` ကို အသုံးပြုပါ
* Optional props တွေအတွက် `?` သုံးပါ
* `React.FC` မသုံးပဲ explicit typing လုပ်တာက ပိုလုံခြုံပါတယ်
---


