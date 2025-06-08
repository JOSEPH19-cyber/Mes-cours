<?php
/* 
LA BOUCLE WHILE 
$number = 0;
while($number < 10)
{
    echo '<p>'.$number.'</p>';
    $number++;
}
*/
/* 
LA BOUCLE DO...WHILE 
$number = 10;
do{
    echo '<p>'.$number.'</p>';
    $number++;
}
while($number < 10);
*/
/* 
LA BOUCLE FOR 
for($i = 0; $i < 10; $i++)
{
    echo "Je suis une phrase...<br>";
}
*/
/*
INTERRUPTION D'UNE BOUCLE
for($i = 0; $i < 10; $i++)
    for($j = 0; $j < 10; $j++)
        break 2;
*/
$number = 0;
while($number < 10)
{
    $number++;
    if($number == 5)
        continue;
    echo '<p>'.$number.'</p>';
}
?>
