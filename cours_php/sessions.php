<?php
/*
    //IDENTIFIANT DE SESSION : PHPSESSID
    session_start();//debut de session
    $_SESSION['username'] = "jachampagne";
    //unset($_SESSION['username']); supprimer une session, on peut aussi utiliser session_unset
    session_destroy();//fin de session */

/*
if(!session_id())
{
    session_start();
    session_regenerate_id(true);//regénérer l'identifiant
}
//on fait des choses avec les session...
session_status()//vérifier qu'une session fonctionne
session_unset();
session_write_close();
session_name();
session_destroy();
header('Location: index.php');//faire une redirection
*/
/*SUPPRIMER COMPLETEMENT UNE SESSION */
session_start();
session_unset();
session_destroy();
session_write_close();
setcookie(session_name(), '', 0, '/', '', false, true);
session_regenerate_id(true);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cours php</title>
</head>
<body>
    <h1>Sessions en php</h1>

    <p>bonjour <?= htmlspecialchars($_SESSION['username']) ?></p>
</body>
</html>