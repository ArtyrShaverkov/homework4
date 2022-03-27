// summa
function summaDec(a, b) {
    return a + b;
}

const summaExp = function (a, b) {
    return a + b;
}
const summaArr = (a, b) => a + b;

console.log(`summa:${summaExp(3, 9)}`)

// difference
function differenceDec(a, b) {
    return a - b;
}

const differenceExp = function (a, b) {
    return a - b;
}
const differenceArr = (a, b) => a - b;

console.log(`разность:${differenceExp(9, 5)}`)

// multiply
function multiplyDec(a, b) {
    return a * b;
}

const multiplyExp = function (a, b) {
    return a * b;
}
const multiplyArr = (a, b) => a * b;

console.log(`произведение:${multiplyArr(5, 6)}`)

// division
function divisionDec(a, b) {
    return a / b;
}

const divisionExp = function (a, b) {
    return a / b;
}
const divisionArr = (a, b) => a / b;

console.log(`деление:${divisionDec(15, 3)}`)

// modulo
function moduloDec(a, b) {
    return a % b;
}

const moduloExp = function (a, b) {
    return a % b;
}
const moduloArr = (a, b) => a % b;

console.log(`разность от деления:${moduloExp(6, 5)}`)

//more
function moreDec(a, b) {
    return a > b;
}

const moreExp = function (a, b) {
    return a > b;
}
const moreArr = (a, b) => a > b;

console.log(`больше:${moreArr(9, 5)}`)

//less
function lessDec(a, b) {
    return a < b;
}

const lessExp = function (a, b) {
    return a < b;
}
const lessArr = (a, b) => a < b;

console.log(`меньше:${lessExp(9, 5)}`)

//more exactly
function moreExactlyDec(a, b) {
    return a >= b;
}

const moreExactlyExp = function (a, b) {
    return a >= b;
}

const moreExactlyArr = (a, b) => a >= b;

console.log(`больше или равно:${moreExactlyArr(5, 5)}`)

// less exactly
function lessExactlyDec(a, b) {
    return a <= b;
}

const lessExactlyExp = function (a, b) {
    return a <= b;
}
const lessExactlyArr = (a, b) => a <= b;

console.log(`меньше или равно:${lessExactlyArr(4, 5)}`)

// exactly
function exactlyDec(a, b) {
    return a === b;
}

const exactlyExp = function (a, b) {
    return a === b;
}

const exactlyArr = (a, b) => a === b;

console.log(`равно:${exactlyDec(3, 4)}`)

// notexactly
function notexactlyDec(a, b) {
    return a !== b;
}

const notexactlyExp = function (a, b) {
    return a !== b;
}

const notexactlyArr = (a, b) => a !== b;

console.log(`неравно:${notexactlyExp(3, 5)}`)

console.log('Вова Гусь');
