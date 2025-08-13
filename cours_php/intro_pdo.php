<?php
/* 
Explication :

1.PDOException : Une des exceptions de la PD0
2.$DB_DSN : Driver, Hôte, nom de la base de données
*/



/* CONNEXION A UNE BASE DE DONNEE */
require 'db-config.php';

/*
POUR LES INFORMATIONS SUR LA PDO 
phpinfo();
exit;
*/

try{
    /* LECON 30 : INTERROGER LES BASES DE DONNEES */

    /* nous allons rajouter des paramètres optionnels avec valeurs particulières*/

    $options = 
    [
        /* lancer une commande à l'initialisation pour être sur de travailler avec le bon encodage */
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
        /* mode d'erreurs que nous allons avoir pour PDO */
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        /* avoir une connexion persistante : pas obligatoire*/
        PDO::ATTR_PERSISTENT => true
    ];
    /* INTERROGER LES BASES DE DONNEES */


    $PDO = new PDO($DB_DSN, $DB_USER, $DB_PASS, $options);

    /* LECON 30 : INTERROGER LES BASES DE DONNEES */

    /*

    faire une requête avec l'objet PDO par la methode query 
    
    $sql = 'SELECT * FROM fv_clients';
    $results = $PDO->query($sql);

    foreach($results as $re)
    {
        echo '<pre>';
        print_r($re);
        echo '</pre>';
    }

    */

    /* faire une requête avec l'objet PDO par la methode fetch */

    $sql = 'SELECT * FROM fv_clients';
    $results = $PDO->query($sql);

    /*

        FETCH :
            BOTH (par defaut)
            ASSOC(tableau associatif)
            OBJ (objet)

    */

    while($data = $results->fetch(PDO::FETCH_ASSOC))
    {
        /* Recupérer toutes les données */
        echo '<pre>';
        print_r($data);
        echo '</pre>';

        /* par exemple : Recupérer seulement les prénoms */
        echo '<p>'.$data['client_firstname'].'</p>';
     }

     /* NB : nous pouvons aussi utiliser fechtAll sans passer par une boucle while mais un foreach
             closeCursor()
     */
 
    /* INTERROGER LES BASES DE DONNEES */


    //echo 'connexion &eacute;table !';
}
catch(PDOException $pe)
{
    echo 'ERREUR : '.$pe->getMessage();
}





/*------------------------------------RESUME----------------------------------------------------*/
/*
## 🔑 OBJECTIF DU MODULE 11

Apprendre à **se connecter à une base de données MySQL avec PDO** et **interroger des données** (lecture uniquement ici).

---

## 1. 🧠 **PDO : Qu’est-ce que c’est ?**

`PDO` (PHP Data Objects) est une **interface orientée objet** pour interagir avec une base de données.
Elle permet de :

* Se connecter à **plusieurs types de bases** (MySQL, SQLite, PostgreSQL, etc.)
* Utiliser des **requêtes SQL sécurisées**
* Gérer les erreurs proprement
* **Séparer** le code PHP et les requêtes SQL pour plus de clarté

---

## 2. 📦 `db-config.php` : Le fichier de configuration

Il contient les **informations sensibles** (à ne jamais afficher dans le navigateur) nécessaires pour se connecter à la base :

```php
$DB_DSN = 'mysql:host=localhost;dbname=fv_database'; 
$DB_USER = 'root';
$DB_PASS = '';
```

### ✍️ Décomposition de `$DB_DSN` :

* `mysql` : le type de base
* `host=localhost` : le serveur (souvent `localhost` en local)
* `dbname=fv_database` : le nom de la base de données

---

## 3. ⚙️ Les options PDO

Tu passes un tableau `$options` à l'objet PDO pour mieux **configurer** ta connexion.

### Voici ce que tu as mis :

```php
$options = [
  PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8', // important pour bien gérer les accents
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,      // pour attraper les erreurs avec try/catch
  PDO::ATTR_PERSISTENT => true                      // (facultatif) : réutilise la même connexion
];
```

C’est très **propre** et **professionnel**. Cela t’assure :

* que les erreurs ne seront pas silencieuses
* que les caractères accentués s'affichent correctement
* que la connexion est plus rapide (en production) si persistante

---

## 4. 🔌 Connexion à la base

```php
$PDO = new PDO($DB_DSN, $DB_USER, $DB_PASS, $options);
```

Tu initialises ici **l’objet PDO**, qui représente ta connexion.

---

## 5. 📤 Lecture des données

### a. Requête SQL

```php
$sql = 'SELECT * FROM fv_clients';
$results = $PDO->query($sql);
```

Tu demandes ici toutes les colonnes de tous les enregistrements de la table `fv_clients`.

---

### b. `fetch()` : lire les données ligne par ligne

```php
while($data = $results->fetch(PDO::FETCH_ASSOC)) {
   print_r($data);
}
```

* `fetch()` récupère **une seule ligne à la fois**
* `PDO::FETCH_ASSOC` signifie que tu récupères un **tableau associatif** :

  * Chaque **nom de colonne** devient une **clé du tableau**
  * Tu accèdes à chaque champ comme ça : `$data['client_firstname']`

### c. Autres types de `fetch()` :

* `FETCH_ASSOC` : tableau associatif (le plus courant)
* `FETCH_OBJ` : objet PHP (`$data->client_firstname`)
* `FETCH_BOTH` : les deux à la fois (défaut, mais souvent inutile)

---

### d. Alternative : `fetchAll()`

Tu peux aussi tout lire d’un coup :

```php
$data = $results->fetchAll(PDO::FETCH_ASSOC);
foreach($data as $client) {
  echo $client['client_firstname'];
}
```

Mais `fetchAll()` est **moins performant** si tu as **beaucoup de lignes** (risque de surcharge mémoire).

---

### e. `closeCursor()`

Permet de **libérer la connexion** à la base pour pouvoir faire une autre requête juste après sur la même instance :

```php
$results->closeCursor();
```

---

## 6. 🛑 Gestion des erreurs

```php
catch(PDOException $pe) {
  echo 'ERREUR : '.$pe->getMessage();
}
```

Si la connexion échoue ou si ta requête est mauvaise, tu reçois une erreur lisible grâce à `getMessage()`.

---

## ✅ Résumé des bonnes pratiques dans ton code

| Élément                                       | Bonne pratique ? | Pourquoi                      |
| --------------------------------------------- | ---------------- | ----------------------------- |
| `db-config.php` séparé                        | ✅                | Sécurité, clarté              |
| Options PDO (`utf8`, `errmode`, `persistent`) | ✅                | Pro, propre                   |
| `try/catch` pour erreurs                      | ✅                | Évite les plantages brutaux   |
| `fetch(PDO::FETCH_ASSOC)`                     | ✅                | Meilleur contrôle des données |
| Requêtes commentées et bien structurées       | ✅                | Lisibilité, pédagogie         |

---

## 📌 En conclusion

Tu viens d’apprendre à :

* Te **connecter proprement** à une base
* Lire des données avec **sécurité et efficacité**
* Écrire un code **moderne, clair et professionnel**

---


*/
