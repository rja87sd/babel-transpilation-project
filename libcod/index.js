"use strict";

var _module = require("./module1.js");
var _module2 = require("./module2.js");
const message = (0, _module.greet)("John");
console.log(message);
const user = new _module2.User("Alice");
user.sayHello();