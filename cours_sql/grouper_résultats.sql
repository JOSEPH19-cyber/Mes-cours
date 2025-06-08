/* RECUPERER POUR CHAQUE PAYS LE NOMBRE DE PERSONNE INSCRITE 
SELECT COUNT(*) AS 'Nombre de résidents', user_country
FROM fv_users
GROUP BY user_country;
*/
/* POUR CHAQUE PAYS FAIRE LA SOMME DES AGES DE TOUTES LES PERSONNES 
SELECT user_country, SUM(user_age)
FROM fv_users
GROUP BY user_country WITH ROLLUP;
*/
/* FILTRER DES RESULTATS ISSUS D'UN GROUPEMENT DE DONNEES */

/* indiquer les pays où la somme des âges des résidents dépasse 50*/
SELECT user_country, SUM(user_age)
FROM fv_users
GROUP BY user_country
HAVING SUM(user_age) > 50;
