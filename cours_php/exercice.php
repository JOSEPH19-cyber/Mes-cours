<?php 
/*
BONJOUR UTILISATEUR
$prenom = "Joseph";
echo "Bonjour, je m'appelle $prenom";
*/
/*
CALCUL SIMPLE
$a = 10;
$b = 5;
$somme = $a + $b;
$produit = $a * $b;
$difference = $a - $b;
$quotien = $a / $b;
$modulo = $a % $b;
echo "La somme de $a et $b vaut $somme<br>";
echo "Le produit de $a et $b vaut $produit<br>";
echo "La différence de $a et $b vaut $difference<br>";
echo "Le quotien de $a et $b vaut $quotien<br>";
echo "Le modulo de $a et $b vaut $modulo";
?>
*/
/*
CALCUL DE SURFACE
$longueur = 5.2;
$largeur = 3.4;
$surface = $longueur * $largeur;
echo "La surface du rectangle vaut $surface";
*/
/*
AFFECTATION SUCCESSIVES
$x = 10;
$x += 5;
$x *=2;
$x -= 4;
$x /= 2;
echo $x;
*/
/*
CONCATENATION
$prenom = "Joseph";
$nom = "MBIKI";
echo "Bonjour, je suis $prenom $nom";
*/
/*
TYPES ET TRANSTYPAGE
$nombre = 12.75;
var_dump($nombre);
$entier = (int)$nombre;
var_dump($entier);
*/
/*
PUISSANCE ET RESTE
$base = 3;
$expo = 4;
$puissance = $base ** $expo;
echo "La puissance vaut $puissance<br>";
$modulo = $puissance % 5;
echo "Le reste de la division vaut $modulo";
*/
/*
REFERENCE DE VARIABLE
$a = 10;
$b = &$a;
echo $a.'<br>'.$b;
$b = 5;
echo '<br>';
echo $a.'<br>'.$b;
*/
/*
CONSTANTES
define("nom_site", "nstore");
echo "Bienvenue sur le site".nom_site;
*/

/* LES CONDITIONS */

/* 
COMPARAISON SIMPLE 
$age = 23;
if($age >= 18)
{
    echo "Vous êtes majeur";
}
else
{
    echo "Vous êtes mineur";
}
*/
/* 
COMPARAISON STRICTE
$score = "100";
if($score === 100)
{
    echo "Score exact en entier";
}
else
{
    echo "Ce n'est pas un score entier";
}
*/
/*
 CONDITIONS MULTIPLES 
$email_confirmed = true;
$password_correct = true;
if($email_confirmed && $password_correct)
{
    echo "Connexion réussie";
}
else
{
    echo "Echec de connexion";
}
*/
/*
CONDITION IMBRIQUEE
$note = 17;
if($note >= 10)
{
    if($note > 15)
    {
        echo "Très bien<br>";
    }
    echo "Admis";
}
else
{
    echo "Echec";
}
*/
/*
OPERATEUR TERNAIRE
$connecte = false;
$message = "";
$message = ($connecte) ? "Utilisateur connecté" : "Utilisateur déconnecté";
echo $message;
*/
/* 
STRUCTURE SWITCH
$jours = readline("Entrez un jour de la semaine(1 à 7)");
switch($jours)
{
    case "1":
        echo "LUNDI";
        break;
    case "2":
        echo "MARDI";
        break;
    case "3":
        echo "MERCREDI";
        break;
    case "4":
        echo "JEUDI";
        break;
    case "5":
        echo "VENDREDI";
        break;
    case "6":
        echo "SAMEDI";
        break;
    case "7":
        echo "DIMANCHE";
        break;
    default:
    echo "Jour inconnu";
    break;
}
*/
/*
VERIFICATION DE TYPE ET EXISTENCE
$valeur = 42.5;
if(is_int($valeur))
{
    echo "C'est un entier";
}
elseif(is_float($valeur))
{
    echo "C'est un flottant";
}
elseif(is_string($valeur))
{
    echo "C'est une chaîne de caractère";
}
*/

/* LES BOUCLES */

