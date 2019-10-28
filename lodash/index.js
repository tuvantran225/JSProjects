// import _ from 'lodash';

let frank = {
    name: "Frank",
    age: 27
};
let patrik = {
    name: "Patrik",
    age: 26
}
let jeff = {
    name: "Jeff",
    age: 27
}
let name = "Frank";
let falsey = [0, "", NaN, null, false, undefined];
let array = ["", 3, 4];
let array2 = [1, 2, 3, "four", frank, array];
console.log(_.dropRightWhile([frank, patrik, jeff], d => d.age === 26));