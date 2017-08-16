<?php
function task1()
{
    /*    header("Content-Type: text/xml");
        $xml_res = simplexml_load_file('data.xml');
        $xml_res = simplexml_load_string($xml_res);
        //echo '<pre>';
        print_r($xml_res);
        //echo '</pre>';*/

    $handle = fopen('data.xml', "r");
    $contents = fread($handle, filesize('data.xml'));
    echo $contents;
    fclose($handle);
}

function task2()
{
    $array = [
        'ps4' => [
            'Killzone:' => 'В плену сумрака ',
            'inFAMOUS:' => 'Второй сын',
            'The Order:' => 1886,
            'Uncharted 4:' => 'Путь вора'
        ],

        'xbox one' => [
            'Forza' => 'Motorsport 5',
            'Forza:' => 'Horizon 2',
            'Dead Rising' => 3,
            'Halo:' => ' The Master Chief Collection'
        ]
    ];
    /*
     * Преобразую в JSON формат и записываю массив в файл
     * ========================================================================*/
    $jsonString = json_encode($array);
    file_put_contents('output.json', $jsonString);
    /*
     * Открываю output.json добавляю элемент в массив сохраняю как output2.json
     * ========================================================================*/
    echo "<br> <b style='color:darkred;'>";
    $rand = rand(0, 1);
    echo 'Если здесь ноль значит одни файл содержит больше данных. Если же 1 то по длинне одинаковые массивы но значение элементов разное : ' . $rand;
    echo "</b> <br>";

    if ($rand == 0) { // Здесь добавляю во второй файл еще один элемент, выведет сообщение что один массив больше другва
        $jsonPath = './output.json';
        $jsonFile = file_get_contents($jsonPath);
        $jsonArray = json_decode($jsonFile, true);
        $arrayPlus = [
            'Xenoblade' => 'Chronicles 2',
            'Bomberman' => 'R',
            'Splatoon' => '2'
        ];
        $jsonArray['Nintendo Switch'] = $arrayPlus;
        $jsonString1 = json_encode($jsonArray);
        file_put_contents('output2.json', $jsonString1);
    } elseif ($rand == 1) { // Здесь по длине делаю одинаковые файлы, но в одном немного другое значение элемента
        $jsonPath = './output.json';
        $jsonFile = file_get_contents($jsonPath);
        $jsonArray = json_decode($jsonFile, true);
        $arrayPlus = [
            'Xenoblade' => 'Chronicles 2',
            'Bomberman' => 'R',
            'Splatoon' => '55'
        ];
        $jsonArray['Nintendo Switch'] = $arrayPlus;
        $jsonString1 = json_encode($jsonArray);
        file_put_contents('output.json', $jsonString1);
    }

    /*
     * Открываю оба файла, сравниваю содержимое
     * ========================================================================*/
    $jsonPath1 = './output.json';
    $jsonPath2 = './output2.json';
    $jsonFile1 = file_get_contents($jsonPath1);
    $jsonFile2 = file_get_contents($jsonPath2);
    $jsonArray1 = json_decode($jsonFile1, true);
    $jsonArray2 = json_decode($jsonFile2, true);

    if (count($jsonArray1) > count($jsonArray2)) {
        echo 'Первый массив больше второго <br>';
    } elseif (count($jsonArray2) > count($jsonArray1)) {
        echo 'Второй массив больше первого <br>';
    } elseif (count($jsonArray1) === count($jsonArray2)) {
        echo rec($jsonArray1, $jsonArray2);
    }
}

function rec($jsonArray1, $jsonArray2)
{
    foreach ($jsonArray1 as $key => $value) {
        if (is_array($jsonArray1[$key]) && is_array($jsonArray1[$key])) {
            rec($jsonArray1[$key], $jsonArray2[$key]);
        }
        if ($jsonArray1[$key] != $jsonArray2[$key] && $jsonArray1[$key] !== "Array" && $jsonArray2[$key] !== "Array") {
            echo 'Различные элементы массива 1 : ' . $key . ' => ' . $jsonArray1[$key] . '<br>';
            echo 'Различные элементы массива 2 : ' . $key . ' => ' . $jsonArray2[$key] . '<br>';
        }
    }
}

function task3()
{
    $arr = [];
    for ($i = 0; $i < 61; $i++) {
        $arr[$i] = $i;
    }

    $fpw = fopen('file.csv', 'w');
    fputcsv($fpw, $arr);
    fclose($fpw);

    $fpr = fopen('file.csv', 'r');
    $res = fgetcsv($fpr, 100, ',');

    $sum = 0;
    foreach ($res as $key => $value) {
        if ($value % 2 == 0) {
            $sum += $value;
        }
    }
    echo $sum;
    fclose($fpr);
}

function task4()
{
    $url = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json";
    $curl = curl_init(); // Инициализирует сеанс cURL

    // Устанавливает параметр для сеанса CURL
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl); //  Выполняет запрос cURL
    curl_close($curl); // Завершает сеанс cURL

    $result1 = json_decode($result, true);

    /*    echo "<pre>"; // Расскоментируй что бы посмотреть данные JSON файла
        print_r($result1);
        echo "</pre>";
        echo "<hr>";*/

    echo "page_id : " . $result1['query']['pages']['15580374']['pageid'] . "<br>";
    echo "title : " . $result1['query']['pages']['15580374']['title'] . "<br>";
    //recur($result1);
}
