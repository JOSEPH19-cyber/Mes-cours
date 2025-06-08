/*
EXERCICES SUR LES VARIABLES ET OPERATEURS

var prenom = "joseph";
var age = 18;
age = 19;
document.write("prénom:", prenom);
document.write("age:", age);
var ville = "kinshasa";
document.write(ville);


var a = 10;
var b = 3;
a = 15;
b = 4;

var addition = a + b;
document.write(addition);
var soustraction = a - b;
document.write(soustraction);
var multiplication = a*b;
document.write(multiplication);
var division = a / b;
document.write(division);
var modulo = a % b;
document.write(modulo); 

var message = "bonjour";
var nom = "mbiki";
var cours = "Bienvenue dans le cours de javascript"

message += nom;
document.write(message); 
message += cours;
document.write(message);

var score = 100;
var joueur = "sam";
var estConnecte = true;
document.write(typeof score);
document.write(typeof joueur);
document.write(typeof estConnecte);
*/
/* 
EXERCICES SUR LES CONDITIONS 
let number = prompt("Saisissez un nombre:");
number = parseInt(number);

if(number % 2 == 0)
{
    document.write("le nombre est pair");
}
else
{
    document.write("le nombre est impair");
}

let age = prompt("Quel âge avez-vous ?");
age = parseInt(age);
if (age >= 18)
{
    document.write("Vous êtes majeur");
}
else
{
    document.write("vous êtes mineur");
}
let mot_de_passe = prompt("Entrez le mot de passe");
if(mot_de_passe === "azerty")
{
    document.write("Bienvenue");
}
else
{
    document.write("mot de passe incorrect");
}
let a = prompt("Entrez le premier nombre flottant");
a = parseFloat(a);
let b = prompt("Entrez le deuxième nombre flottant");
b = parseFloat(b);
if (a > b)
{
    document.write("le plus grand nobre est :" +a);
}
else if (b > a)
{
    document.write("le plus grand nombre est:" +b);
}
else
{
    document.write("les deux nombres sont égaux.");
}
let note = prompt("Entrez une de 0 à 20 pour vérifier la satisfaction.")
note = parseFloat(note);
switch(note)
{
    case (note >= 16):
        {
            document.write("très bien");
            break;
        }
    case (note >= 14):
        {
            document.write("Bien");
            break;
        }
    case (note >= 12):
        {
            document.write("Assez bien");
            break;
        }
        case (note >= 10):
            {
                document.write("Passable");
                break;
            }
        case (note < 10):
            {
                document.write("Insuffisant");
                break;
            }
        default:
            alert("pas de valeur reconnue.");
            break;
}
*/

/*
EXERCICES SUR LES BOUCLES
for (let i = 0; i < 10; i++)
{
    document.write("A");
}
let number = prompt("Entrez un nombre");
number = parseInt(number);
for(let i = 1; i < number + 1; i++)
{
    document.write(i);
}
let nombre = prompt("Saisir un nombre");
nombre = parseInt(nombre);
let i = 0;
while (i < nombre + i)                  
{
    document.write(nombre);
    nombre -= 1;
    i++;
}
for(let i = 1; i < 20; i++)
{
    if (i % 2 == 0)
        document.write(i);
}
let mot = prompt("Saisir un mot quelconque");
nbr_fois = prompt("Combien de fois voulez-vous afficher" +mot);
nbr_fois = parseInt(nbr_fois);
for(let i = 1; i < nbr_fois + 1; i++)
{
    document.write(mot);
}
let number = prompt("Entrez un nombre");
number = parseInt(number);
let somme = 0;
let i = 0; 
while (i < number + i)
{
    somme += number;
    number -= 1;
    i++;
}
document.write(somme);
let number = prompt("saisir un nombre");
number = parseInt(number);
for(let i = 1; i < 101; i++)
{
    document.write(i);
    if (i == number)
        break;
}
let number = prompt("saisir un nombre");
number = parseInt(number);
for(let i = 1; i < 21; i++)
{
    if(i == number)
        continue;
    document.write(i);
}*/

