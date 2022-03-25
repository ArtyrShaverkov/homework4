// summa
function summaExp(a,b){
    return a+b;
}
const summaDec=function (a,b){
    return a+b;
}
const summaArr = (a,b) => {
  return a+b;
}
console.log(`summa:${summaExp(3,9)}`)
// difference
function differenceExp(a,b){
    return a-b;
}
const differenceDec=function (a,b) {
    return a-b;
}
const differenceArr = (a,b) => {
  return a-b;
}
console.log(`разность:${differenceExp(9,5)}`)
// multiply
function multiplyExp(a,b){
    return a*b;
}
const multiplyDec=function (a,b) {
    return a*b;
}
const multiplyArr = (a,b) => {
  return a*b;
}
console.log(`произведение:${multiplyArr(5,6)}`)
// division
function divisionExp(a,b) {
    return a/b;
}
const divisionDec = function (a,b) {
    return a/b;
}
const divisionArr = (a,b) => {
  return a/b;
}
console.log(`деление:${divisionDec(15,3)}`)
// modulo
function moduloExp(a,b) {
    return a%b;
}
const moduloDec = function (a,b) {
    return a%b;
}
const moduloArr = (a,b) => {
  return a%b;
}
console.log(`разность от деления:${moduloExp(6,5)}`)
//more
function moreExp(a,b) {
    return a>b;
}
const moreDec = function (a,b) {
    return a>b;
}
const moreArr = (a,b) => {
  return a>b;
}
console.log(`больше:${moreArr(9,5)}`)
//less
function lessExp(a,b) {
    return a<b;
}
const lessDec= function (a,b) {
    return a<b;
}
const lessArr = (a,b) => {
  return a<b;
}
console.log(`меньше:${lessExp(9,5)}`)
//more exactly
 function moreExactlyExp(a,b) {
     return a>=b;
 }
 const moreExactlyDec = function (a,b) {
     return a>=b;
 }
 const moreExactlyArr = (a,b) => {
   return a>=b;
 }
 console.log(`больше или равно:${moreExactlyArr(5,5)}`)
// less exactly
function lessExactlyExp(a,b) {
    return a<=b;
}
const lessExactlyDec = function (a,b) {
    return a<=b;
}
const lessExactlyArr = (a,b) => {
  return a<=b;
}
console.log(`меньше или равно:${lessExactlyArr(4,5)}`)
// exactly
function exactlyExp(a,b) {
    return a===b;
}
const exactlyDec = function (a,b) {
    return a===b;
}
const exactlyArr = (a,b) => {
  return a===b;
}
console.log(`равно:${exactlyDec(3,4)}`)
 // notexactly
function notexactlyExp(a,b) {
    return a!==b;
}
const notexactlyDec = function (a,b) {
    return a!==b;
}
const notexactlyArr = (a,b) => {
  return a!==b;
}
console.log(`неравно:${notexactlyExp(3,5)}`)