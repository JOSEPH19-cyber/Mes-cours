<?php
/* CONNEXION A UNE BASE DE DONNEE */
require'db-config.php';
try{
    $PDO = new PDO($DB_DSN, $DB_USER, $DB_PASS);
    echo 'connexion &eacute;table !';
}
catch(PDOException $pe)
{
    echo 'ERREUR : '.$pe->getMessage();
}