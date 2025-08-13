/* MODIFIER UN ELEMENT DU STOCK S'IL VIENT D'ÊTRE ACHETER 
UPDATE fv_clients SET client_loyalty = 14 WHERE client_firstname = "Jason";
*/
/* MODIFIER PLUSIEURS  INFORMATIONS
UPDATE fv_clients SET client_loyalty = 14, client_birthday = "1999-07-22" WHERE client_firstname = "Jason";
*/

/* SUPPRESSION DES DONNEES 
DELETE FROM fv_clients WHERE client_firstname = "Jason";
*/

/* SUPPRIMER TOUS LES ENREGISTREMENTS 
DELETE FROM fv_games;
*/
/* VIDER COMPLETEMENT UNE TABLE 
TRUNCATE TABLE fv_clients;
plus optimiser pour vider completement par rapport au delete from*/