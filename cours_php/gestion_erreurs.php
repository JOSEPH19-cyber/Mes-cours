<?php
/*
SIGNALER TOUTES LES ERREURS 
error_reporting(-1);
echo $number;
*/
/*
NE PAS AFFICHER LES ERREURS 
error_reporting(0);
echo $number;
*/
/*
SIGNALER TOUTES LES ERREURS AVEC ini_set()
error_reporting(-1);
ini_set("display_errors", 1);
$tab = [1, 2];
echo $tab[10]; 
*/
/*  
CREER NOTRE PROPRE FONCTION POUR GERER UNE ERREUR
$my_error_handler = function(int $errno, string $errmsg, string $errfile, int $errline)
{
    switch($errno)
    {
        case E_USER_ERROR:
            echo $errmsg;
            break;
        case E_USER_WARNING:
            echo $errmsg.'sur le fichier'.$errfile;
            break;
        case E_USER_NOTICE:
            echo $errmsg;
            break;
        default:
            echo 'ERREUR : '.$errmsg;
            break;
    }
};
set_error_handler($my_error_handler);
echo $number;
*/
/* 
GENERER UNE ERREUR PRECISE 
$my_error_handler = function(int $errno, string $errmsg, string $errfile, int $errline)
{
    switch($errno)
    {
        case E_USER_ERROR:
            echo $errmsg;
            break;
        case E_USER_WARNING:
            echo $errmsg.'sur le fichier'.$errfile;
            exit(1);
            break;
        case E_USER_NOTICE:
            echo $errmsg; 
            break;
        default:
            echo 'ERREUR : '.$errmsg;
            break;
    }
};
set_error_handler($my_error_handler);
$age_personne = 16;
if($age_personne < 18)
{
    trigger_error("Tu n'es pas majeur !", E_USER_WARNING);
}
*/
/*
SIGNALER UNE ERREUR AVE error_log par mail
error_reporting(-1);
ini_set("display_errors", 1);
error_log("y'a eu un problème", 1, "admin@tiflou.fr");
*/
