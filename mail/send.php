<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'smtp.auth.php';

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$sent = false;

if(!empty($_POST) 
    && isset($_POST['name']) 
    && isset($_POST['identification'])
    && isset($_POST['location'])
    && isset($_POST['isapre'])
    && isset($_POST['phone'])
    && isset($_POST['email'])
    //&& isset($_GET['message'])
    && isset($_FILES['letter'])
    ){
        // Information from email
        $name = substr(strip_tags($_POST['name']), 0, 16384);
        $identification = substr(strip_tags($_POST['identification']), 0, 16384);
        $location = substr(strip_tags($_POST['location']), 0, 16384);
        $isapre = substr(strip_tags($_POST['isapre']), 0, 16384);
        $phone = substr(strip_tags($_POST['phone']), 0, 16384);
        $email = substr(strip_tags($_POST['email']), 0, 16384);
        $message = substr(strip_tags($_POST['message']), 0, 16384);

        $mail = new PHPMailer();
      
        // SMTP setup
        $mail->isSMTP();
        $mail->Host = HOST;
        $mail->Username = USERNAME;
        $mail->Password = PASSWORD;                               
        $mail->Port = PORT;
        
        // Email
        $mail->CharSet = "UTF-8";         
        $mail->setFrom(USERNAME, 'Service');
        $mail->addAddress(DESTINATION, DESTINATION);

        $mail->Subject = "Petición de $nombre";
        
        $mail->Body = "Petición\n".
        "Nombre: $name\n".
        "Cédula de identidad: $identification\n".
        "Domicilio y comuna: $location\n".
        "Isapre: $isapre\n".
        "Teléfono: $phone\n".
        "Correo: $email\n".
        "Mensaje: $message\n";

        //Letter attachment
        $mail->AddAttachment($_FILES['letter']['tmp_name'], $_FILES['letter']['name']);
        
        if($mail->send()){
            $sent = true;
        }
}

header("Location: https://paremoselalzaisapre.cl/contacto?success=" .( $sent ? "true": "false"));
die();

?>