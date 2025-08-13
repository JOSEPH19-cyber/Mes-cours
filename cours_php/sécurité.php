<?php
require 'db-config.php';

/* 
    3 eme paramètre à passer dans bindValue ou bindParam    

    PDO::PARAM_STR(par défaut)
    PDO::PARAM_NULL
    PDO::PARAM_BOOL
    PDO::PARAM_INT
*/

try
{
    $options = 
    [
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        
        /* option pour utiliser des vrais requêtes préparées */
        PDO::ATTR_EMULATE_PREPARES => false
    ];

    $PDO = new PDO($DB_DSN, $DB_USER, $DB_PASS, $options);

    
    /* 
    
    solution minimale pour éviter des attaques sql 
    
    echo $PDO->quote($sql);
    exit;

    */

    /* 
    
        Les requêtes préparées :

        facile à retenir:
                            1. on prépare une requête 
                            2. on injecte la(les) donnée(s)
                            3. on execute
    
    */

    /* 
        1. bindValue : 
                        Evalue tout de suite la requêt
        2. bindParam :
                        Evalue la requête au moment de son execution
    */
    $request = $PDO->prepare('SELECT * FROM fv_clients WHERE client_firstname = ?');
    $request->bindValue(1, "Coco");/* (paramètre, valuer) */
    $request->execute();

    $request = $PDO->prepare('SELECT * FROM fv_clients WHERE client_firstname = ?');
    $request->bindParam(1, $name);/* (paramètre, valuer) */

    $name = "Tic";
    $request->execute();

    /* A la place du ? nous pouvons passer par des identificatuers nommées */
    $request = $PDO->prepare('SELECT * FROM fv_clients WHERE client_firstname = :nom');
    $request->bindValue(":nom", "Tac");/* (paramètre, valuer) */
    $request->execute();

    echo '<pre>';
    print_r($request->fetchAll(PDO::FETCH_ASSOC));
    echo '</pre>';
}
catch(PDOException $pe)
{
    echo 'ERREUR : '.$pe->getMessage();
}





/*---------------------------RESUME------------------------------------------------------*/
/*

---

## 🔐 MODULE 11 : SÉCURISER LES REQUÊTES SQL

### 🧠 Objectif du module

Ce module vise à **protéger les requêtes SQL contre les injections SQL**, en utilisant **PDO (PHP Data Objects)**, un outil sécurisé et moderne pour interagir avec une base de données en PHP.

---

## 1. 🛡️ Pourquoi sécuriser les requêtes SQL ?

Quand tu écris une requête SQL avec des **données entrées par l'utilisateur**, tu risques une **injection SQL** si tu insères directement les valeurs dans la requête sans protection.

Exemple de danger :

```php
$requete = "SELECT * FROM users WHERE username = '$username'";
```

Si l'utilisateur écrit comme nom : `' OR 1=1 --`
Tu auras cette requête exécutée :

```sql
SELECT * FROM users WHERE username = '' OR 1=1 --';
```

Ce qui donne accès à **toute la table** ! 😱

---

## 2. ✅ Solution : les requêtes préparées (Prepared Statements)

### ✔️ Étapes de base :

1. **Préparer la requête** : on utilise `prepare()`
2. **Lier les valeurs** : avec `bindValue()` ou `bindParam()`
3. **Exécuter la requête** : avec `execute()`

Cela empêche toute valeur d’être interprétée comme du code SQL, même si l’utilisateur essaie.

---

## 3. 💡 Différences entre `bindValue()` et `bindParam()`

| Méthode       | Quand elle évalue la valeur | Exemple pratique                           |
| ------------- | --------------------------- | ------------------------------------------ |
| `bindValue()` | Dès l'appel                 | Valeur fixe (ex: "Coco")                   |
| `bindParam()` | Au moment de l'exécution    | Quand la valeur peut changer après le bind |

### Exemple :

```php
$request = $PDO->prepare('SELECT * FROM clients WHERE nom = ?');
$request->bindValue(1, "Jean"); // immuable
$request->execute();
```

```php
$request = $PDO->prepare('SELECT * FROM clients WHERE nom = ?');
$request->bindParam(1, $nom); // valeur dynamique
$nom = "Marie";
$request->execute(); // $nom est pris ici au moment de l’exécution
```

---

## 4. 🏷️ Paramètres nommés vs positionnels

### ✅ Paramètres positionnels

```php
$request = $PDO->prepare('SELECT * FROM table WHERE id = ?');
$request->bindValue(1, 5);
```

### ✅ Paramètres nommés

```php
$request = $PDO->prepare('SELECT * FROM table WHERE id = :id');
$request->bindValue(':id', 5);
```

➡️ **Avantage : plus lisible, surtout avec plusieurs paramètres.**

---

## 5. 📋 Types de données à lier (3e paramètre)

Tu peux forcer le type de données avec :

| Type PDO          | Description                   |
| ----------------- | ----------------------------- |
| `PDO::PARAM_STR`  | Chaîne de caractères (défaut) |
| `PDO::PARAM_INT`  | Entier                        |
| `PDO::PARAM_BOOL` | Booléen (true/false)          |
| `PDO::PARAM_NULL` | Null                          |

### Exemple :

```php
$request->bindValue(':actif', true, PDO::PARAM_BOOL);
```

---

## 6. 🧱 Paramètre de sécurité dans le `new PDO(...)`

Dans le code, on définit des options pour renforcer la sécurité :

```php
$options = [
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Gérer les erreurs
    PDO::ATTR_EMULATE_PREPARES => false // Obliger à utiliser de vraies requêtes préparées
];
```

### Important :

* **`ATTR_ERRMODE`** : lance des exceptions si une erreur survient.
* **`ATTR_EMULATE_PREPARES`** : désactive l’émulation, pour utiliser les vraies requêtes préparées du serveur (plus sûres).

---

## 7. 🧯 Bonus : Sécurité minimale avec `quote()`

Si tu ne veux pas utiliser `prepare()` (déconseillé), tu peux à minima faire :

```php
$nomSecurise = $PDO->quote($nom);
```

Mais **ce n’est pas recommandé** pour insérer des données. Les requêtes préparées sont **la vraie solution**.

---

## 8. 📤 Affichage des résultats

Pour récupérer les résultats d’une requête :

```php
print_r($request->fetchAll(PDO::FETCH_ASSOC));
```

Cela retourne un tableau associatif (`FETCH_ASSOC`) avec les données.

---

## ✅ Conclusion

Utilise **toujours des requêtes préparées** avec `prepare()` + `bindValue()` ou `bindParam()` pour **protéger ton site** contre les attaques SQL.

---

*/