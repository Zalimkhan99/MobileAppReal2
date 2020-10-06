<?php  header("Content-Type: application/json"); 
$postData = json_decode(file_get_contents("php://input")); 
$filename = 'data1.json';

if (file_exists($filename)) { 
    $file = file_get_contents('data1.json'); 
} else { $file = fopen("data1.json", "a+"); }
$taskList = json_decode($file, true);
echo "Сервер получил следующие данные: имя — $postData->name, Пароль — $postData->password";
$taskList[] = array($postData);
file_put_contents('data1.json', json_encode($taskList,JSON_UNESCAPED_UNICODE));
$file = file_get_contents('data1.json');
//echo $file;

unset($file);
unset($taskList);
?>