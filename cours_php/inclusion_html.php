<?php
$title = "Un nouveau titre";
$number = 10;

/*
    Ecrire ça :
    <?= $title ?>
    Revient à écrire ça
    <?php echo $title; ?>
*/
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
</head>
<body>
    <!-- Une condition -->
    <?php if($number == 10): ?>
        <p>OK</p>
    <?php else: ?>
        <p>PAS OK</p>
    <?php endif; ?>

    <!-- Une boucle -->
    <?php for(; $number < 20; $number++): ?>
        <p>J'affiche une ligne</p>
    <?php endfor; ?>
        
</body>
</html>
