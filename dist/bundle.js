(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;
// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string){
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
// interface Person{
//     firstName: string,
//     lastName: string
// }
// function greeter(person: Person){
//     return "Hello" + person.firstName + " " + person.lastName ;
// }
// let user = new Student("Truong", "Nguyen", "Nhat");
// document.body.innerHTML = greeter(user);

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var greeter_1 = require("./greeter");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greeter_1.sayHello(name);
}
;
showHello("greeting", "Minh");

},{"./greeter":1}]},{},[2])

//# sourceMappingURL=bundle.js.map
