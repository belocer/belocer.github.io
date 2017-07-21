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
                $res = $res + $int_arr[$i];
            }
            return $res;
            break;
        case "-":
            for ($i = 0; $i < count($int_arr); $i++) {
                $res = $res - $int_arr[$i];
            }
            return $res;
            break;
        case "*":
            for ($i = 0; $i < count($int_arr); $i++) {
                if ($res != '') {
                    $res = $res * $int_arr[$i];
                } elseif ($res == '') {
                    $res = $int_arr[$i];
                }
            }
            return $res;
            break;
        case "/":
            for ($i = 0; $i < count($int_arr); $i++) {
                if ($res != '') {
                    $res = $res / $int_arr[$i];
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
                    $res = $res + $arg_arr[$i];
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
                    $res = $res - $arg_arr[$i];
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
                    $res = $res * $arg_arr[$i];
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
                if ($res != '') {
                    $res = $res / $arg_arr[$i];
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
function task5($str)
{
    $str = mb_strtolower($str);
    $str = str_replace(" ", "", $str);

    function utf8_strrev($str) // нашёл на php.net сам бы явно не додумался
    {
        preg_match_all('/./us', $str, $ar);
        return join('', array_reverse($ar[0]));
    }

    $str_reverse = utf8_strrev($str);

    for ($i = 0; $i < count($str); $i++) {
        if ($str[$i] != $str_reverse[$i]) {
            task5_1(false);
            return false;
        }
    }
    task5_1(true);
    return true;
}


function task5_1($bool)
{
    if ($bool == true) {
        echo 'Строка является палиндромом';
    } elseif ($bool == false) {
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