/*
EXERCICE SUR LES FONCTIONS
function bonjour_prenom()
{
    let prenom = prompt("Quel est votre prénom ?");
    document.write("Bonjour" +prenom);
}
bonjour_prenom();
function calcul(longueur, largeur)
{
    return longueur * largeur;
}
let longueur = prompt("Entrez la longueur du rectangle");
longueur = parseFloat(longueur);
let largeur = prompt("Entrez la largeur du rectangle");
largeur = parseFloat(largeur);
document.write("l'aire du rectangle est" +calcul(longueur, largeur));
function carre(nbr)
{
    return nbr**2;
}
let nbr = prompt("Entrez un nombre");
document.write(carre(nbr));
function somme(a, b, c)
{
    return a+b+c;
}
let a = prompt("Saisir le premier nombre");
a = parseInt(a);
let b = prompt("Saisir le deuxième nombre");
b = parseInt(b);
let c = prompt("Saisir le troisième nombre");
c = parseInt(c);
document.write("La somme de trois nombre est" +somme(a,b,c));
function majorite(age)
{
    if(age >= 18)
        document.write("Vous êtes majeur");
    else
        document.write("Vous êtes mineur");
}
let age = prompt("Quel âge avez-vous ?");
majorite(age);
function salutation()
{
    let prenom = prompt("Que est votre prénom");
    function another_function()
    {
        document.write(prenom);
    }
    another_function();
}
salutation();
let bonjour = function helloword()
{
    let mot1 = prompt("Saisissez le premier mot");
    let mot2 = prompt("Saisissez le deuxième mot");
    document.write(mot1 + "" + mot2);
}
bonjour();
*/
/*
EXERCICES SUR LES CHAÎNES DE CARACTERES
Interpolation
let prenom = 'joseph';
document.write(`Bonjour ${prenom}, bienvenue dans l'apprentissage du javascript !`);
METTRE EN MAJUSCULE
let chaine = "  Le javascript est génial  ";
document.write(chaine.toLocaleUpperCase());
COMMENCE PAR ET SE TERMINE PAR
let chaine = "je progresse chaque jour";
document.write(chaine.startsWith("je"));
document.write(chaine.endsWith("jour"));
INDICE ET SOUS-CHAÎNE
let chaine = "Apprendre à coder c'est super !";
document.write(chaine.indexOf("c"));
document.write(chaine.substring(12,31));//lorsqu'on compte une chaine avec plusiers mot on compte aussi les espaces
REMPLACER ET REPETER
let chaine = "javascript";
let new_chaine = chaine.replaceAll("a", "@");
document.write(new_chaine.repeat(2));
VERIFICATION D'UNE SOUS-CHAÎNE DANS UNE CHAÎNE
let chaine = "Il fait beau aujourd'hui";
if(chaine.indexOf("pluie") != -1)
    document.write("OUI");
else
    document.write("NON");
DES CHAINES DE CARACTERE EN TABLEAU
let texte = "Bonjour tout le monde";
let new_texte = texte.split(" ");
document.write(new_texte);
console.log(new_texte);
for(let i = 0; i < new_texte.length; ++i)
{
    console.log(new_texte[i]);
}
*/
/*
FONCTIONNE POUR COMPTER LES VOYELLES DANS UNE CHAINE
function compterVoyelles(chaine) {
    let somme = 0;
    const voyelles = "aeiouy";
    for (let i = 0; i < chaine.length; ++i) {
        if (voyelles.includes(chaine[i].toLowerCase())) {
            somme += 1;
        }
    }
    return somme;
}

const chaine = "salut tout le monde";
document.write("Le nombre de voyelles est de " + compterVoyelles(chaine));
*/
/*
VERSION AFFICHER DANS UNE BALISE P
function compterVoyelles(chaine) {
    let somme = 0;
    const voyelles = "aeiouy";
    for (let i = 0; i < chaine.length; ++i) {
        if (voyelles.includes(chaine[i].toLowerCase())) {
            somme += 1;
        }
    }
    return somme;
}

const chaine = "salut tout le monde";
const resultat = compterVoyelles(chaine);

// Afficher dans la balise avec id="resultat"
document.getElementById("resultat").textContent = "Le nombre de voyelles est de " + resultat;
*/
/* 
EXERCICE DEVINETTE 
let mots = ["ordinateur", "javascript", "programme", "écran", "clavier"];
let mot = mots[Math.floor(Math.random(), mots.length)];
let letter = prompt("Deviner une lettre :");
if (mot.includes(letter))
{
    document.write("Bravo ! La lettre est dans le mot !");
}
else
    {
        document.write("Dommage, la lettre n'est pas dans le mot...");
    }
*/
/*
EXERCICE SUR LES TABLEAUX

AFFICHER LE PREMIER ET LE DERNIER ELEMENT D'UN TABLEAU
let prenoms = Array.of("joseph", "curtis", "reda", "gracien", "jordi");
console.log(prenoms[0]);
console.log(prenoms[prenoms.length - 1]);

MODIFICATION D'UNE VALEUR
let prenoms = Array.of("joseph", "curtis", "reda", "gracien", "jordi");
prenoms[1] = "Inconnu";
console.log(prenoms);

AJOUT ET SUPPRESSION
let prenoms = Array.of("joseph", "curtis", "reda", "gracien", "jordi");
prenoms.push("christian");
prenoms.unshift("arlette");
prenoms.shift();
console.log(prenoms);
*/
/*
RECHERCHE DANS UN TABLEAU
let prenoms = Array.of("joseph", "curtis", "reda", "fatima", "jordi");
console.log(prenoms.includes("fatima"));
console.log(prenoms.indexOf("fatima"));
*/
/*
PARCOURS ET TRANSFORMATION
let nombres = Array.of(1, 2, 3, 4, 5);
let resultat;
let new_nombres = [];
for(let i = 0; i < nombres.length; ++i)
{
    resultat = nombres[i] * 10 ;
    new_nombres.push(resultat);
}
console.log(new_nombres);
*/
/*
TRI ET INVERSION
let nombres = Array.of(12, 4, 19, 33, 2);
let new_nombres = nombres.sort();
console.log(new_nombres);
console.log(new_nombres.reverse());
*/
/*
FIND ET FINDINDEX
let table = ["a", "bb", "ccc", "dddd"];
console.log(table.find(value => value.length > 2));
console.log(table.findIndex(value => value.length > 2));
*/
/* 
FUSION ET NETTOYAGE 
let prenoms_famille = ["joseph", "curtis", "reda", "jordi"];
let prenoms_amis = ["arsène", "joseph", "jordi", "dan"];
let prenoms = prenoms_famille.concat(prenoms_amis);
console.log(prenoms);
prenoms = prenoms.filter(prenoms => prenoms != "joseph");
console.log(prenoms);
*/
/*
MANIPULATION D'UN TABLEAU 2D
let tableau = [[1, 2], [3, 4], [5, 6]];
for(let i = 0; i < tableau.length; i++)
{
    for(let j = 0; j < tableau[i].length; j++)
        {
            console.log(tableau[i][j]);
        }
}
*/
/*
CREATION DYNAMIQUE
let villes = {0: "paris", 1: "berlin", 2: "tokyo"};
let tableau = Array.from(villes.entries(villes), ([clefs, value]) => '${clefs} : ${value}');
console.log(tableau);
 */
