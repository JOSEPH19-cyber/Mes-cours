<p><a href="formulaire.php">&laquo; Retour au formulaire</a></p>
<pre>
<?php
/*
 Variables superglobales : $_GET
                           $_POST

URL en GET -> http://localhost/result.php?var1=154&var2=bonjour&var3=ok
  
*/
/*
SECURITE
FONCTION QUI REMPLACE UN CARACTERE SPECIALE PAR UNE ENTITE HTML 
echo htmlspecialchars($_GET['prenom']);
*/
/*
    isset() : vérifie qu'une variable existe et est non nulle
    empty() : vérifie qu'une variable est vide
    is_null() : vérifie qu'une variable est nulle (la variable doit exister)

if(is_null($prenom))
    echo "OUI";
else
    echo "NON";
*/
/*
isset () + empty () =
TRUE -> chaine vide
        FALSE
        []
        "0"
        0
        0.0
    
isset() : FALSE -> NULL
                   var $maVariable;
empty() : FALSE -> " "
                   TRUE
                   /0

if(empty($prenom))
    echo "VIDE";
else
    echo "NON VIDE";
*/
/* CAS PRATIQUE 
if(isset($_POST['user']) && !empty($_POST['user']))
    echo htmlspecialchars($_POST['user']);
if(isset($_POST['choice']) && !empty($_POST['choice']))
    echo htmlspecialchars($_POST['choice']);
*/
/* EXERCICE FORMULAIRE */
/*récupérer et afficher un prénom envoyé via un formulaire 
if(isset($_POST['prenom']) && !empty($_POST['prenom']))
    echo htmlspecialchars($_POST['prenom']);
*/
/* CHOISIR UN GENRE ET AFFICHER UN MESSAGE PERSONNALISE 
if(isset($_POST['genre']) && !empty($_POST['genre']))
    if($_POST['genre'] == 'homme')
        echo "Bonjour Monsieur";
    elseif($_POST['genre'] == 'femme')
        echo "Bonjour Madame";
*/
/* LISTE DEROULANTE 
 if(isset($_POST['langue']) && !empty($_POST['langue']))
    switch($_POST['langue'])
        {
            case('fr'):
                echo "Bonjour";
                break;
            case('en'):
                echo "Hello";
                break;
            case('es'):
                echo "Hola";
                break;
            default:
                echo "Cette ne figure pas dans la liste";
                break;
        }
*/
/* CHAMP VIDE 
if(isset($_POST['nom']) && !empty($_POST['nom']))
            echo "Votre nom est : ".htmlspecialchars($_POST['nom']);
else
    echo "Le champ est vide.";
*/
?>