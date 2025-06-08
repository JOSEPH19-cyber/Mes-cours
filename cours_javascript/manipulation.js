/*
console.log(coucou);
*/
/*
    document.getElementById('<id>')
const element = document.getElementById('coucou');
console.log(element);
*/
/*
document.getElementsByName('<name>')
const element = document.getElementsByName('user_comments');
console.log(element);
*/
/* document.getElementsByTagName('<tagname>')
const element = document.getElementsByTagName('p');
console.dir(element);
*/
/* document.getElementsByClassName('<blue>');
const element = document.getElementsByClassName('blue');
console.log(element[0]);
*/
/*
LA METHODE QUI RECUPERE LE PREMIER ELEMENT QUE L'ON RENCONTRE
document.querySelector('<selector>')
const element = document.querySelector('input[type=submit]');
console.log(element);
*/
/*
LA METHODE QUI RECUPERE TOUS LES ELEMENTS
document.querySelectorAll('<selector>')
const element = document.querySelectorAll('article h2');
for(e of element)
    console.log(e.textContent);
const element = document.querySelectorAll('article h2');
console.log(element.length);
*/
/*
const element = document.getElementsByClassName('blue')[0];
console.log(element.className);
console.log(element);
*/
/*
innerHTML
outerHTML
innerText
outerText
const element = document.getElementsByClassName('blue')[0];
element.innerHTML = "<ul><li>ok</li></ul>";
*/
/*
CHANGER L'ATTRIBUT TITLE
const element = document.getElementsByClassName('blue')[0];
element.title = "SUPER CHOUETTE !";
*/
/* RECUPERER UN ATTRIBUT 
const element = document.getElementsByClassName('blue')[0];
console.log(element.getAttribute("title"));
*/
/* 
SAVOIR SI Y A UN ATTRIBUT
<element>.hasAttribute("<name>")
*/
/* ENLEVER UN ATTRIBUT CÔTE CLIENT 
const element = document.getElementsByClassName('blue')[0];
console.log(element.removeAttribute("title"));
 */
/*
CHANGER LA VALEUR D'UN ATTRIBUT
const element = document.getElementsByClassName('blue')[0];
console.log(element.setAttribute("title", "SUPER CHOUETTE"));
*/
/*
REGARDER LA VALEUR D'UN ATTRIBUT QU'ON A CREE
const element = document.getElementsByClassName('blue')[0];
console.log(element.dataset.formation);
*/
/*
MODIFIER LA VALEUR D'UN ATTRIBUT CREE
const element = document.getElementsByClassName('blue')[0];
console.log(element.dataset.formation = "js");
*/
/* 
AJOUTER(CREER) UN ELEMENT
const someParagraph = document.createElement('p');
someParagraph.innerHTML = "Bonjour sur FormationVidéo !";
someParagraph.className= "red";
document.body.append(someParagraph);//pour mettre à la fin(append)
 */
/*AJOUTER(CREER) UN ELEMENT
const someParagraph = document.createElement('p');
someParagraph.innerHTML = "Bonjour sur FormationVidéo !";
someParagraph.className= "red";
document.getElementById("coucou").prepend(someParagraph);//prepend pour ajouter au debut
*/
/*
POUR AJOUTER AVANT APRES UN NOEUD...
.before() / .after()
.replacewith()//remplacer
const someParagraph = document.createElement('p');
someParagraph.innerHTML = "Bonjour sur FormationVidéo !";
someParagraph.className= "red";
document.getElementById("coucou").replaceWith(someParagraph);

const someParagraph = document.createElement('p');
someParagraph.innerHTML = "Bonjour sur FormationVidéo !";
someParagraph.className= "red";
document.getElementById("coucou").prepend(someParagraph);
someParagraph.className = "green";
document.getElementById("coucou").append(someParagraph);
*/
/* 
SUPPRIMER UN PARAGRAPHE 
document.getElementById("coucou").remove();
*/
/* 
TRAVAILLER AVEC HTML 
beforebegin
afterend

afterbegin
beforeend
document.getElementById("coucou").insertAdjacentHTML("afterbegin", "hello world");
*/
