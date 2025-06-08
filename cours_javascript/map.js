/*
TAILLE DE LA MAP
let someMap = new Map();
document.write(someMap.size);
*/
/*
AJOUT DANS UNE MAP
let someMap = new Map();
document.write(someMap.size);
someMap.set(1, "Un");
someMap.set(2, "Deux")
document.write(someMap.size);
*/
/* SUPPRESSION DANS UNE MAP 
let someMap = new Map();
document.write(someMap.size);
someMap.set(1, "Un");
someMap.set(2, "Deux")
someMap.delete(2);
document.write(someMap.size);
*/
/*
VIDER COMPLETEMENT UNE MAP
let someMap = new Map();
document.write(someMap.size);
someMap.set(1, "Un");
someMap.set(2, "Deux")
someMap.delete(2);
someMap.clear();
document.write(someMap.size);
*/
/*
VERIFICATION D'UN ELEMENT DANS UNE MAP
let someMap = new Map();
someMap.set(1, "Un");
someMap.set(2, "Deux");
if(someMap.has(1))
    document.write("OUI !");
*/
/*
RECUPERER UNE VALEUR A PARTIR D'UNE CLEF
let someMap = new Map();
someMap.set(1, "Un");
someMap.set(2, "Deux");
document.write(someMap.get(1));
*/
/*
RECUPERER les clefs
let someMap = new Map();
someMap.set(1, "Un");
someMap.set(2, "Deux");
const it = someMap.keys();
document.write(it.next().value);
document.write(it.next().value);
*/
/*
RECUPERER  les valeurs
let someMap = new Map();
someMap.set(1, "Un");
someMap.set(2, "Deux");
const it = someMap.values();
document.write(it.next().value);
document.write(it.next().value);
*/
/* 
RECUPERER LES VALEURS ET LES CLEFS 
let someMap = new Map();
someMap.set(1, "Un");
someMap.set(2, "Deux");
const allEntries = someMap.entries();
for(entries of allEntries)
    document.write(entries[0] + entries[1] );
*/
/*
LA METHODE forEach
let someMap = new Map();
someMap.set(1, "Un");
someMap.set(2, "Deux");
function showMeTheTruth(value, key)
{
    document.write(key + "," + value);
}
someMap.forEach(showMeTheTruth);
*/