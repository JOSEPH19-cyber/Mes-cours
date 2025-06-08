<?php
/*
DECLARATION D'UNE FONCTION
function hello()
{
    echo "Bonjour !";
}
hello();
*/
/* 
FONCTION AVEC PARAMETRE 
function hello($name)
{
    echo 'Bonjour'.$name;
}
hello("jason");
*/
/* 
PORTEE DE VARIABLE
function modify_variable($var)
{
    $var = "hacked";
}
$var = "OK";
modify_variable($var);
echo $var;
 */
/* 
RETOUR D'UNE FONCTION 
function modify_variable($var)
{
    $var = "hacked";
    return $var;
}
$var = "OK";
$var = modify_variable($var);
echo $var;
*/
/* FONCTIONS AVEC PLUSIEURS PARAMETRE 
function ma_fonction($nb1, $nb2)
{
    return $nb1 + $nb2;
}
ma_fonction(2, 3);
*/
/* 
PASSAGE PAR REFERENCE 
function ma_fonction(&$number)
{
    $number = 6;
}
$number = 14;
ma_fonction($number);
echo $number;
*/
/* 
PARAMETRE INFINI 
function ma_fonction(...$lotofvariables)
{
    foreach($lotofvariables as $data)
        echo $data;
}
ma_fonction(1);
ma_fonction(1, 2);
ma_fonction(1, 2, 3, 4, 5);
*/
/* 
TYPAGE DE PARAMETRE 
$number = 14;
function estplusgrandque10(int $nb)
{
    if($nb > 10)
        return true;
    return false;
}
echo estplusgrandque10($number);
*/
/* 
TYPE DE RETOUR 
$number = 14;
function ma_fonction(int $nd) : string
{
    return 10;
}
echo gettype(ma_fonction($number));
*/
/* 
CACHER LE NOM D'UNE FONCTION 
function ma_fonction()
{
    echo "Bonjour !";
}
$coucou = "ma_fonction";
$coucou();
*/
/*  FONCTION ANONYME */
$coucou = function()
{
    echo "Bonjour";
};
$coucou();