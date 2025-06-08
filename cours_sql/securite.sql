/*
    > chiffrement : (texte en clair) -> clé -> (donnée chiffrée)
    > hashage : (donnée en clair) -> (hash)
*/

/* hashage 
--MySQL : SHA2 -> 224 bits, 256 bits, 384 bits, 512 bits
SELECT SHA2('bonjour', 224);
*/
/* CHIFFREMENT 
SELECT AES_ENCRYPT('bonjour', 'secret');
*/
/* L'INVERSE DU CHIFFREMENT */
SET @passw = AES_ENCRYPT('bonjour', 'secret');
SELECT @passw;
SET @text = AES_ENCRYPT(@passw, 'secret');
SELECT @text;