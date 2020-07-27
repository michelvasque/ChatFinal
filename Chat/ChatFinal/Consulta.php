<?php
 //function Pega(){
    include './connection.php';

$tamanho=$_GET["tamanho"];

$con = getconnection();
$sql='SELECT * FROM pessoa';
$stmt = $con->query($sql);
$resultado=[];
$f=0;
while ($r = $stmt->fetch(PDO::FETCH_ASSOC)){
  
 // echo $r["nome"];
      $f=$f+1;
     
     }
    // echo $f;
 if ($tamanho != $f) {
  $sqli='SELECT * FROM pessoa';
  $stmti = $con->query($sql);
 // echo $f;  
//if ($stmt!==false) {
$i=0;
  while ($row = $stmti->fetch(PDO::FETCH_ASSOC)){
    // $i=count($row);
      $resultado[$i]=$row;
  // echo"<br><h4>" .$row["nome"]."</h4><br>";
  //  echo"<h5>" .$row["mensagem"]."</h5>";
   //  $i=count($row);
     
      $i++;
    //echo $resultado['nome'].':';
    //echo $resultado['idade'].':';
    // echo $resultado['mensagem'].':---:'; 
    //echo json_encode($row);  
  }
  
   $json=json_encode($resultado);
   echo $json;
 // $f=count($stmt);
  //$i=$f; // return $resultado;
 
 //echo $json;
//  echo $resultado["nome"] ":", $resultado["mensagem"] ;
   
 // }else {
  //echo  'Não há mensagens';
    
 }else{
   $json=json_encode("1");
  echo $json;
   
    }
   
          


?>