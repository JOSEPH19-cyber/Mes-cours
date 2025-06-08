<?php
/*
SYNTHAXE HISTORIQUE
$tab_integers = array();
*/
/*
AFFICHER LES DONNEES
$tab_integers = [10, 11, 12, 13, 14, 15];
echo '<pre>';
print_r($tab_integers);
echo '<pre>';
*/
/*
TABLEAU AVEC CLEF ET VALEUR
$tab_population_villes =
[
    "paris" => 14000,
    "orléans" => 8,
    "clermont-ferrand" => 146
];
echo '<pre>';
print_r($tab_population_villes);
echo '<pre>';
*/
/*
AFFICHAGE DE LA VALEUR D'UN ELEMENT DU TABLEAU
$tab_population_villes =
[
    "paris" => 14000,
    "orléans" => 8,
    "clermont-ferrand" => 146
];
echo $tab_population_villes["orléans"];
*/
/*
MODIFIER LA VALEUR D'UN ELEMENT DU TABLEAU
$tab_population_villes =
[
    "paris" => 14000,
    "orléans" => 8,
    "clermont-ferrand" => 146
];
$tab_population_villes["clermont-ferrand"] = 17800;
echo $tab_population_villes["clermont-ferrand"]
*/
/*
PARCOURIR UN TABLEAU AVEC FOREACH 
$tab_population_villes =
[
    "paris" => 14000,
    "orléans" => 8,
    "clermont-ferrand" => 146
];
foreach($tab_population_villes as $data)
    echo '<p>'.$data.'</p>';
*/
/*
AFFICHER CLEF ET VALEUR
$tab_population_villes =
[
    "paris" => 14000,
    "orléans" => 8,
    "clermont-ferrand" => 146
];
foreach($tab_population_villes as $key => $value)
    echo '<p>'.$key.' / '.$value.'</p>';
*/
/*
    FONCTIONS USUELLES POUR LES TABLEAUX :
        - array_push()
        - array_pop() ou array_shift()
        - in_array()
?>
*/
