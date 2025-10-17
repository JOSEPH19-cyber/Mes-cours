/* INITIALISATION DE LA BASE DE DONNEES */
SHOW DATABASES;

/* CREATION DE LA BASE DE DONNEES */
CREATE DATABASE IF NOT EXISTS `auth_test`;
USE `auth_test`;

/* CREATION DE LA TABLE users */
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(65) NOT NULL,
    `email` VARCHAR(65) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `is_admin` TINYINT(1) NOT NULL DEFAULT 0,
    `date_created` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`username`),
    UNIQUE KEY (`email`)
)
ENGINE = InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_unicode_ci;

/* INSÉRER DES UTILISATEURS DE TEST */
INSERT INTO `users`(`username`, `email`, `password`) 
VALUES
('alice', 'alice@example.com', 'motdepasse123'),
('bob', 'bob@example.com', '12345'),
('charlie', 'charlie@example.com', 'azerty');

