<?php

#Receive user input
$user_name = $_POST['name'];
$email_address = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

#Filter user input
function filter_field($form_field) {  
    return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
}

$email_address  = filter_field($email_address);
$subject = filter_field($subject);
$email_body = 'From ' . $user_name . '\r\n' . $message;


#Send email
$headers = "From: $email_address";
$sent = mail('hyperactiveartnerd@gmail.com', empty($subject)? 'Inquiry for Consultation':$subject, $email_body, $headers);

#Thank user or notify them of a problem
if ($sent) {

?><html>
<head>
<title>Thank You</title>
</head>
<body>
<h1>Thank You</h1>
<p>Thank you for your feedback.</p>
</body>
</html>
<?php

} else {

?><html>
<head>
<title>Something went wrong</title>
</head>
<body>
<h1>Something went wrong</h1>
<p>We could not send your feedback. Please try again.</p>
</body>
</html>
<?php
}
?>