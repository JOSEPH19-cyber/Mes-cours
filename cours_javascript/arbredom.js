/*
LE POINT DE DEPART
document.write(document.documentElement);
*/
/*
    <html> : document.documentElement
    <head> : document.head
    <body> : document.body

    NOEUD : childNodes -> Nodelist(à parcourir avec for...of)
            childNodes
            firstChild
            lastChild
            parentNode
            previousSibling
            nextSibling

    TABLEAUX :
            <table>.rows
            <table>.caption
            <table>.thead
            <table>.tbody

    FORMULAIRES :
                document.forms --> HTMLFormControlCollection
                document.forms --> <name>
                
                <form>.elements.userfields
                <form>.elements.<name>

    document.cookie
    document.images
    document.script
*/

/* 
for(let node of document.body.childNodes)
    console.log(node);
*/
/*
LE PREMIER ENFANT
console.log(document.body.firstChild);
*/
/*
LE DERNIER ENFANT
console.log(document.body.lastChild);
*/
/*
ELEMENT PARENT
console.log(document.head.parentNode);
*/
/*
PARCOURIR UN ID
console.log(coucou.textContent);
*/
/*
CHANGER LA COULEUR DE L'ID CÔTE CLIENT
coucou.style.color = "blue";
*/
/*
ID DU TABLEAU
console.log(stats);
*/
/*
RECUPERER TOUTES LES LIGNES DU TABLEAU
console.log(stats.rows);
*/
/*
PARCOURIR TOUTES LES LIGNES DU TABLEAU
const allRows = stats.rows;
for(row of allRows)
    console.log(row);
*/
/*
console.log(stats.caption);
console.log(stats.thead);
console.log(stats.body);
console.log(stats.rows[0]);
console.log(stats.rows[1].calls[0].textContent);//première ligne colonne 0 contenu de l'element
*/
/*
console.log(document.forms.infoform);
console.log(document.forms);//ensemble du formulaire de la pga
console.log(document.forms[0]);//élément 0 du formulaire
const myform = document.forms.infoform;
console.log(myform.element.user_comments.value);
const myform = document.forms.infoform;
console.log(myform.elements.user_lang.option);
*/ 