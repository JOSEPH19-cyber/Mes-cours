/*
let someset = new Set([1, "bonjour", new Date()]);
for(element of someset)
{
    document.write("<p>" + element + "<p>");
}
*/
/*
LE NOMBRE DES ELEMENTS DE L'ENSEMBLE
let someset = new Set([1, 2, 3]);
document.write(someset.size);
*/
/*
AJOUTER UN ELEMENT DANS L'ENSEMBLE
let someset = new Set([1, 2, 3]);
someset.add(4);
for(element of someset)
    {
        document.write("<p>" + element + "<p>");
    }
*/
/*
SUPPRIMER UN ELEMENT DANS L'ENSEMBLE
let someset = new Set([1, 2, 3]);
someset.delete(1);
for(element of someset)
    {
        document.write("<p>" + element + "<p>");
    }
*/
/*
SUPPRIMER TOUS LES ELEMENTS DE L'ENSEMBLE
let someset = new Set([1, 2, 3]);
someset.clear();
for(element of someset)
    {
        document.write("<p>" + element + "<p>");
    }
*/
/*
VERIFIER SI UN ELEMENT SE TROUVE DANS L'ENSEMBLE
let someset = new Set([1, 2, 3]);
if(someset.has(2))
    document.write("On est content !");
*/

/*
 POUR TRAVAILLER AVEC UN ITERATEUR 
let someset = new Set([1, 2, 3]);
const iterValues = someset.values();
document.write(iterValues.next().value);
document.write(iterValues.next().value);
*/
/*
let someset = new Set([1, 2, 3]);
const allEntries = someset.entries();
for(const element of allEntries)
    document.write("<p>" + element + "</p>");
*/
let someset = new Set(["bonjour", "hello", "hi"]);
function show(value)
{
    document.write("<p>" + value + "</p>");
}
someset.forEach(show);