/* LES ENSEMBLES(SET) 
let invites = new Set();
invites.add("joseph");
invites.add("gracien");
invites.add("reda");
invites.add("arlette");
invites.add("christian");
invites.add("pathy");
invites.add("joseph");
invites.add("christian");
console.log(invites.size);
console.log(invites);

function afficherInvites(value)
{
    document.write("<p>"+ value + "</p>");
}
invites.forEach(afficherInvites);
invites.delete("reda");
console.log(invites);
invites.clear();
console.log(invites);
if(invites.has("joseph"))
    document.write("l'invité est présent");
else
    document.write("l'invité n'est pas présent"); 
*/
/* 
EXERCICE SUR LE DOM 

AJOUTER ET AFFICHER 
let someMap = new Map();
someMap.set("lundi", "Monday");
someMap.set("mardi", "Tuesday");
someMap.set("mercredi", "Wednesday");
document.write(someMap.size);
document.write(someMap.get("mardi"));
*/
/* 
VERIFIER ET SUPPRIMER 
let someMap = new Map();
someMap.set("lundi", "Monday");
someMap.set("mardi", "Tuesday");
someMap.set("mercredi", "Wednesday");
if(someMap.has("jeudi"))
    document.write("OUI !");
else
    document.write("NON !");
someMap.delete("mardi");
document.write(someMap.size);
*/
/* 
Itération 
let someMap = new Map();
someMap.set("lundi", "Monday");
someMap.set("mardi", "Tuesday");
someMap.set("mercredi", "Wednesday");
function afficherMap(key, value)
{
    document.write(key + " : " + value + "<br>");
}
someMap.forEach(afficherMap);
*/
/* 
CREATION DYNAMIQUE 
let someMap = new Map();4
for(let i = 0; i < 3; i++)
{
    let prenom = prompt("Entrez le prénom de l'invité : ");
    let age = prompt("Entrez l'âge de l'invité :");
    someMap.set(prenom, age);
    document.write(prenom + " : " + age + "<br>");
}
document.write(someMap.size);
*/
/* 
FUSIONNER DEUX MAPS 
let someMap1 = new Map([[1, "Un"], [2, "Deux"]]);
let someMap2 = new Map([[3, "Trois"], [4, "Quatre"]]);
let someMap3 = new Map([...someMap1, ...someMap2]);
console.log(someMap3);
console.log(someMap3.size);
*/
/* 
CONVERTIR UNE MAP EN TABLEAU 
let someMap = new Map([["Banane", "jaune"], ["Orange", "orange"], ["Pomme", "rouge"]]);
let tableau = Array.from(someMap.entries());
console.log(tableau);
*/
/* 
RECHERCHER PAR VALEUR 
function trouverCle(map, valeur)
{
    for(let [cle, val] of map.entries())
    {
        if(val === valeur)
            return cle;
    }
}
let someMap = new Map([["Banane", "jaune"], ["orange", "orange"], ["Pomme", "rouge"]]);
let valeur = "orange";
let cle = trouverCle(someMap, valeur);
if(cle !== undefined)
    document.write("La clé de la valeur " + valeur + " est :" + cle);
else
    document.write("La valeur" + valeur + "n'existe pas dans la map.");
*/
/* EXERCICES */
/* EXERCICES ELEMENTAIRES */
/* 
EXERCICE 1 
let prenom = prompt("Entrez votre prenom");
let age = prompt("Entrez votre âge");
age = parseInt(age);
document.write(`Bonjour, je m'appelle ${prenom} et j'ai ${age} ans`);
*/
/* 
EXERCICE 2 
 let a = prompt("Entrez le premier nombre");
 let b = prompt("Entrez le deuxième nombre");
 let somme = parseInt(a) + parseInt(b);
 let difference = parseInt(a) - parseInt(b);
 let produit = parseInt(a) * parseInt(b);
 let quotient = parseInt(a) / parseInt(b);
 let modulo = parseInt(a) % parseInt(b);
 document.write(`La somme de ${a} et ${b} est ${somme}<br>`);
 document.write(`La différence de ${a} et ${b} est ${difference}<br>`);
 document.write(`Le quotient de ${a} et ${b} est ${produit}<br>`);
 document.write(`Le quotient de ${a} et ${b} est ${quotient}`);
 document.write(`Le modulo de ${a} et ${b} est ${modulo}`);
 */
