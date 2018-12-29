<?php

$vorname = $_POST['vorname'];
$nachname = $_POST['nachname'];
$email = $_POST['email'];
$webadresseemail = $_POST['webadresse'];
$telefon = $_POST['telefon'];
$kommentare = "Vorname: " . $vorname . "\n" . "Nachname: " . $nachname . "\n" .
                "Webadresse: " . $webadresseemail . "\n" . "Telefonnummer: " . $telefon . "\n\n\n" .
                $_POST['kommentare'];
$sumbmit = $_POST['abschicken'];
$to = 'damirmarkovic13@yahoo.com';
$headers = "From: $email";

$mail = mail($to, "recentdesigns anfrage", $kommentare, $headers);

if(!$sumbmit){
    echo 'pls send an email';
}
else{
    $mail;

}

?>