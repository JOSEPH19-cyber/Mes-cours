/*
FONCTION DE RAPPEL
function getUser()
{
    return["Chuck", "Anissa", "Luke"];
}
function getNumbers()
{
    return [1, 2, 3, 4, 5];
}
function printSomething(callback)
{
    data = callback();
    console.log("Données : " + data);
}
printSomething(getNumbers);
*/
/* 
UNE FONCTION QUI PERMET DE REALISER UN TRAITEMENT ASYNCHRONE 
setTimeout((someone) =>
{
    console.log("Hello" + someone);
}, 200, "Chuck Norris");//on place le(s) paramètre(s) ici
*/
/* 
ORDRE D'AFFICHAGE ASYNCHRONE 
console.log("Message au début du script");
setTimeout((someone) =>
{
    console.log("Hello" + someone);
}, 200, "Chuck Norris");
console.log("Message à la fin du script");
*/
/* PROMESSE 
pending(attente)
fulfilled(tenue/honorée/validée)
rejected(rejetée/annulée)

let somePromise = new Promise((resolve, reject) =>
{
resolve("c'est super !");
});
// Consommateur
somePromise.then(value =>
{
    console.log("TENUE :" + value);
}).catch(reason =>
{
    console.log("ERREUR: " + reason);
});
*/
/*
ON VA EXECUTER LE GLOBALPROMISE SI  TOUTES LES PROMESSES SONT TENUES
const p1 = new Promise.resolve("Promesse 1 tenue");
const p2 = new Promise.resolve("Promesse 2 tenue");
let globalPromise = Promise.all(p1, p2);
*/
/* EXEMPLE 1 
function checKurl()
{
    return new Promise((resolve, reject) =>
    {
        fetch(URL).then(Response =>
        {
            if(Response.ok)
                resolve("Adresse valide : " + URL);
            else
                resolve("Adresse invalide :" + URL)
        }).catch(error =>
        {
            resolve("INVALIDE :" + error);
        });
    });
}
const urls = [
    'https://api.github.com/users/jasonchampagne',
    'https://api.github.com/users/chuchnorris',
    'https://api.github.com/users/999',
    'https://api.github.com/users/marta'
];
const allPromises = urls.map(URL => checKurl(URL));
Promise.all(allUrls).then(results =>
{
    results.forEach(result => 
        {
            console.log(result);
    });
}).catch(error =>
{
    console.log("ERREUR : " + error);
})
 faut revoir le majuscule et miniscule: erreur*/
//1.RECUPERER LES UTILISATEURS
function getUser()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            const user = {"username": "Chuck Norris", "age": "76"};
            resolve(user);
        }, 3000);
    });
}
//2.AFFICHER DES UTILISATEURS
async function printUser()
{
    try
    {
        const userData = await getUser();
        console.log("Données : ")
        console.log(userData.username);
        console.log(userData.age);
    }
    catch(err)
    {
        console.error(err);
    }
}
printUser();