/* 
COMPTEUR SIMPLE 
for($i = 1; $i < 11; $i++)
{
    echo $i;
}
*/
/* 
BOUCLE INVERSE 
for($i = 10; $i > 0; $i--)
{
    echo $i;
}
*/
/* 
PAIRS UNIQUEMENT 
for($i = 1; $i < 20; $i++)
{
    if($i % 2 == 0)
    {
        if($i % 2 != 0)
            continue;
        echo $i;
    }
    
}
*/
/*
TABLE DE MULTIPLICATION
$number = 1;
while($number < 11)
{
    $produit = 7 * $number;
    echo "7 x $number = $produit<br>";
    $number++;
}
*/
/*
BOUCLE DO...WHILE
$number = 10;
do
{
     while($number < 15)
     {
        echo $number;
        $number++;
     }
}
while($number < 14);
*/
/*
SOMME DES NOMBRES
$somme = 0;
for($i = 1; $i <= 100; $i++)
{
    $somme += $i;
}
echo $somme;
*/
/*
BREAK
for($i = 1; $i <= 20; $i++)
{
    if($i == 13)
        continue;
    echo $i;
}
*/
/* EXERCICE SUR LES FONCTIONS */
/*
FONCTION DE BIENVENUE SIMPLE 
function bonjour()
{
    echo "Bienvenue sur mon site";
}
bonjour();
*/
/*
SALUTATION PERSONNALISEE
function saluer($prenom)
{
    echo "Bonjour $prenom";
}
$prenom = "Joseph";
saluer($prenom);
*/
/*
function addition(int $a, int $b)
{
    return $a + $b;
}
$a = 5;
$b = 6;
echo 'la somme de'.$a.'+'.$b.'est'.addition($a, $b);
*/
/*
function multiplication(int $a, int $b)
{
    return $a * $b;
}
$a = 3;
$b = 4;
echo 'Le produit de'.$a.'X'.$b.'est'.multiplication($a, $b);
*/
/* PASSAGE PAR REFERENCE 
function inverserSigne(&$nombre)
{
    echo $nombre;
}
$nombre = 5;
inverserSigne($nombre);
$number = &$nombre;
$number = -5;
echo '<br>';
inverserSigne($number);
*/
/* PORTEE DES VARIABLES
function changeValeur($x)
{
    $x = "Bonjour";
    echo $x;
}
$x = "modifié";
changeValeur($x);
echo $x;
 */
/* PARAMETRES MULTIPLES 
function calculMoyenne($note1, $note2, $note3)
{
    return ($note1 + $note2 +$note3) / 3;
}
$note1 = 10;
$note2 = 14;
$note3 = 17;

echo "La Moyenne est de".calculMoyenne($note1, $note2, $note3);
*/
/* NOMBRE INFINI DE PARAMETRES 
function sommeTotal(...$nombres)
{
   foreach($nombres as $data)
        return min($nombres);
}
echo sommeTotal(10, 5, 3);
*/
/* TYPAGE ET RETOUR 
function estPair(int $n) : bool
{
    if($n % 2 == 0)
        return true;
    else
        return false;
}
$n = 6;
echo estPair($n);
*/
/* FONCTIONS ANONYMES 
$carre = function($n)
{
    return $n * $n;
};
echo $carre(5);
*/

/* EXERCICES TABLEAUX */

/* CREER UN TABLEAU SIMPLE 
$prenoms = ["Joseph", "Reda", "Gracien", "Jordi", "Curtis"];
foreach($prenoms as $data)
        echo $data.'<br>';
*/
/* ACCES A UNE VALEUR 
$pays = [
    "France" => "Paris",
    "Belgique" => "Bruxelles",
    "Allemagne" => "Berlin"
];
echo $pays["Belgique"];
*/
/* MODIFIER UNE VALEUR
$stock = [
    "pommes" => 30,
    "bananes" => 20,
    "oranges" => 15
];
foreach($stock as $data)
    echo $data.'<br>';
$stock["bananes"] = 30;
echo 'après changement de la valeur bananes<br>';
foreach($stock as $data)
    echo $data.'<br>';
 */
/* AFFICHER TOUTES LES PAIRES clé/valeur 
$livres = [
    "1984" => "George Orwell",
    "L'Etranger" => "Albert Camis",
    "Le Petit Prince" => "Antoine de saint-Exupéry"
];
foreach($livres as $key => $value)
    echo '<p>'.$key.'/'.$value;
*/
/* AFFICHER UNIQUEMENT CERTAINES VALEURS 
$notes = [
    "maths" => 14,
    "anglais" => 9,
    "histoire" => 12
];
foreach($notes as $key => $value)
    if($value > 10)
        echo $key.'<br>';
*/
/* AJOUTER DES ELEMENTS 
$nombres = [];
array_push($nombres, 10);
array_push($nombres, 20);
array_push($nombres, 30);
foreach($nombres as $data)
        echo $data.'<br>';
*/
/* RETIRER DES ELEMENTS 
$fruits = ["pomme", "banane", "poire", "cerise"];
array_pop($fruits);
foreach($fruits as $data)
        echo $data.'<br>';
*/
/* VERIFIER LA PRESENCE D'UN ELEMENT 
$prenoms = ["Marie", "Luc", "Fatou", "David"];
if(in_array("Luc", $prenoms))
{
    echo "Le prenom Luc existe.";
}
else
{
    echo "Le prenom Luc n'existe pas";
}
*/
/* CATALOGUE DE PRODUITS 
$produits = [
    "chaussures" => 49.99,
    "t-shirt" => 15.50,
    "jean" => 29.90
];
//affiche chaque produit avec son prix
foreach($produits as $key => $value)
    echo '<p>'.$key.'/'.$value.'</p>';
//modifie le prix du t-shirt
$produits["t-shirt"] = 32.49;
//ajouter un nouveau produit 
$produits["casquette"] = 12.00;
//reafficher chaque produit avec son prix 
foreach($produits as $key => $valeur)
    echo '<p>'.$key.'/'.$valeur.'</p>';
//vérifier si "sac à dos" est dans la tableau 
if(in_array("sac à dos", $produits))
{
    echo "sac à dos existe bel et bien.";
}
else{
    echo "sac à dos n'xiste pas.";
}
*/
/* CALCUL DE MOYENNE 
$notes = [
    "math" => 14,
    "physique" => 13,
    "chimie" => 17
];
foreach($notes as $key => $value)
    $somme = array_sum($notes);
    $cours = count($notes);
$moyenne = $somme / $cours;
echo "La moyenne est".$moyenne;
*/

