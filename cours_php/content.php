<?php
    require 'util.php';
    init_php_session();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autre page</title>
</head>
<body>
    <h1>Autre page</h1>

    <p>Bonjour, je sais toujours qui vous êtes ! :)</p>

    <?php if(is_admin()): ?>
        <P>Bonjour ADMIN</P>
    <?php endif; ?>

    <nav>
        <ul>
            <li><a href="authentification.php">Accueil</a></li>
            <li><a href="content.php">Page</a></li>
        </ul>
    </nav>
</body>
</html>