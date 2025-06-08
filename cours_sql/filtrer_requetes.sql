/*
    = égalité
    != différence
    > < <= >=
*/
/* FILTRER UNE REQUÊTE */

/* FILTRER LE JEUX AVEC L'IDENTIFIANT NUMERO 11 
SELECT * FROM fv_games WHERE id_game = 11;
*/
/* FILTRER TOUS LES JEUX DONT LES IDENTIFIANTS SONT SUPERIEURS A 5 
SELECT * FROM fv_games WHERE id_game > 5;
*/
/*
    AND : et
    OR : ou
*/
/*SELECT * FROM fv_games WHERE id_game = 5 OR id_game = 10;
SELECT * FROM fv_games WHERE game_price > 5 AND game_price < 30;
*/
/* UNE LISTE DES VALEURS (par exemple : 2, 4, 6) 
SELECT * FROM fv_games WHERE game_stock IN(2, 4, 6);
*/
/* TRAVAILLER SUR UN INTERVALLE DES VALEURS 
SELECT * FROM fv_games WHERE game_price BETWEEN 0 AND 20;
*/
/* FAIRE UNE VERIFICATION SUR UNE CHAÎNE DE CARACTERES 
SELECT * FROM fv_games WHERE game_title LIKE 'Tekken%';
le % c'est pour dire n'importe quoi qui vient après(qui a le même nom)
et pour n'importe quoi qui vient avant on mettra le % devant*/
/* RETOURNER LE JEUX DONT LE PRIX N'EST PAS NUL 
SELECT * FROM fv_games WHERE game_price IS NOT NULL;
*/
/* TRIER DES DONNEES */

/* RANGER MES JEUX PAR ORDRE ALPHABETIQUE 
SELECT * FROM fv_games ORDER BY game_title;
par défaut on peut mettre ASC : pour croissant et DESC : POUR DECROISSANT*/
/* TRIER SUR PLUSIEURS CHAMPS 
SELECT * FROM fv_games ORDER BY game_title, game_price DESC;
*/
/* LIMITE LE NOMBRE D'ENREGISTREMENT 
SELECT * FROM fv_games LIMIT 5;
*/
/* LIMITE LE NOMBRE D'ENREGISTREMENT MAIS EN COMMENCANT PAR */
SELECT * FROM fv_games LIMIT 5 OFFSET 3;





