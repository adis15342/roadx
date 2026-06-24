<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// 1. Load PHPMailer manually (if Composer fails)
// require 'PHPMailer/src/Exception.php';
// require 'PHPMailer/src/PHPMailer.php';
// require 'PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// 2. Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

// 3. Configure PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings (Gmail SMTP)
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'adis15342@gmail.com'; // Your Gmail
    $mail->Password   = 'jjrnjmmzvqqhnhkj';   // App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Sender & Recipient
    $mail->setFrom('adis15342@gmail.com', 'Contact Form');
    $mail->addAddress('gargy5703@gmail.com'); // Your receiving email
    $mail->addReplyTo($email, $name); // Reply to submitter

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "New Contact: $subject";
    $mail->Body    = "
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> $name</p>
        <p><b>Email:</b> $email</p>
        <p><b>Phone:</b> $phone</p>
        <p><b>Message:</b><br>$message</p>
    ";

    $mail->send();
    header('Location: thank_you.html'); // Redirect after success
    exit();
} catch (Exception $e) {
    echo "Error: Message not sent. Mailer Error: {$mail->ErrorInfo}";
}
?>