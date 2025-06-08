/* La fonctionion d'agrégation sert à :
   -compter le nombre d'enregistrement d'une table
   -faire la moyenne
*/
/* COMPTER TOUS MES JEUX 
SELECT COUNT(*) FROM fv_games;
*/

/* LA MOYENNE
SELECT AVG(game_price) FROM fv_games;
 */
/* LE MAXIMUM 
SELECT MAX(game_price) FROM fv_games;
*/
/* LE MINIMUM 
SELECT MIN(game_price) FROM fv_games;
*/
/* LA SOMME : LE NOMBRE DE JEUX QUE JE POSSEDE */
SELECT SUM(game_stock) FROM fv_games;