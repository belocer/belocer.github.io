<?php
if (!$_SESSION['auth']) {

    if ($_COOKIE['token']) {
        $str = explode('_', $_COOKIE['token']);
    } elseif ($_SESSION['token']) {
        $str = explode('_', $_SESSION['token']);
    }

    /* Поиск логина на совпадение
    =========================================================*/
    $login = clean($str[0]);
    $password_user = clean($str[1]);

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
    $search_users = "SELECT password FROM users WHERE login = '$login'";
    $res_users = mysqli_query($connection, $search_users) or die('Ошибка поиска записи: ' . mysqli_error($connection));
    $res = mysqli_fetch_assoc($res_users);

    if (md5($res['password']) === $password_user) {
        $_SESSION['auth'] = 1;
    } else {
        $_SESSION['auth'] = 0;
        // если нет такого пользователя тогда редирект на авторизацию
        header('Refresh:3; url=index.php');
    }
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