/* 
PHP EXERCICE #1 
header('content-type: text/plain');
$programming_language = 'php';
$php_version = phpversion();
$course = 32;


I ere méthode
echo "Ceci est mon premier exercice en $programming_language.\nLe cours de la chaîne FormationVidéo compte $course vidéos publiées.
\nAu travers des vidéeos suivies, j'ai pu installer $programming_language dans sa version $php_version";

2 eme methode
echo "Ceci est mon premier exercice en $programming_language.\n";
echo "Le cours de la chaîne FormationVidéo compte $course vidéos publiées.\n";
echo "Au travers des vidéos suivies, j'ai pu installer $programming_language dans sa version $php_version";
*/

/* 
PHP EXERCICE #2 
$pokemon = "pikachu";
$pokelevel = 5;

$pokelevel += 1;
echo "$pokemon vient de monter au nivau $pokelevel.<br>";

echo "A few moments later...<br>";

$pokelevel += 1;
echo "whoah dingue ! $pokemon passe au niveau $pokelevel ! <br><br>";

$pokeballCapture = 50;
$bonusRate = $pokeballCapture * 0.06;
$totalCaptureRate = $pokeballCapture + $bonusRate;

echo "Le taux de capture est de $totalCaptureRate %.<br><br>";
*/
/* 
PHP EXERCICE 3              
$min = 1;
$max = 50;

if($max <= $min) 
        die('Paramètres incorrects : Max doit être strictement supérieur à MIN.');

for($min; $min <= $max; $min++)
{
    if($min % 5 == 0)
    {
        if($min % (5*2) == 0)
            echo "TAC<br>";
        else
            echo "TIC<br>";
    }
    else
        echo "$min<br>";
}
?>
*/

/* EXERCICE PHP 4 */
/* UNE FONCTION QUI RENVOIE UN PARAGRAPHE 
function renvoie_paragraphe(string $paragraphe)
{
    return $paragraphe;
}
$paragraphe = "<p>Mon paragraphe...</p>";
echo renvoie_paragraphe($paragraphe);
*/

/* UNE FONCTION QUI RENVOIE UNE ENTÊTE 
function renvoie_entete(string $entete)
{
    return $entete;
}
$entete = '<pre>
<head>
    <meta charset="utf-8">
    <title>Mon titre de page</title>
</head>
</pre>';
echo renvoie_entete($entete);
*/
/* UNE FONCTION QUI RENVOIE UN LIEN 
function renvoie_lien( string $lien)
{
  return $lien;
}
$lien = '<a href="https://jasonchampagne.fr" title="Texte de linfobulle">Mon Lien</a>';
echo renvoie_lien($lien);
*/

/* EXERCICE PHP # 5 
//un tableau d'entier de 1 à 20
function FV_array_get(int $max) : array
{
    if($max > 100)
        die("Maximum 100 éléments pour le tableau");

    $arr = [];
    for($i = 1; $i <= $max ; ++$i)
        array_push($arr, $i);

    return $arr;
}
function FV_array_print(array $arr): vold
{
    foreach($arr as $n)
        echo $n.' ';
    echo '<br>';
}
function FV_array_keep_nvalues(array $arr, int $length): array
{
    if($length < 0)
        die("Longueur incorrecte.");
    return array_slice($arr, 0, $length);
}
function FV_array_reverse(array $arr): array
{
    $a = [];
    for($i = count($arr) - 1; $i >= 0; --$i)
        array_push($reverse_arr, $arr[$i]);

    return $reverse_arr;
}
$numbers = FV_array_get(20);
FV_array_print($numbers);
$numbers = FV_array_keep_nvalues($numbers, 5);
$numbers = FV_array_reverse($numbers);

FV_array_print($number);
*/
