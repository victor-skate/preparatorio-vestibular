$(document).ready(function(){
    $(".nav-link.pergunt").click(function(){
        $(".texto").hide();
        $(".introdução").text("perguntas");
        $(".perguntas").slideDown("slow");
    
        
        var numero=0;
    $(".resposta1").click(function(){
        
        //comandos para alterar o comportamento da 1º linha das colunas da pagina inicial
        if(numero==0){
        $(".resp1").slideDown("slow");
        $(".resposta1").text("ocultar resposta");
        numero=1;    
        
        }else{
            $(".resp1").slideUp("slow")
            $(".resposta1").text("ver resposta");
            numero=0;
        }
    })

//Comandos para ocultar ou mostrar a resposta da questão 2
    $(".resposta2").click(function(){
        
        if(numero==0){
        $(".resp2").slideDown("slow");
        $(".resposta2").text("ocultar resposta");
        numero=1;    
        
        }else{
            $(".resp2").slideUp("slow")
            $(".resposta2").text("ver resposta");
            numero=0;
        }
    })
  
 //comandos para ocultar ou mostrar a resposta da questão 3   
    $(".resposta3").click(function(){
        
        if(numero==0){
        $(".resp3").slideDown("slow");
        $(".resposta3").text("ocultar resposta");
        numero=1;    
        
        }else{
            $(".resp3").slideUp("slow")
            $(".resposta3").text("ver resposta");
            numero=0;
        }
    })


    // comandos para alterar o comportamento da 2º linha das colunas da pagina inicial
    var num=0;
    $(".respos1").click(function(){

        if(num==0){
        $(".res1").css("background-color","lightblue")
            $(".respos1").text("ocultar resposta")
        num=1;

        }else{
            $(".res1").css("background-color","white")
            $(".respos1").text("ver resposta");
            num=0;
        }    
    })

    $(".respos2").click(function(){

        if(num==0){
        $(".res2").css("background-color","lightblue")
            $(".respos2").text("ocultar resposta")
        num=1;

        }else{
            $(".res2").css("background-color","white")
            $(".respos2").text("ver resposta");
            num=0;
        }    
    })


    $(".respos3").click(function(){

        if(num==0){
        $(".res3").css("background-color","lightblue")
            $(".respos3").text("ocultar resposta")
        num=1;

        }else{
            $(".res3").css("background-color","white")
            $(".respos3").text("ver resposta");
            num=0;
        }    
    })

    //comandos para alterar o comportamento da 3º linha das colunas da pagina inicial
    $(".incorreta").click(function(){
        $(this).hide("slow")
    })

    $(".correta").click(function(){
        $(this).css("background-color","lightblue")
        $(".respostacorreta").text("Parabens, você acertou a resposta")
        $(".respostacorreta").fadeIn("slow")
        
    })


    $(".proxima2").click(function(){
        $(".questao1").hide("slow")
        $(".respostacorreta").fadeOut()
        $(".questao2").fadeIn("slow")
        
    })

    $(".proxima3").click(function(){
        $(".questao2").hide("slow")
        $(".respostacorreta").fadeOut()
        $(".questao3").fadeIn("slow")
        
    })

    $(".finalizar").click(function(){
        $(".respostacorreta").text("continue praticando...")
        $(".respostacorreta").fadeIn()
    })


})
})

