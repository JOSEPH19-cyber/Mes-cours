/*type d'evenements javascript */


/*
let someButton = document.querySelector('button');
//console.log(someButton)
someButton.onclick = () =>
{
    alert('tu as cliqué !');
};
*/
/*
let someButton = document.querySelector('button');
someButton.onclick = (event) =>
{
    console.log(event);
};
someButton.onmouseover = (event) =>// dès qu'on passe la souris sur l'élément
{
    console.log(event);
};
*/
/*
CHANGER DE BACKGROUND DES QU'ON CLIQUE SUR BUTTON
let someButton = document.querySelector('button');
someButton.onclick = (event) =>
{
    console.log(event);
    document.body.style.backgroundColor = "#a585f5";
};
*/
/* 
AJOUTER UN ECOUTEUR 
let someButton = document.querySelector('button');
someButton.addEventListener('click', (event) =>
{
    console.log(event);
});
*/
/* 
ENLEVER UN ECOUTEUR 
let someButton = document.querySelector('button');
someButton.removeEventListenerEventListener('click', (event) =>
{
    console.log(event);
});
*/
/*
let someButton = document.querySelector('button');
function test()
{

}
function otherTest()
{

}
someButton.addEventListener('click', test);
someButton.addEventListener('click', otherTest);
*/
/* 
PROPAGER L'ELEMENT CAPTURER SUR LES ELEMENTS 
let someButton = document.querySelector('button');
someButton.addEventListenerEventListener('click', (event) =>
{
    console.log(event);
    console.log("clic sur le button");
});
let someForm = document.querySelector('form');
someForm.addEventListener("mouseover", (event) =>
{
    console.log(event);
    console.log("La souris passe sur le formulaire");
});
someForm.addEventListener('mouseleave', (event) =>
{
    console.log(event);
    console.log("La souris quitte sur le formulaire");
});
*/
/*
let someButton = document.querySelector('button');
someButton.addEventListenerEventListener('click', (event) =>
{
    console.log(event);
    console.log("clic sur le button");
});
window.addEventListenerEventListener('keydown', (event) =>
{
    if(event.key == 'b')
        alert('Tu as gagné !');
});
*/
/* ANNULER UN COMPORTEMENT PAR DEFAUT D'UN EVENEMENT */
window.addEventListener('keydown', (event) =>
{
    event.preventDefault();
    console.log(event);
});
/* event.stopPropagation(): pour stopper la propagation d'un evenement */