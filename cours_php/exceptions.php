<?php
/* 
LEVER UNE ERREUR 
$age = 17;
try
{
   if($age < 18)
    throw new Exception('Tu n\'es pas majeur');
}
catch(Exception $e)
{
    echo $e->getMessage();
}
finally
{

}
*/
class MyExceptionClass extends Exception
{
    //public function show_email_error_message()
}
//formulaire
$email = 'tom@mail.com';
try
{
    if(!filter_var($email, FILTER_VALIDATE_EMAIL))
        throw new MyExceptionClass('E-mail incorrect');
}
catch(MyExceptionClass $e)
{
    //echo $e->show_email_error_message();
    echo $e->getMessage();
}