<?php
require('functions.php');
//1
$arr = ['Привет', 'школа', 'LoftSchool'];
echo task1($arr, true);
echo '<hr>';

//2
$int = [125, 2, 3, 4];
echo task2($int, "+"); // + - * /
echo '<hr>';

//3
echo task3("*", 100, 2, 3, 4); // + - * /
echo '<hr>';

//4
echo task4(4, 4);
echo '<hr>';

//5
task5('Ка за к'); // Аргентина манит негра
echo '<hr>';

//6
task6();
echo '<hr>';

//7
task7('Карл у Клары украл Кораллы', 'Две бутылки лимонада');
echo '<hr>';

//8
task8('RX packets:950381 :) errors:0 dropped:0 overruns:0 frame:0');
echo '<hr>';

//9
task9('test.txt');
echo '<hr>';

//10
task10('anothertest.txt');
echo '<hr>';