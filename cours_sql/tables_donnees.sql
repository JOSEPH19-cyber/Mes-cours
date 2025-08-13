/* une table : boîte qui contien les informations
               il a un nom
               un champ chaque champ avec son nom
               type
               contrainte
               peut-être liéé à d'autre table */


/* Requêtes sur les bases de donées */
SHOW DATABASES;
CREATE DATABASE IF NOT EXISTS `test`;
USE `test`;
/* Requêtes liées aux tables */
SHOW TABLES; 

CREATE TABLE IF NOT EXISTS`t_users`
(
    `id_user` SMALLINT,
    `user_name` VARCHAR(65),
    `user_birthday` DATE
);
/* LES INFORMATIONS DE LA TABLE */
DESCRIBE `t_users`;

/* alterer une table */
ALTER TABLE `t_users`
ADD `user_point` TINYINT(2);--ajouter une colonne
DROP `user_point`;--supprimer une colonne
MODIFY `id_user` SMALLINT;--modifier le type de la colonne
CHANGE `user_birthday` `user_birth` DATE;--changer le nom de la colonne

SHOW TABLE STASTUS; --afficher les informations de la table de manière plus détaillée

/* supprimer une table */
DROP TABLE `t_users`;