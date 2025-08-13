
<?php

    /*
        chiffrement : A + <clé> => B
        Déchiffrement : B + <clé> => A

        Hash : A -> B
    
    
        Explication sur le hashage
        $pass = 'passe';
        $hash = password_hash($pass, PASSWORD_BCRYPT, ['cost' => 10]);// générer un hash

        echo password_verify($pass, $hash);//vérifier un hash
        exit;
    */
/*
    require 'Database.php';
    require 'util.php';
    init_php_session();

    if(isset($_GET['action']) && !empty($_GET['action'] && $_GET['action'] == "logout"))
    {
        clean_php_session();
        header('Location: authentification.php');
    }

    if(isset($_POST['valid_connection']))
        if(isset($_POST['form_username']) && !empty($_POST['form_username']) && isset($_POST['form_password']) && !empty($_POST['form_password']))
        {
            $username = $_POST['form_username'];
            $password = $_post['form_password'];

            $sql = 'SELECT * FROM site_users WHERE user_name = :name';
            $fields = ['name' => $username];

            $req = Database::getInstance()->request($sql, $fields);

            if($req)
            {
                
                if(password_verify($password, $req->user_password))
                {
                    $_SESSION['username'] = $username;
                    $_SESSION['rank'] = $req->user_admin;
                }
            }
            
            echo 'Identifiant ou mot de passe incorrect';
            

            echo'<pre>';
            print_r($req);
            echo'</pre>';
        }


?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page d'acceuil</title>
</head>
<body>
    <h1>Page d'accueil</h1>

    <p>Bienvenue sur la page d'accueil</p>

    <hr>
    <h2>Se connecter</h2>

    <?php if(is_logged()): ?>
        <p>Bienvenue <?= htmlentities($_SESSION['username']) ?> ! <a href="authentification.php?action=logout">Se déconnecter</a></p>
    <?php else: ?>
        <form action="" method="post">
            <input type="text" name="form_username" placeholder="Identifiant...">
            <input type="password" name="form_password" placeholder="Mot de passe...">
            <input type="submit" name="valid_connection" value="Connexion">
        </form>
    <?php endif; ?>

    <nav>
        <ul>
            <li><a href="authentification.php">Accueil</a></li>
            <li><a href="content.php">Page</a></li>
        </ul>
    </nav>
</body>
</html>
*/