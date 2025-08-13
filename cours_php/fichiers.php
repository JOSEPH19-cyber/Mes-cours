<?php
/* 
OUVRIR UN FICHIER ET LIRE PAR CARACTERE 
$myFile = fopen("infos.txt", "r");
if(!$myFile)
    exit("Ouverture du fichier impossible");
while(!feof($myFile))
    echo fgetc($myFile);
if(!fclose($myFile))
    exit("Fermeture du fichier echoueé");
*/
/* 
LIRE PAR LIGNE 
$myFile = fopen("infos.txt", "r");
if(!$myFile)
    exit("Ouverture du fichier impossible");
while(!feof($myFile))
    echo fgets($myFile).'<br>';
if(!fclose($myFile))
    exit("Fermeture du fichier echoueé");
*/ 
/* 
CHOISIR LA TAILLE DE LECTURE 
$myFile = fopen("infos.txt", "rb");
if(!$myFile)
    exit("Ouverture du fichier impossible");
while(!feof($myFile))
    echo fread($myFile, 10);
if(!fclose($myFile))
    exit("Fermeture du fichier echoueé");
?>
*/
/* 
LIRE TOUT LE FICHIER 
$infos = file("infos.txt");
if($infos)
{
    echo '<pre>';
    print_r($infos);
    echo '</pre>';
}
else
    echo "ERREUR";
*/
/* 
FILE_GET_CONTENTS : Lire le fichier sous forme de chaîne de caractère
$infos = file_get_contents("infos.txt");
if($infos)
    var_dump($infos);
else
    echo "ERREUR";
*/
/*
MODE ECRITURE
$myFile = fopen("infos.txt", "wb");
if(!$myFile)
    exit("Ouverture du fichier impossible");
fwrite($myFile, "une nouvelle information");
if(!fclose($myFile))
    exit("Fermeture du fichier echoueé");
*/