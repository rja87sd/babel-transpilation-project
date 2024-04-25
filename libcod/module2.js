// Credit to ChatGPT for assistance
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
exports.User = User;