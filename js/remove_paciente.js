var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){ //event de duplo clique
  if (event.target.tagName == 'TD') { //if para validar o campo que o usuário está clicando
        event.target.parentNode.classList.add("fade-out"); //classe para a linha esmaecer
        setTimeout(function(){ //função para a função remove dar um tempo
            event.target.parentNode.remove()
        }, 700);
    }
});
