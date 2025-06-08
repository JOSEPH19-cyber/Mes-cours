/* les contraintes : sont un ensemble de règles  définies sur les tables(ou colonnes de table)qui
                     permettent d'etablir des règles à respecter lors de l'enregistrement des nouvelles informations
                     
                     NOT NULL : pour une contrainte obligatoire
                     DEFAULT : valeur par défaut
                     CHECK : vérification d'une valeur
                     UNIQUE : valeur de champ unique
                     PRIMARY KEY : clé primaire
                     AUTO_INCREMENT : incrémentation de 1 en 1
                     FOREIGN KEY : clé étrangère
                     INDEX : améiore l'execution des données de selection ou de recherche(bref pour la lecture et la recherche)*/

/*
CREATE DATABASE IF NOT EXISTS `cours_sql`;
USE `cours_sql`;
CREATE TABLE IF NOT EXISTS `table_users`
(
    `id_user` SMALLINT(6) NOT NULL CHECK(id_user <= 10000),
    `user_name` VARCHAR(30) NOT NULL,
    `user_email` VARCHAR(100) NOT NULL,
    `user_registration` DATE NOT NULL,
    `user_admin` BOOLEAN DEFAULT 0
);
*/
/*ALTER TABLE `table_users`modifier la table
MODIFY `user_name` VARCHAR(30) NOT NULL;*/
/*
AJOUTER UNE CONTRAINTE
ALTER TABLE `table_users`
ALTER `user_admin` SET DEFAULT 1;
*/
/*
SUPPRIMER UNE CONTRAINTE
ALTER `user_admin` DROP DEFAULT;
*/
/*
VERIFICATION D'UNE VALEUR
ALTER TABLE `table_users`
ADD CHECK(id_user <= 10000);
*/
/* 
UN CHECK SUR PLUSIEURS CHAMPS DIFFERENTS 
ALTER TABLE `table_users`
ADD CONSTRAINT CHK_idtoobig CHECK(id_user <= 10000 AND user_admin > 1);
*/
/*
SUPPRIMER LA CONTRAINTE CHK_idtoobig
ALTER TABLE `table_users`
DROP CHECK CHK_idtoobig;
*/
CREATE DATABASE IF NOT EXISTS `cours_sql`;
USE `cours_sql`;
CREATE TABLE IF NOT EXISTS `table_users`
(
    `id_user` SMALLINT(6) NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(30) NOT NULL,
    `user_email` VARCHAR(100) NOT NULL,
    `user_registration` DATE NOT NULL,
    `user_admin` BOOLEAN DEFAULT 0,

    /*UNIQUE(`user_name`)*/
    PRIMARY KEY(`id_user`)
)
ENGINE = MyiSAM
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
/*
AVOIR UNE CONTRAINTE UNIQUE
ALTER TABLE `table_users`
ADD UNIQUE(`user_name`);
*/
/*
CONTRAINTE UNIQUE SUR PLUSIEURS CHAMPS
ALTER TABLE `table_users`
ADD CONSTRAINT UC_userid UNIQUE(`id_user`, `user_name`);
*/
/*
SUPPRIMER UNE CONTRAINTE UNIQUE
ALTER TABLE `table_users`
DROP INDEX UC_userid;
*/
/*
AUTO INCREMENTATION
ALTER TABLE `table_users` AUTO_INCREMENT = 100;
*/
CREATE TABLE IF NOT EXISTS `table_news`
(
    `id_news` SMALLINT(6) NOT NULL AUTO_INCREMENT,
    `news_title` VARCHAR(100) NOT NULL,
    `news_content` TEXT NOT NULL,
    `news_author` SMALLINT(6) NOT NULL,

    PRIMARY KEY(`id_news`),
    FOREIGN KEY(`news_author`) REFERENCES `table_users`(`id_user`)
);

CREATE INDEX `idx_users` ON `table_users`(`user_name`, `user_email`);

/*
SUPPRIMER UNE CONTRAINTE INDEX
ALTER TABLE `table_users`
DROP INDEX `idx_users`;
*/