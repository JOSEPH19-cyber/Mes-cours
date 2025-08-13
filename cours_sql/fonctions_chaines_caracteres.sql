/* RECUPERER LE NOMBRE DE CARACTERES D'UNE CHAINE 
SELECT carbrand_name, char_length(carbrand_name)
FROM fv_carbrands;
*/
/* CONCATENATION 
SELECT concat(carbrand_name, '(', carbrand_country, ')')
FROM fv_carbrands;
*/
/* CONVERTIR EN MAJUSCULE 
SELECT upper(carbrand_name) FROM fv_carbrands;
*/
/* CONVERTIR EN MINISCULE 
SELECT lower(carbrand_name) FROM fv_carbrands;
*/
/* INVERSION D'UNE CHAINE
SELECT reverse(carbrand_name) FROM fv_carbrands;
 */
/* SUPPRESSION D'ESPACES BLANCS
SELECT trim(carbrand_name) FROM fv_carbrands;
 */
/* REMPLACER UNE INFORMATION PAR UNE AUTRE 
UPDATE fv_carbrands
SET carbrand_website = REPLACE(carbrand_website, 'groupe', 'group')
WHERE carbrand_name = 'Renault';
*/
/* POSITION D'UNE OCCURENCE DANS UNE CHAINE
SELECT carbrand_name, LOCATE('y', carbrand_name) FROM fv_carbrands;
 */
/* EXTRACTION D'UNE SOUS-CHAINE */
SELECT carbrand_name, substr(carbrand_name, 2) FROM fv_carbrands;