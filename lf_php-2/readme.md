Домашнее задание №2

Задание выполняется в двух файлах. Файл functions.php содержит все 10 функций. Функции именуются task1, task2, task3, с маленькой буквы, слитно. Файл с именем index.php содержит require(‘functions.php’); и вызов всех функций.

Задание #1
Функция должна принимать массив строк и выводить каждую строку в отдельном параграфе (тег <p>)
Если в функцию передан второй параметр true, то возвращать (через return) результат в виде одной объединенной строки.

Задание #2

Функция должна принимать 2 параметра:
массив чисел;
строку, обозначающую арифметическое действие,    которое нужно выполнить со всеми элементами массива.
Функция должна вывести результат на экран.
Функция должна обрабатывать любой ввод, в том числе некорректный и выдавать сообщения об этом

Задание #3

Функция должна принимать переменное число аргументов.
Первым аргументом обязательно должна быть строка, обозначающая арифметическое действие, которое необходимо выполнить со всеми передаваемыми аргументами.
Остальные аргументы это целые и/или вещественные числа.

Пример вызова: calcEverything(‘+’, 1, 2, 3, 5.2);
Результат: 1 + 2 + 3 + 5.2 = 11.2

Задание #4

Функция должна принимать два параметра – целые числа. 
Если в функцию передали 2 целых числа, то функция должна отобразить таблицу умножения размером со значения параметров, переданных в функцию. (Например если передано 8 и 8, то нарисовать от 1х1 до 8х8). Таблица должна быть выполнена с использованием тега <table>
 В остальных случаях выдавать корректную ошибку.

Задание #5

Написать две функции.
Функция №1 принимает 1 строковый параметр и возвращает true, если строка является палиндромом*, false в противном случае. Пробелы и регистр не должны учитываться.
Функция №2 выводит сообщение в котором на русском языке оговаривается результат из функции №1

* Палиндром – строка, одинаково читающаяся в обоих направлениях.
Задание #6 (выполняется после вебинара “ВСТРОЕННЫЕ ВОЗМОЖНОСТИ ЯЗЫКА”)

Выведите информацию о текущей дате в формате 31.12.2016 23:59
Выведите unixtime время соответствующее 24.02.2016 00:00:00.


Задание #7 (выполняется после вебинара “ВСТРОЕННЫЕ ВОЗМОЖНОСТИ ЯЗЫКА”)
Дана строка: “Карл у Клары украл Кораллы”. удалить из этой строки все заглавные буквы “К”.
Дана строка “Две бутылки лимонада”. Заменить “Две”, на “Три”. По желанию дополнить задание.

Задание #8 (выполняется после вебинара “ВСТРОЕННЫЕ ВОЗМОЖНОСТИ ЯЗЫКА”)
Напишите функцию, которая с помощью регулярных выражений, получит информацию о переданных RX пакетах из переданной строки:
Пример строки: “RX packets:950381 errors:0 dropped:0 overruns:0 frame:0. “
Если кол-во пакетов более 1000, то выдавать сообщение: “Сеть есть”
Если в переданной в функцию строке есть “:)”, то нарисовать смайл в ASCII и не выдавать сообщение из пункта №3. Смайл должен храниться в отдельной функции

Задание #9 (выполняется после вебинара “ВСТРОЕННЫЕ ВОЗМОЖНОСТИ ЯЗЫКА”)

Создайте средствами ОС файл test.txt и поместите в него текст “Hello, world” 
Напишите функцию, которая будет принимать имя файла, открывать файл и выводить содержимое на экран.

Задание #10 (выполняется после вебинара “ВСТРОЕННЫЕ ВОЗМОЖНОСТИ ЯЗЫКА”)

Создайте файл anothertest.txt средствами PHP. Поместите в него текст - “Hello again!”


РЕШЕНИЕ:
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            -webkit-transition: all .3s;
            transition: all .3s;
            background: url(http://subtlepatterns.com/patterns/subtlenet2.png);
            font-weight: 400;
            font: 16px 'PT Sans', Tahoma, Arial;
            text-decoration: none;
        }
    </style>
</head>
<body>
<?php
require('functions.php');
//1
$arr = ['Привет', 'школа', 'LoftSchool'];
echo task1($arr, true);
echo '<hr>';
//2
$int = [1, 2, 3, 4];
echo task2($int, "/"); // + - * /
echo '<hr>';
//3
echo task3("/", 1, 2, 3, 4); // + - * /
echo '<hr>';
//4
echo task4(7, 7);
echo '<hr>';
//5
task5_1('Аргентина манит негра'); // Аргентина манит негра
echo '<hr>';
//6
task6();
echo '<hr>';
//7
task7('Карл у Клары украл Кораллы', 'Две бутылки лимонада');
echo '<hr>';
//8
task8('RX packets:950381  :) errors:0 dropped:0 overruns:0 frame:0');
echo '<hr>';
//9
task9('test.txt');
echo '<hr>';
//10
task10('anothertest.txt');
echo '<hr>';
?>
</body>
</html>


