<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire HTML</title>
</head>
<body>

    <!--<h1>Saisie d'informations</h1>

    <form method="post" action="result.php">
        <p><label for="iduser">Utiliser :</label> <input type="text" id="iduser" name="user"></p>
        <p><label for="idchoice">Choix :</label> <input type="radio" id="idchoice" name="choice" value="oui">Oui 
        <input type="radio" name="choice" id="idchoice" value="non">Non</p>
        <p><input type="submit" name="valid_form" value="Valider"></p>
    </form>-->

    <!--EXERCICE SUR LE FORMULAIRE-->
    <!--
    <form action="result.php" method="post">
    <label for="prenom">Prénom :</label>
    <input type="text" id="prenom" name="prenom" required>
    <input type="submit" value="Envoyer">
</form>-->
<!--
<form action="result.php" method="post">
    <label><input type="radio" name="genre" value="homme"> Homme</label>
    <label><input type="radio" name="genre" value="femme"> Femme</label>
    <input type="submit" value="Valider">
</form>-->
<!--
<form action="result.php" method="post">
    <label for="langue">Choisissez une langue :</label>
    <select name="langue" id="langue">
        <option value="fr">Français</option>
        <option value="en">Anglais</option>
        <option value="es">Espagnol</option>
    </select>
    <input type="submit" value="Soumettre">
</form>-->
<form action="result.php" method="post">
    <label for="nom">Nom :</label>
    <input type="text" name="nom" id="nom">
    <input type="submit" value="OK">
</form>

   
</body>
</html>