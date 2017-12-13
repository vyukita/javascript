var btnImportar = document.querySelector("#importar-pacientes");

btnImportar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest(); // Objeto que faz requisições

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // Dizer qual o método http a ser utilizado

  xhr.addEventListener("load", function(){ //Evento load para escutar a resposta da requisição

    ajaxError = document.querySelector("#erro-ajax");

    if(xhr.status == 200){
      ajaxError.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){ //Laço para adicionar CADA paciente da requisição na tabela
        adicionaPacienteNaTabela(paciente);
      });
    }else{
      ajaxError.classList.remove("invisivel");
    }

  });

  xhr.send(); // Envia a requisição

});