/* 
EXERCICE 3
function testAge(age)
{
    if(age < 18)
    {
        document.write("Vous êtes mineur");
    }
    else if(age >= 18 && age < 60)
    {
        document.write("Vous êtes majeur");
    }
    else
    {
        document.write("Vous êtes senior");
    }
}
let age = prompt("Entrez votre âge");
age = parseInt(age);
testAge(age);
*/ 
/* 
EXERCICE 4 
for(let i = 1; i <= 20; i++)
{
    console.log(i);
}
let i = 1;
while(i <= 20)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
    i++;
}
*/
/* EXERCICE 5 */
/*
PETITE CALCULETTE
function addition(a, b)
{
    return a + b;
} 
function soustraction(a, b)
{
    return a - b;
}
function multiplication(a, b)
{
    return a * b;
}
function division(a, b)
{
    if(b != 0)
    {
        return a / b;
    }
    else
    {
        return "Division par zéro impossible";
    }
}
let choix = prompt("Quelle opération voulez-vous réaliser :\n1. Addition\n2.Soustraction\n3.Multiplication\n4.Division");
while(true)
{
    if(choix == "1" || choix == "2" || choix == "3" || choix == "4") 
    {
        while(true)
        {
            a = prompt("Entre le premier nombre");
            a = parseInt(a);
            
            if(!isNaN(a))
            {
                console.log("Le premier nombre est : " + a);
                break;
            }
            else
            {
                a = prompt("Vous avez entrer un nombre incorrect. Veuillez recommencer.");
            }
        }

        while(true)
        {
            b = prompt("Entre le deuxième nombre");
            b = parseInt(b);
            if(!isNaN(b))
            {
                console.log("Le deuxième nombre est : " +b);
                break;
            }
            else
            {
                b = prompt("Vous avez entrer un nombre incorrect. Veuillez recommencer.");
            }

        }
        
        if(choix == "1")
        {
            console.log(`La somme de ${a} et ${b} est ${addition(a, b)}`);
        }
        else if(choix == "2")
        {
            console.log(`La différence de ${a} et ${b} est ${soustraction(a, b)}`);
        }
        else if(choix == "3")
        {
            console.log(`Le produit de ${a} et ${b} est ${multiplication(a, b)}`);
        }
        else if(choix == "4")
        {
            console.log(`Le quotient de ${a} et ${b} est ${division(a, b)}`);
        }
        break;
    }

    else
    {
        choix = prompt("Vous avez entrer un mauvais choix.\nVeuiller réessayer les choix ci-après: \n1. Addition\n2.Soustraction\n3.Multiplication\n4.Division");
    }

}
*/
/* EXERCICE 6 
function estPair(n)
{
    if(n % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
n = prompt("Saisir un nombre");
n = parseInt(n);
document.write(estPair(n));
*/
/* 
EXERCICE 7 
function chaine_de_caractère(chaine)
{
    return chaine.length;
}
let chaine ="Bonjour";
document.write(`Le nombre de lettre dans la chaîne ${chaine} est ${chaine_de_caractère(chaine)}`);
*/
/* EXERCICE 8 
let prenoms = ["Joseph", "Reda", "Gracien"];
document.write(prenoms);
//ajouter un prénom
prenoms.push("Jordi");
document.write(prenoms);
//suppression du premier
prenoms.shift();
document.write(prenoms);
//affichage des prénoms
prenoms.forEach(item => console.log(item));
*/
/* EXERCICE 10 */
/*
SECTION 1
let d = new Date(2025, 5, 9, 15, 33, 0);
document.write("<p>" + d + "</p>");
document.write(d.getUTCDate());
*/
/*
SECTION 2
let set = new Set(["Joseph", "Reda", "Gracien", "Joseph", "Gracien"]);
function show(value)
{
    console.log("<p>" + value + "</p>");
}
set.forEach(show);
*/
/*
SECTION 3
let someMap = new Map([("Joseph", 18), ("Curtis", 15), ("Reda", 19)]);
function show(key, value)
{
    console.log(key + "," + value);
}
someMap.forEach(show);
*/

