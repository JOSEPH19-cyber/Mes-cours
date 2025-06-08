/* CREER UN UTILISATEUR */
CREATE USER 'jachampagne'@'localhost' IDENTIFIED BY 'passe';
ALTER USER 'jachampagne'@'localhost' IDENTIFIED BY 'new';

/* RENOMMER LE NOM */
RENAME USER 'jachampagne'@'localhost' TO 'jason'@'localhost';
/* SUPPRIMER UN UTILISATEUR */
DROP USER 'jason'@'localhost';

/* PRIVILEGE 
/* *.* : toutes les base de données sur toutes les tables*/
/* FAIS TOUT CE QUE TU VEUX SUR TA BASE DE DONNEES MAIS NE TOUCHE PAS AUTRES BASES */
GRANT ALL 
ON cours_sql.*
To 'jachampagne'@'localhost';

/* POUR RETIRER CERTAINS DROITS */
REVOKE ALL
ON cours_sql.*
FROM 'jachampagne'@'localhost';ex