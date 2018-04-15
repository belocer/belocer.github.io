<?php
/***********/
$name 			= 	$_GET["name"];
$email 			= 	$_GET["email"];
$numberPhone 	=	$_GET["numberPhone"];
$whatever 		=	$_GET["whatever"];
/***********/
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'belocerkovecden@mail.ru';                 // SMTP username мой ящик с которого я отправляю письмо
$mail->Password = 'ToTo220807!';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('belocerkovecden@mail.ru', 'Денис'); // от кого
$mail->addAddress('belocerkovecden1@ya.ru', 'Привет Денис');     // Add a recipient КУДА
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ на сайте'; /*тема письма*/
$mail->Body    = 'Это тело сообщения дальше жирное <b>блаблабла</b>';
$mail->AltBody = 'Это сообщение в формате plain text';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
	// либо редирект echo 'Спасибо за заявку.' . $name; 
	header('Location: index.html');   
}
?>