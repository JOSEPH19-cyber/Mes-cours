/*
let s = "Hello word";
document.write(s);
*/
/*
Différence pour string et object
let s = "Hello word";
let s2 = new String("Hello word");
document.write(typeof s + "<br>");
document.write(typeof s2 + "<br>");
*/
/*les opérations sur les chaînes de caratères*/
/*
concatenation
let s = "Hello word";
document.write(s + " !");
*/
/*
let s1 = "arbre";
let s2 = "bol";
if(s1 < s2)
    document.write("s1 < s2");
else
    document.write("...");
*/
/*
let s1 = "arbre";
let s2 = "arbre";//mais si on met par exemple let s2 = "Arbre" ça sera NON
if(s1 == s2)
    document.write("OUI");
else
    document.write("NON");
*/
/*
let s1 = "arbre";
let s2 = "bol";
if(s1 == s2)
    document.write("OUI");
else
    document.write("NON");
*/
/*
Pour recupérer un caractère par rapport à sa position
let s = "Arbre";//dernier caractère = taille - 1
document.write(s.charAt(0));
*/
/*
Pour recupérer la taille de la chaîne
let s = "Arbre";
document.write(s.length);
*/
/*
let s = "Luc";
document.write("Bonjour" + s + ", comment vas-tu ?");
*/
/*
let s = "Luc";
document.write(`Bonjour ${s}, comment vas-tu ?`);
*/
/*let s = "Bonjour, je suis en train d'apprendre" +
        "à programmer en javascript."
document.write(s);*/
/*Les METHODES*/
/*let s = "Bonjour, je suis en train d'apprendre à programmer en javascript."
document.write(s.concat(".."));//une methode pour concatener les chaînes*/
/*let s = "Bonjour, je suis en train d'apprendre à programmer en javascript."
document.write(s.startsWith("B"));//pour voir si la chaine commence réelement par la lettre b*/
/*let s = "Bonjour, je suis en train d'apprendre à programmer en javascript."
document.write(s.endsWith("."));//pour voir si la châine se termine réelement par un point(.)*/
/*let s = "M";
document.write(s.padEnd(10, "."));//si je veux que ma chaîne ait 10 caractères qui seront complétés par des points(.)*/
/*let s = "M";
document.write(s.padStart(10, "."));// au début de la chaîne*/
/*let s = "   bonjour  ";
document.write(s.trim());//espace entre les deux côtés
//trimstart(): à droite et trimsEnd(): à gauche*/
/*let s = "Bonjour, j'apprends le javascript.";
document.write(s.indexOf(","));//indice de la première fois que l'on a trouvé le caractère*/
/*
let s = "Bonjour, j'apprends le javascript.";
if(s.indexOf(",") != -1)
    document.write("Trouvé");
else
    document.write("pas trouvé");
*/
/*let s = "Bonjour, j'apprends le javascript.";
document.write(s.includes(","));//est-ce que notre chaîne inclut la chaîne point virgule(;)*/
/*let s = "Bonjour";
let s_new = s.repeat(3);//pour répéter la chaîne
document.write(s_new);*/
/*let s = "Bonjour";
document.write(s.replace("o", "a"));//tu remplaces le premier o par a*/
/*let s = "Bonjour";
document.write(s.replaceAll("o", "a"));//tu remplaces toutes les occurences o par a*/
/*let s = "Bonjour";
document.write(s.toLocaleLowerCase());//pour tout mettre en minuscule*/
/*let s = "Bonjour";
document.write(s.toLocaleUpperCase());//pour tout mettre en majuscule*/
/*let s = "Bonjour";
document.write(s.substring(3, 7));//pour récupérer jour dans Bonjour*/
let s = "salut à tous";
let a = s.split(" ");//je separe suivant les espaces
document.write(a);



