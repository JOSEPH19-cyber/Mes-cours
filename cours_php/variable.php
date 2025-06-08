<?php
/*
    4 Types scalaires :
    - Booléen (boolean, bool) : vrai (true) | faux (false)
    - Entier (integer,int) : 14, -126, 12 300
    - Flottant (float, double) : 3.14, -12.62
    - chaîne de caractères (string) : "bonjour", 'bonjour tout le monde'

    4 Types composés :
    -Tableau (array)  
    -Objects (object)
    -Fonctions de rappel(callable)
    -Itérateurs (itérable)

    2 Types divers :
    -Ressource (ressource)
    NULL (ou "null")
*/
/*
DECLARATION ET AFFICHAGE
$monPrenom = "jason";
echo "Bonjour $monPrenom";
*/
/*
BOOLEEN
$unBooleen = true;
*/
/*
ENTIER
$unEntier = -14;
*/
/*
FLOTTANT
$unFlottant = 3.14;
*/
/*
CHAINE
$uneChaine = "C'était hier";
*/
/*
CONCATENATION
$monPrenom = "jason";
echo 'Mon prenom est'.$monPrenom. ' !';
*/
/*
MODIFICATION D'UNE VARIABLE 
$monPrenom = "jason";
echo 'Mon prenom est'.$monPrenom. ' !';
echo '<br>';
$monPrenom = "Henri";
echo 'Mon prenom est'.$monPrenom.' !';
*/
/* 
AFFICHER LES INFORMATIONS D'UNE VARIABLE 
$prenom = "jason";
var_dump($prenom);
*/
/* 
RECUPERER LE TYPE D'UNE VARIABLE 
$prenom = "jason";
echo gettype($prenom);
*/
/* 
PRINCIPE DE LA REFERENCE
$a = "jason";
$b = &$a;

echo $a.'<br>'.$b;

$b = "Toto";
echo '<br>';

echo $a.'<br>'.$b
*/
/* 
TRANSTYPAGE(cast) 
$unFlottant = 16.45;
$unEntier = (int)$unFlottant;
echo $unEntier;
*/
/* 
ANNULER UNE VARIABLE 
$unFlottant = 16.45;
echo $unFlottant;
unset($unFlottant);
var_dump($unFlottant);
?>
*/
//_________________________________________________//
/* LES CONSTANTES */

/* 
DECLARATION ET AFFICHAGE 
define("PSEUDO_ADMIN", "Jason");
echo PSEUDO_ADMIN;
*/
/* 
AUTRE FACON DE DECLARER UNE FONCTION 
$config_pseudo_admin = "Jason";
define("PSEUDO_ADMIN", $config_pseudo_admin);
echo PSEUDO_ADMIN;
*/
/* UTILISER UN MOT CLE POUR DEFINIR UNE CONSTANTE */
const PI = 3.14;
echo PI;

