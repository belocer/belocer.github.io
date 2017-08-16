<?php
// очищаю данные от пользователя
$login = clean($_POST['login']);
$password = clean($_POST['password']);
$password_2 = clean($_POST['password_2']);

// Проверяю заполненность полей, если косяк, - редирект обратно на reg.php
if (count($login) < 6 || count($login) > 16) {
    header('Location: ../reg.php');
}
if (count($password) < 6 || count($password) > 16) {
    header('Location: ../reg.php');
}
if (count($password_2) < 6 || count($password_2) > 16) {
    header('Location: ../reg.php');
}
if ($password !==  $password_2) {
    header('Location: ../reg.php');
}

/* Запись в БД
 ============================================================*/
// Подключаюсь к БД
$connection = mysqli_connect('localhost', 'root', '', 'beloc_hw4', 3306);

if (!$connection) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки error: " . mysqli_connect_error() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

// Поиск в БД на совпадение Логина
$search_users = "SELECT login FROM users WHERE login = '$login'";
$res_users = mysqli_query($connection, $search_users) or die('Ошибка поиска записи: ' . mysqli_error($connection));
$res = mysqli_fetch_assoc($res_users);

if (!$res) {
    // Установка кодировки
    mysqli_query($connection, 'SET NAMES "UTF-8"');

    // Готовлю пароль для записи в БД
    $hashed_password = crypt($password, 'hw4'); // соль hw4

    // Пишу в БД
    $insert = "INSERT INTO users (login, password) VALUES ('$login', '$hashed_password')";
    mysqli_query($connection, $insert) or die('Ошибка запроса записи в БД логин и пароль : ' . mysqli_error($connection));

} elseif ($res) { // Этот хитрец прорвал оборону, - логин занят! редирект обратно
    echo "Какого чёрта чувак?";
    header('Location: ../reg.php');
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