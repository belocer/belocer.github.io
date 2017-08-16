<?php
/* Поиск логина на совпадение
=========================================================*/
$login = clean($_POST['login']);

// Подключаюсь к БД
$connection = mysqli_connect('localhost', 'root', '', 'beloc_hw4', 3306);

if (!$connection) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки error: " . mysqli_connect_error() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

// Установка кодировки
mysqli_query($connection, 'SET NAMES "UTF-8"');

// Поиск в БД на совпадение Логина
$search_users = "SELECT login FROM users WHERE login = '$login'";
$res_users = mysqli_query($connection, $search_users) or die('Ошибка поиска записи: ' . mysqli_error($connection));
$res = mysqli_fetch_assoc($res_users);

if (!$res) {
    echo "<span style='color:green'>Логин свободен</span>";
} elseif ($res) {
    echo "<span style='color:red'>Логин занят</span>";
}

/* Очищающая функция
============================================================*/
function clean($value = '')
{
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);

    return $value;
}