function salvarmsg(){
   var ajax = new XMLHttpRequest(); 
   var dados ={};
      dados.nome = document.getElementById("nome").value;
      dados.idade = document.getElementById("idade").value;
      dados.mensagem = document.getElementById("mensagem").value;
      var enviar = JSON.stringify(dados);
      ajax.open("GET","SalvarDados.php?dados="+ enviar , true);
      ajax.send(null);
      ajax.onreadystatechange = function(){
       if (ajax.readyState==4 ) {
            console.log('conexão suce');
           if ( ajax.status==200) {
           
            var d=  ajax.response;
             console.log(d);
            console.log("deu certo");   
           }else{console.log("deu erredo");}
            
        }else{console.log("conexão deu erredo");}}   
     }
     function peganumero(nume){
         return nume;
     }
     var numeroglobal ;

     window.onload=function consultar(){
         var ajax = new XMLHttpRequest();
         var tamanho = 0;
          ajax.open("GET","Consulta.php?tamanho="+tamanho);
                ajax.send();
               ajax.responseType="json";
           ajax.onreadystatechange = function(){
            if (ajax.readyState==4 ) {
                console.log('conexão suce');
               if ( ajax.status==200) {
                
                var s;
               s= ajax.response;
               
               var c={}
               c=s
                 numeroglobal=c.length;
                var i =0;
             while(i < c.length){
           
             document.getElementById("Lista").innerHTML+="<li><h4>"+c[i].nome+"</h4>"+c[i].mensagem+"</li>";
            i++;
             document.getElementById("number").innerHTML=c.length;
               }}
                
               else{console.log("deu erredo");}
                
            }else{console.log("conexão deu erredo");}
    
         }
       
     }
     function ConsultarNewMsg(){
      
      var tamanho =numeroglobal;
     
      var ajax = new XMLHttpRequest();
      ajax.open("GET","Consulta.php?tamanho="+tamanho);
       ajax.send();
       ajax.responseType="json";
       ajax.onreadystatechange = function(){
        if (ajax.readyState==4 ) {
            console.log('conexão suce');
           if ( ajax.status==200) {
            
            var s;
            s= ajax.response;
             var c={};
            c=s;
            var tat =numeroglobal-c.length;
            console.log(tamanho);
            console.log(c.length);
            console.log(tat);
            var i=0;
            if  (c.length==1){
               document.getElementById("men").innerText="sem mensagens novas";
            }else{
               while(i < c.length){
             document.getElementById("Lista").innerHTML+="<li><h4>"+c.nome+"</h4>"+c[i].mensagem+"</li>" ;
            // alert (tat);
               i++;
              
           }numeroglobal=c.length;}}
             //console.log("deu certo");   
           else{console.log("deu erredo");}
            
        }else{console.log("conexão deu erredo");}

     }
     }

            function comunicar(){
        alert("As mensagens aparecem aqui");

            }
     
     setInterval(function(){ConsultarNewMsg();},10000)


