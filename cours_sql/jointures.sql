/* les jointures permettent de faire la relation entre plusieurs tables */

/* CREER UNE JOINTURE POUR RELIER LA TABLE DES PLAYERS A LA TABLE DES ABILITES 
SELECT player_name, player_level, ability_name
FROM fv_players
INNER JOIN fv_abilities ON fv_players.player_ability = fv_abilities.id_ability;
*/
/* JOINTURE NATURELLE 
SELECT *
FROM fv_players
NATURAL JOIN fv_abilities ON fv_players.id = fv_abilities.id;
*/
/* JOINTURE GAUCHE */
/* retourne moi la liste de mes objets même si certains ne sont pas utilisés 
SELECT * 
FROM fv_abilities
LEFT JOIN fv_players ON fv_abilities.id_ability = fv_players.player_ability;
*/
/* L'INVERSE DU INNER JOIN */
/* si je vais savoir quelles classes ne sont pas utilisées par mes joueurs 
SELECT ability_name
FROM fv_abilities
LEFT JOIN fv_players ON fv_abilities.id_ability = fv_players.player_ability
WHERE fv_players.player_ability IS NULL;
*/
/* JOINTURE CROISEE */
SELECT *
FROM fv_players
CROSS JOIN fv_abilities;

