/*
try
  {
    //code sensible, qui pourrait lever une exception
    throw new Error("Une erreur s'est produite...");
  }
  catch(err)
  {
    console.log(err.message);
  }
  finally
  {
    document.write("OK");
  }
*/
/*
Error
TypeError, RangeError, SyntaxError
InternalError, EvalError
*/
/*
try
{
    
}
catch(err)
{
    if(err instanceof TypeError)
        console.log();
    else if(err instanceof RangeError)
        console.log();
}
*/
function MyError(message)
{
    const err = new Error(message);
    err.logfile = 'logs/myerror.log';
    err.code = 310;

    return err;
}
CustomException.prototype = Object.create(Error.prototype);
throw new MyError("problème !"); 
