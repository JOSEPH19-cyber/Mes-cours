var age = 14; //pour créer une variable en javascript
// let age = 14; let pour le bloc de code
age = 28;
document.write(age);//pour afficher une variable
alert(age);//pour ouvrir une popope
document.write(typeof age); //pour donner le type de la variable
var name = prompt("comment t'appelles-tu ?"); //pour démander une information à l'utilisateur
//par défaut prompt c'est pour les chaînes de caractère
document.write(name);
var naissance = prompt("Quelle est votre année de naissace ?");
naissance = parseInt(naissance); //pour dire que l'année de naissance sera un nombre
document.write(typeof naissance);
/*confirm() juste un bloc pour afficher un message
parseInt()
parsefloat()*/
const pi = 3.14; //pour afficher une constante
document.write(pi);
/*
const : valeur constante (non modifiable) pour nombres, chaînes, booléens, ...
        type des données constant, mais modifiable pour les tableaux, objets,...
*/