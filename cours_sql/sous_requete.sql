/* EST-CE QUE Icekissy A DEJA VENDU DES OBJETS A UN AUTRE JOUEUR ? 
si oui sortir les informations sur le joueur
et LIMIT 1 c'est pour s'arrêter à une requête(un joueur)
SELECT * FROM fv_players
WHERE player_name = 
(
    SELECT playertrade_seller
    FROM fv_playertrades
    WHERE playertrade_seller = 'Icekissy'
    LIMIT 1
);
*/
/* RECUPERER PLUSIEURS RESULTATS 
SELECT * FROM fv_players
WHERE player_name IN
(
    SELECT playertrade_seller
    FROM fv_playertrades
);
*/
/* VALIDER LA REQUETE SI LA SOUS-REQUETE A AU MOINS UNE VALEUR 
SELECT * FROM fv_players
WHERE player_name = ANY
(
    SELECT playertrade_seller
    FROM fv_playertrades
);
*/
/* VERIFIER L'EXISTENCE DE L'INFORMATION QUE NOUS AVONS */
SELECT * FROM fv_players
WHERE EXISTS
(
    SELECT *
    FROM fv_playertrades
    WHERE playertrade_item = 'Épée en mousse'
);
