<?php
include './connection.php';
$con=getconnection();
if (isset($_GET['dados'])) {
    $dados=$_GET['dados'];
    //$file = file_get_contents($dados); 
    $usuario= json_decode($dados);
   var_dump($dados);
    
    //$idade=$_GET['idade'];
    //$mensagem=$_GET['mensagem'];
   echo('chegou');
   echo("$usuario->nome");
    
    $sql ='INSERT INTO pessoa (nome,idade,mensagem) VALUES (?,?,?)';
    $stmt=$con->prepare($sql);
   $stmt->bindValue(1,$usuario->nome);
   $stmt->bindValue(2,$usuario->idade);
   $stmt->bindValue(3,$usuario->mensagem);
    
    if ($stmt->execute()) {
      echo 'Salvo com suce';  
   } else{echo 'erro no stmt ';}
    
}else{ echo'erro';}

?>