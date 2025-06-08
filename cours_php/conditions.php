<?php
/*
    opérateurs de comparaison :
    ==, ===, !=,!==(différece de valeur ou différence de type)
    <, >, <=, >=, <=>(supérieur à, égal à ou inférieur à)
*/
/*
$number = 14;
if($number == 14)
{
    echo "Number vaut 14";
}
*/
/*
$number = "14";
if($number !== 14)
{
    echo "OK";
}
*/
/*
$nb1 = 14;
$nb2 = 8;
if($nb1 == 14 && $nb2 == 8)
{
    echo "OK";
}
*/
/*
$var1 = 5;
$var2 = 8;
$result = $var1 <=> $var2;
if($result)
echo "ok";
*/
/*
CONDITION IMBRIQUEE
$number = 11;
if($number > 0)
{
    if($number > 5)
    {
        if($number > 10)
        {
            echo "plus grand que 10";
        }
        echo "plus grand que 5";
    }
    echo "plus grand que 0";
}
echo "suite du programme";
*/
/*
$number = 1;
if($number > 0)
    echo ">0";
elseif($number < 0)
    echo "<O";
else
    echo "=0";
*/
/*
LA METHODE SWITCH...CASE
$number = 1;
switch($number)
{
    case 1:
        echo "1";
        break;
    case 2:
        echo "2";
        break;
    case 3:
        echo"3";
        break;
    default:
        break;

}
*/
/*
$jeu_lance = true;
$message = "";
if($jeu_lance)
        $message = "Le jeu est en route...";
else
        $message = "Le jeu est eteint.";
echo $message;
*/
/*
LE TERNAIRE
$jeu_lance = true;
$message = "";
$message = ($jeu_lance) ? "Jeu en route" : "Jeu eteint";
echo $message;
 */
/*
VERIFICATION DE L'EXISTENCE D'UNE VARIABLE
$mavariable = "ok";
if(isset($mavariable))
        echo "Elle existe";
else
        echo "Elle n'existe pas";
unset($mavariable);
if(isset($mavariable))
        echo "Elle existe";
else
        echo "Elle n'existe";
*/
/*
AUTRE METHODE DE VERIFICATION 
$mavariable = "ok";
if(!isset($mavariable))
        echo "Elle n'existe pas";
$res = $mavariable ?? "Elle n'existe pas";
echo $res;
*/
/*
VERIFIER QU'UNE VARIABLE EST UN ENTIER 
$number = 14;
if(is_int($number))
        echo "C'est un entier";
*/
/*
    fonctions usuelles :
    is_bool()
    is_int()
    is_float()
    is_string()
*/


