/*let name = "yuna";
if(name === "yuna")
{
    document.write("OUI");
    let number = 6;

    if (number === 6)
        document.write("OUI");
}
else
{
    document.write("NON");
}*/
/*let number = 6;
if(number  < 0)
    document.write("< 0");
else if(number > 10)
    document.write("> 10");
else
    document.write(number);
*/
/*let number = 6;
switch(number)
{
    case 0:
        document.write("number = 0");
    case 5:
        document.write("number = 5");
    default:
        alert("pas de valeur reconnue..."); 
}
*/

/*let number = 6;
switch(number)
{
    
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        document.write("number < 5");
        break;
    case 5:
        document.write("number = 5");
        break;
    default:
        alert("pas de valeur reconnue...");
        break;
}
*/
/*let name = "yuna";
switch(name)
{
    case "yuna":
        document.write("OK");
        break;
    default:
        alert("pas Ok");
        break;
}*/
/*
    <condition> ? <cas_vrai> .: "number <= 10";
*/
let number = 15;
let res = (number > 10) ? "number > 10" : "number <= 10";/*stocke le 1er ou le 2e cas*/
document.write(res);