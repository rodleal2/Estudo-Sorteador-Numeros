function sortear () {
   let quantidade = parseInt(document.getElementById("quantidade").value) ;
   let ParametroInicial = parseInt (document.getElementById("de").value) ;
   let Parametrofinal = parseInt (document.getElementById("ate").value) ;
       
    
   if (quantidade > (Parametrofinal-ParametroInicial + 1 )) {
    prompt (`Impossivel sortear a qauntidade de numero ${quantidade} é menor os parametros passados` ) ;
    return ;
   }  

   let Sorteados =  [] ; 
   let Numero ;
   
   

   for (let i = 0; i < quantidade; i++){
    Numero = ObterNumeroAleatorio (ParametroInicial, Parametrofinal)
   
    while (Sorteados.includes(Numero)){
        Numero = ObterNumeroAleatorio (ParametroInicial,Parametrofinal)
    }
     Sorteados.push (Numero)
   }
   let Resultado = document.getElementById ("resultado") ; 
       Resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados são : ${Sorteados} </label>` 
       alterarStatusBotao () ; 

       
}


function ObterNumeroAleatorio (ParametroInicial,Parametrofinal) {
    return Math.floor(Math.random() * (Parametrofinal - ParametroInicial + 1)) + ParametroInicial;

   
}


function alterarStatusBotao() {

    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }    
}

function reiniciar () {
     document.getElementById("quantidade").value = " "  ;
     document.getElementById("de").value = " " ;
     document.getElementById("ate").value = " " ;
     document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>` ; 
     alterarStatusBotao () ; 

}

     

