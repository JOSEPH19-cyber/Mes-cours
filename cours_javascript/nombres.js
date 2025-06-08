/*
 Types primitifs:
    undefined
    null
    Boolean (true, false)
    Number
    BigInt : nombres plus grands que 2**53
    string
    symbol
Nous allons d'abord travailler qu'avec number et BigInt
*/
/*
let n = new Number(144);
document.write(n);
*/
/*
let n = new Number(144);
let n2 = Number(144);
let n3 = 144;

if(n instanceof Number)
    document.write("n est un Number<br>");
if(n2 instanceof Number)
    document.write("n2 est un Number<br>");
if(n3 instanceof Number)
    document.write("n3 est un Number<br>");
*/
/*
document.write(Number.MAX_VALUE + "<br>");
document.write(Number.MAX_SAFE_INTEGER + "<br>");
document.write(Number.MIN_VALUE + "<br>");
document.write(Number.MIN_SAFE_INTEGER + "<br>");
*/
/*
let n = NaN;
if(Number.isNaN(n))
    document.write("OK");
*/
let n = 10 / 3;
if(Number.isFinite(n))
    document.write("OK");
