/*
Déclaration et appel de la fonction
function helloword()
{
    document.write("hello ");
    document.write("word !");
}
helloword();
*/
/*let data = "OK";
function functionName()
{
    let data2 = 14;
    document.write(data2);
    document.write("TEST :" +data);
}
functionName();
console.log(data2); juste pour montrer qu'il y aura une erreur dans la console
*/
/*function sum(nb1, nb2)
{
    document.write(nb1 + nb2);
}
sum(4, 3);
*/
/*function sum(nb1, nb2)
{
    let result = nb1 + nb2;
    document.write(result);
}
sum(4, 3);
*/
/*function sum(nb1, nb2)
{
    return nb1 + nb2;
}
let result = sum(4, 3); //let res <- sum(4,3) 
document.write(result);
*/
/*function strange_sum(nb1, nb2)
{
    if(nb1 > nb2)
        return nb1 + nb2;
    else
        return nb1;
}
document.write(strange_sum(4, 3));
*/
/*function sum(nb1, nb2)
{
    return nb1 + nb2;
}
let n1 = 14;
let n2 = 66;
document.write(sum(n1, n2));
*/
/*
Fonction imbriquée
function some_function()
{
    let data = 16;
    function another_function()
    {
        document.write(data);
    }
    another_function();
}
some_function();
*/
/* 
une expression de fonction 
let hi = function helloword()
{
    document.write("hello word !");
};
hi();
*/
let sum = function(x, y){return x + y;};/*pas de nom de fonction ici*/
document.write(sum(45, 6));