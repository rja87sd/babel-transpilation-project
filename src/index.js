// Credit to ChatGPT for assistance
import { greet } from "./module1.js";
import { User } from "./module2.js";

const message = greet("John");
console.log(message);

const user = new User("Alice");
user.sayHello();