/*
PARCOURS ET MANIPULATION DU DOM 
const element = document.getElementById("liste");
console.log(element);
let enfants = liste.children;
element_trois = enfants[2];
element_trois.innerHTML = "Bonjour !";
*/
/* EVENEMENT + DESIGN */
/*  
SECTION 1
function changeColor()
{
    document.getElementById("button").style.backgroundColor  = "red";
}
*/
/*
SECTION 2
document.getElementById("button").addEventListener("click", changeColor);
function changeColor()
{ 
    document.getElementById("button").style.backgroundColor = "red";

    setTimeout(function(){
        document.getElementById("button").style.backgroundColor = "white";
    }, 2000);
}
*/
/* 
TO-DO LIST
document.getElementById("addTaskBtn").addEventListener("click", ajouterTache);
function ajouterTache()
{
    let texte = document.getElementById("tache").value;
    // verifier si le champ est vide
    if(texte === "")
    {
        alert("Veuillez entrer une tâche !");
        return;
    }
    // créer un élément de liste
    const para = document.createElement("li");
    const texteTache = document.createTextNode(texte);
    para.appendChild(texteTache);

    // créer un bouton pour supprimer la tâche
    const supprimer = document.createElement("button");
    const texteSupprimer = document.createTextNode("Supprimer");
    supprimer.appendChild(texteSupprimer);
    supprimer.style.marginLeft = "10px";// ajouter un espace entre le texte et le bouton
    supprimer.addEventListener("click", function(){
        para.remove();
    });

    para.appendChild(supprimer);

    // lorsque la tâche a été effectuée : la couleur du texte change
    para.addEventListener("click", function() {
        para.classList.toggle("faite");
    });

    // ajouter la tâche à la liste : il dans ul
    const element = document.getElementById("tasklist");
    element.appendChild(para);

    // vider le champ de saisie
    document.getElementById("tache").value = "";
}
*/

/* GENERATEUR DE CITATIONS ALEATOIRES */
let citations = [
  "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte. - Winston Churchill",
  "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. - Albert Einstein",
  "Ils ne savaient pas que c'était impossible, alors ils l'ont fait. - Mark Twain",
  "Fais de ta vie un rêve, et d'un rêve, une réalité. - Antoine de Saint-Exupéry",
  "Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles. - Sénèque",
  "L'esprit est comme un parachute. Il ne fonctionne que lorsqu'il est ouvert. - Frank Zappa",
  "La simplicité est la sophistication suprême. - Léonard de Vinci",
  "Le meilleur moyen de réaliser l'impossible est de croire que c'est possible. - Charles Kingsleigh",
  "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute. - Confucius",
  "Le futur appartient à ceux qui croient à la beauté de leurs rêves. - Eleanor Roosevelt"
];
let couleurs = ["#FF5733", "#33C1FF", "#8D33FF", "#33FF57", "#FFC300", "#F39C12"];

 
document.getElementById("citation").addEventListener("click", generercitation);
function generercitation()
{
    //citation
    let index = Math.floor(Math.random() * citations.length);
    document.getElementById("affichage").innerHTML = citations[index];
    
    //couleur
    let indexCouleur = Math.floor(Math.random() * couleurs.length);
    document.body.style.backgroundColor = couleurs[indexCouleur];

}