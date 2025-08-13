<?php

/* Initialiser la session */
function init_php_session() : bool
{
    if(!session_id())
    {
        session_start();
        session_regenerate_id();
        return true;
    }

    return false;
}

/* Detruire la session */
function clean_php_session() : void
{
    session_unset();
    session_destroy();
}

/* Vérifier si l'utilisateur est connecter */
function is_logged() : bool
{
    if(isset($_SESSION['username']))
        return true;
    return false;
}

function is_admin() : bool
{
    if(is_logged())
        if(isset($_SESSION['rank']) && $_SESSION['rank'] == 1)
            return true;
        return false;
}