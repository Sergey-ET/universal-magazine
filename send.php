<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$theme = $_POST['theme'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = 'Новая заявка с сайта Universal Magazine';
$body = "
<h2>Новая Заявка</h2>
<b>Тема:</b> $theme<br>
<b>Email:</b> $email<br><br>
<b>Сообщение:</b><br>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->SMTPAuth = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host = 'smtp.outlook.com'; // SMTP сервера вашей почты
    $mail->Username = 'therealdeveloper@outlook.com'; // Логин на почте
    $mail->Password = 'NA'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('therealdeveloper@outlook.com', 'The Real Developer'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('therealdeveloper@outlook.com');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отправленность сообщения
    if ($mail->send()) {
        $result = 'success';
    } else {
        $result = 'error';
    }
} catch (Exception $e) {
    $result = 'error';
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
