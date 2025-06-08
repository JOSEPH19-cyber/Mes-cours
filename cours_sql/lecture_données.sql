/* RECUPERER UN PRODUIT DANS LA TABLE fv_products 
SELECT product_name FROM fv_products;
*/
/* RECUPERER UN PRODUIT ET SON MONTANT 
SELECT product_name,product_amount FROM fv_products;
*/
/* RECUPERER LA TOTALITE DE L'ENREGISTREMENT DE TOUTES LES COLONNES DA LA TABLE 
SELECT * FROM fv_products;
*/
/* EVITER DE RECUPERER UN DOUBLON 
*/
/* UN ALIAS : pour ne pas avoir à reércrire plusieurs fois le nom d'un produit */
SELECT product_name AS pN FROM fv_products;
