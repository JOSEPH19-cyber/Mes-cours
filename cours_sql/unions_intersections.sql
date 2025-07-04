/* CONCATENER LES RESULTATS DE DEUX REQUETES 
SELECT * FROM fv_site1_users UNION SELECT * FROM fv_site2_users;
*/
/* RECUPERER LES NOMS DES UTILISATEURS DE DEUX TABLES 
SELECT user_name FROM fv_site1_users UNION SELECT user_name FROM fv_site2_users;
*/
/* UNION ALL : POUR RECUPERER MEME LES DOUBLONS */
/* RECUPERER DES RESULTATS QUI SONT DANS DEUX TABLES 
SELECT user_name FROM fv_site1_users 
INTERSECT
SELECT user_name FROM fv_site2_users;
*/
/* LES ELEMENTS DE LA PREMIERE REQUETE QUI NE SONT PAS PRESENT DANS LA DEUXIEME 
SELECT user_name FROM fv_site1_users 
EXCEPT
SELECT user_name FROM fv_site2_users;
*/
/* TRIER LES DEUX TABLES PAR ORDRE ALPHABETIQUE 
SELECT * FROM fv_site1_users UNION SELECT * FROM fv_site2_users ORDER BY user_name;
*/