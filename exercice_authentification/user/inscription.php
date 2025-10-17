<?php
if(isset($_POST['envoyer']) && !empty($_POST['envoyer']))
    if(isset($_POST['username']) && !empty($_POST['username']) && isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['password']) && !empty($_POST['password']))
        echo 'Bonjour'.htmlspecialchars($_POST['username']);

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>
<body>
    <form action="" method="post">
        <label for="username">Entrez votre nom d'utilisateur : </label><br>
        <input type="text" id="username" name="username" placeholder="ex: Joseph"><br>
        <label for="email">Entrez votre addresse e-mail : </label><br>
        <input type="email" id="email" name="email" placeholder="ex: Joseph@gmail.com"><br>
        <label for="password">Entrez votre mot de passe</label><br>
        <input type="password" id="password" name="password" placeholder="ex: Joseoh@06"><br>

        <input type="submit" value="Envoyer" name="envoyer">
    </form>
</body>
</html>