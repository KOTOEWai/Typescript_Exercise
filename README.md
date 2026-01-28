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

