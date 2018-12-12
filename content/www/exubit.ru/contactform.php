<?php
# Our new data
$data = array(
    'secret' => '6LfLeTsUAAAAANSxP2c6i7ryFekr1PMrmpzL0AXO',
    'response' => $_POST['g-recaptcha-response']
);
# Create a connection
$url = 'https://www.google.com/recaptcha/api/siteverify';
$ch = curl_init($url);
# Form data string
$postString = http_build_query($data, '', '&');
# Setting our options
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postString);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
# Get the response
$response = curl_exec($ch);
curl_close($ch);

if(!json_decode($response)->success) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=captcha-error.html\">";
  exit;
}

$EmailFrom = "contactform@exubit.ru";
$EmailTo = "alex.konstantinov@gmail.com";
$Subject = "Обращение с контакт-формы сайта [exubit.ru]";
$Name = Trim(stripslashes($_POST['name']));
$Email = Trim(stripslashes($_POST['email']));
$Message = Trim(stripslashes($_POST['message']));

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=index.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>