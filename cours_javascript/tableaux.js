/*
Ancienne syntaxe mais toujours valide
let anotherArray = new Array("Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck");
*/
/*
syntaxe actuelle
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
*/
/*
tableau à plusieurs dimensions
let array2D = [
    [1, 2, 3,],
    [4, 5, 6]
];
*/
/*
Autre syntaxe qui remplacera peut-être les autres dans l'avenir
let someArray = Array.of(1, 2, 3);
*/
/*
Une syntaxe particulière qui recupère les indices et les éléments dans la varible donnée
let data = {0: "Julien", 1: "Laura"};
let newArray = Array.from(data);
*/
/*let someArray = Array.of(1, 2, 3);
console.log(someArray);*/
/*
VERIFIER SI REELEMENT UN TABLEAU EST UN TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
console.log(Array.isArray(someArray));
*/
/* 
ACCES A UN ELEMENT DU TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
console.log(someArray[0]);
*/
/*
ACCES AU DERNIER ELEMENT DU TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
console.log(someArray[someArray.length - 1]);
*/
/* 
UNE AUTRE MANIERE D'ACCEDER A UN ELEMENT DU TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
console.log(someArray.at(5));
*/
/*
POUR MODIFIER UN ELEMENT DU TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
console.log(someArray[0]);
someArray[0] = "salim";
console.log(someArray[0]);
*/
/*
PARCOURIR UN TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
for(let i = 0; i < someArray.length; i++)
{
    console.log(someArray[i]);
}
*/
/*
MODIFIER UN OU DES ELEMENTS EN PARCOURANT UN TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
for(let i = 0; i < someArray.length; ++i)
    someArray[i] = "Inconnu";
console.log(someArray);
*/
/*
AUTRE MANIERE DE PARCOURIR UN TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
for(value of someArray)
    console.log(value);
*/
/*
PARCOURIR UN TABLEAU AVEC LA METHODE forEach
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
someArray.forEach(item => console.log(item));
*/
/*
AUTRE POSSIBILITE DE PARCOURIR UN TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
someArray.forEach(function(value, index)
{
    console.log(index + " - " + value);
});
*/
/*
TRANSFORMER UNE CHAINE DE CARACTERE EN TABLEAU
let s = "salut à tous !";
let someArray = s.split(' ');
console.log(someArray);
*/
/*
TRANSFORMER UN TABLEAU EN CHAINE DE CARACTERE
let s = "salut à tous !";
let someArray = s.split(' ');
console.log(someArray);
s = someArray.join(" ");
console.log(s);
*/
/*
AJOUTER UN ELEMENT DANS UN TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
console.log(someArray);
someArray.push("Maria", "Mathis");
console.log(someArray);
*/
/*
AJOUTER UN ELEMENT AU DEBUT DU TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
console.log(someArray[0]);
someArray.unshift("Maria");
console.log(someArray[0]);
*/
/*
RETIRER UN ELEMENT A LA FIN DU TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
console.log(someArray);
let deletedValue = someArray.pop();
console.log(someArray);
*/
/*
RETIRER UN ELEMENT AU DEBUT DU TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
console.log(someArray);
let deletedValue = someArray.shift();
console.log(someArray);
*/
/*let someArray = [1, 2, 3];
someArray.fill(2, 0, someArray.length);
console.log(someArray);*/
/*
CHERCHER L'INDICE D'UN ELEMENT
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
console.log(someArray.indexOf("Salim"));
*/
/*
POUR VERIFIER SI UN ELEMENT SE TROUVE DANS UN TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
console.log(someArray.includes("Salim"));
*/
/*
S'IL YA DES ELEMENTS SEMBLABLES PRENDRE LE DERNIER
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien","Salim", "Franck"];
console.log(someArray.lastIndexOf("Salim"));
*/
/*
LA PREMIERE VALEUR DONT LA CHAINE EST SUPERIEURE A 1
let someArray = ["a", "Bernard", "e", "i", "Marie","u"];
let result = someArray.find(value => value.length > 1);
console.log(result);
*/
/*
LE PREMIER INDICE DONT LA CHAINE EST SUPERIEUR A 1
let someArray = ["a", "Bernard", "e", "i", "Marie","u"];
let result = someArray.findIndex(value => value.length > 1);
console.log(result);
*/
/*
CONCATENATION DES FONCTIONS
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Salim"];
let anotherArray = ["Franck", "Nassima", "Paul"];
console.log(someArray.concat(anotherArray));
*/
/*
TRI D'UN TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Salim"];
let anotherArray = [-2, 14, 1, 2, 6, 5, 56, -23, -2, 0];
console.log(anotherArray.sort());
console.log(SomeArray.sort( (a, b) => a.localeCompare(b) ));
*/
/*
INVERSER UN TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Salim"];
let anotherArray = [-2, 14, 1, 2, 6, 5, 56, -23, -2, 0];
console.log(anotherArray.reverse());
*/
/*
EXTRACTION D'UN TABLEAU
let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Salim"];
let anotherArray = [-2, 14, 1, 2, 6, 5, 56, -23, -2, 0];
let subArray = someArray.slice(0, 2);
console.log(subArray);
*/
/*let someArray = ["Laura", "Bernard", "Franck", "Fatima", "Salim"];
let anotherArray = [-2, 14, 1, 2, 6, 5, 56, -23, -2, 0];
someArray.splice(0, 1, "Marie");
console.log(someArray);*/