functions.php
<?php
/**
 * Created by PhpStorm.
 * User: beloc
 * Date: 19.07.2017
 * Time: 16:08
 */
//////////////////////////////////////////////1
function task1($arr, $bool = false)
{
    if ($bool && count($arr) > 0) {
        $str = " ";
        for ($i = 0; $i < count($arr); ++$i) {
            $str = $str . $arr[$i] . ' ';
        }
        return $str;
    } elseif (!$bool) {
        for ($j = 0; $j < count($arr); $j++) {
            echo '<p>' . $arr[$j] . '</p>';
        }
    }
}
//////////////////////////////////////////////2
function task2($int_arr, $operator)
{
    $res = '';
    for ($s = 0; $s < count($int_arr); $s++) {
        if (!is_int($int_arr[$s])) {
            echo '<h1 style="color:darkred;">ВНИМАНИЕ!</h1><br> Задание 2,- в массиве не число!';
            exit;
        }
    }
    switch ($operator) {
        case "+":
            for ($i = 0; $i < count($int_arr); $i++) {
                $res += $int_arr[$i];
            }
            return $res;
            break;
        case "-":
            for ($i = 0; $i < count($int_arr); $i++) {
                $res -= $int_arr[$i];
            }
            return $res;
            break;
        case "*":
            for ($i = 0; $i < count($int_arr); $i++) {
                if ($res != '') {
                    $res *= $int_arr[$i];
                } elseif ($res == '') {
                    $res = $int_arr[$i];
                }
            }
            return $res;
            break;
        case "/":
            for ($i = 0; $i < count($int_arr); $i++) {
                if ($int_arr[$i] == 0) {
                    echo 'На нуль делить нельзя';
                    exit;
                }
                if ($res != '') {
                    $res /= $int_arr[$i];
                } elseif ($res == '') {
                    $res = $int_arr[$i];
                }
            }
            return $res;
            break;
        default:
            echo "Неизвестные данные";
    }
}
//////////////////////////////////////////////3
function task3()
{
    $arg_arr = func_get_args();
    $operator = array_shift($arg_arr);
    $view_res = '';
    $res = '';
    switch ($operator) {
        case "+":
            for ($i = 0; $i < count($arg_arr); $i++) {
                if ($res != '') {
                    $res += $arg_arr[$i];
                } elseif ($res == '') {
                    $res = $arg_arr[$i];
                };
                if ($view_res != '') {
                    $view_res = "$view_res $operator $arg_arr[$i]";
                } elseif ($view_res == '') {
                    $view_res = $arg_arr[$i];
                };
            }
            return $view_res . ' = ' . $res;
            break;
        case "-":
            for ($i = 0; $i < count($arg_arr); $i++) {
                if ($res != '') {
                    $res -= $arg_arr[$i];
                } elseif ($res == '') {
                    $res = $arg_arr[$i];
                };
                if ($view_res != '') {
                    $view_res = "$view_res $operator $arg_arr[$i]";
                } elseif ($view_res == '') {
                    $view_res = $arg_arr[$i];
                };
            }
            return $view_res . ' = ' . $res;
            break;
        case "*":
            for ($i = 0; $i < count($arg_arr); $i++) {
                if ($res != '') {
                    $res *= $arg_arr[$i];
                } elseif ($res == '') {
                    $res = $arg_arr[$i];
                };
                if ($view_res != '') {
                    $view_res = "$view_res $operator $arg_arr[$i]";
                } elseif ($view_res == '') {
                    $view_res = $arg_arr[$i];
                };
            }
            return $view_res . ' = ' . $res;
            break;
        case "/":
            for ($i = 0; $i < count($arg_arr); $i++) {
                if ($arg_arr[$i] == 0) {
                    echo 'На нуль делить нельзя';
                    exit;
                }
                if ($res != '') {
                    $res /= $arg_arr[$i];
                } elseif ($res == '') {
                    $res = $arg_arr[$i];
                };
                if ($view_res != '') {
                    $view_res = "$view_res $operator $arg_arr[$i]";
                } elseif ($view_res == '') {
                    $view_res = $arg_arr[$i];
                };
            }
            return $view_res . ' = ' . $res;
            break;
        default:
            echo "Неизвестные данные";
    }
}
//////////////////////////////////////////////4
function task4()
{
    $arg_arr = func_get_args();
    for ($s = 0; $s < count($arg_arr); $s++) {
        if (!is_int($arg_arr[$s])) {
            echo '<h1 style="color:darkred;">ВНИМАНИЕ!</h1> <br> Задание 4,- в переданных аргументах не число!';
            exit;
        }
    }
    echo '<table style="border: 1px solid #777;">';
    for ($x = 1; $x < $arg_arr[0] + 1; $x++) {
        echo '<tr>';
        for ($y = 1; $y < $arg_arr[1] + 1; $y++) {
            $a = $x * $y;
            echo '<td style="border:1px solid #777;min-width:25px;text-align:center;">' . $a . '</td>';
        };
        echo '</tr>';
    };
    echo '</table>';
}
//////////////////////////////////////////////5
function utf8_strrev($str) // нашёл на php.net сам бы явно не додумался
{
    preg_match_all('/./us', $str, $ar);
    return join('', array_reverse($ar[0]));
}
function task5($str)
{
    $str = mb_strtolower($str);
    $str = str_replace(" ", "", $str);
    $str_reverse = utf8_strrev($str);
    if ($str != $str_reverse) {
        return false;
    }
    return true;
}
function task5_1($str)
{
    if (task5($str) == true) {
        echo 'Строка является палиндромом';
    } elseif (task5($str) == false) {
        echo 'Строка НЕ является палиндромом';
    } else {
        echo 'Переданные аргумент не строка';
    }
}
//////////////////////////////////////////////6
function task6()
{
    echo date('d.m.Y H:m');
    echo '<br>';
    $date = date_create('24.02.2016 00:00:00');
    echo date_timestamp_get($date);
}
//////////////////////////////////////////////7
function task7($str, $str2)
{
    echo str_replace('К', '', $str);
    echo '<br>';
    echo str_replace('Две', 'Три', $str2);
}
//////////////////////////////////////////////8
function smile()
{
    $smile = '<pre>
                          oooo$$$$$$$$$$$$oooo
                      oo$$$$$$$$$$$$$$$$$$$$$$$$o
                   oo$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$o         o$   $$ o$
   o $ oo        o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$o       $$ $$ $$o$
oo $ $ "$      o$$$$$$$$$    $$$$$$$$$$$$$    $$$$$$$$$o       $$$o$$o$
"$$$$$$o$     o$$$$$$$$$      $$$$$$$$$$$      $$$$$$$$$$o    $$$$$$$$
$$$$$$$    $$$$$$$$$$$      $$$$$$$$$$$      $$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$    $$$$$$$$$$$$$    $$$$$$$$$$$$$$  """$$$
   "$$$""""$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     "$$$
    $$$   o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     "$$$o
   o$$"   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$       $$$o
   $$$    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" "$$$$$$ooooo$$$$o
  o$$$oooo$$$$$  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   o$$$$$$$$$$$$$$$$$
  $$$$$$$$"$$$$   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     $$$$""""""""
 """"       $$$$    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$"      o$$$
            "$$$o     """$$$$$$$$$$$$$$$$$$"$$"         $$$
              $$$o          "$$""$$$$$$""""           o$$$
               $$$$o                                o$$$"
                "$$$$o      o$$$$$$o"$$$$o        o$$$$
                  "$$$$$oo     ""$$$$o$$$$$o   o$$$$""
                     ""$$$$$oooo  "$$$o$$$$$$$$$"""
                        ""$$$$$$$oo $$$$$$$$$$
                                """"$$$$$$$$$$$
                                    $$$$$$$$$$$$
                                     $$$$$$$$$$"
                                      "$$$""""
    </pre>';
    echo $smile;
}
function task8($str)
{
    $res = preg_match('|packets:[0-9]*|', $str, $matches);
    $data_int = str_replace('packets:', '', $matches[0]);
    $smile = preg_match('|:\)|', $str);
    if ($smile == 1) {
        smile();
    } elseif ($data_int > 1000) {
        echo 'Сеть есть';
    }
}
//////////////////////////////////////////////9
function task9($file)
{
    if (file_exists($file) && is_readable($file)) {
        $handle = fopen($file, "r");
        $contents = fread($handle, filesize($file));
        echo $contents;
        fclose($handle);
    }
}
//////////////////////////////////////////////10
function task10($file)
{
    $handle = fopen($file, "w");
    fwrite($handle, 'Hello again!');
    if (file_exists($file)) {
        echo 'Файл создан.<br>';
    }
    if (is_readable($file)) {
        echo 'Файл читаем.<br>';
    }
    $handle = fopen($file, "r");
    $contents = fread($handle, filesize($file));
    echo 'Содержимое файла: ' . $contents;
    fclose($handle);
}
//////////////////////////////////////////////5
//function task5($str)
//{
//    $str = mb_strtolower($str);
//    $str = str_replace(" ", "", $str);
//
//    function utf8_strrev($str) // нашёл на php.net сам бы явно не додумался
//    {
//        preg_match_all('/./us', $str, $ar);
//        return join('', array_reverse($ar[0]));
//    }
//
//    $str_reverse = utf8_strrev($str);
//
//    for ($i = 0; $i < count($str); $i++) {
//        if ($str[$i] != $str_reverse[$i]) {
//            task5_1(false);
//            return false;
//        }
//    }
//    task5_1(true);
//    return true;
//}
//
//
//function task5_1($bool)
//{
//    if ($bool == true) {
//        echo 'Строка является палиндромом';
//    } elseif ($bool == false) {
//        echo 'Строка НЕ является палиндромом';
//    } else {
//        echo 'Переданные аргумент не строка';
//    }
//}