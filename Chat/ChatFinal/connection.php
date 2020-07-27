<?php

 function getconnection(){
    $dns="mysql:host=localhost;dbname=chat";
$username="root";
$senha="";
    try {
        $pdo = new PDO($dns,$username,$senha);
      return $pdo;
    } catch (\Throwable $th) {
        echo "Erro :" .$th;
    }


 }

?>