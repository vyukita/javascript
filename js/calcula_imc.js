var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutrição web";

//querySelector retorna apenas um elemento
//querySelectorAll retorna um array
var pacientes = document.querySelectorAll(".paciente");

//Laço para percorrer a tabela de pacientes
for(var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  //busca o peso do paciente
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  //busca a altura do paciente
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  //laço para fazer uma validação de campo simples
  if(!pesoValido){
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }
  if(!alturaValida){
    tdImc.textContent = "Altura inválida";
    //adiciona uma classe na tr com erro, que chama o css com a cor de fundo alterada
    paciente.classList.add("paciente-invalido");
  }
  if(pesoValido && alturaValida){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso){
  if(peso > 0 && peso <= 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura > 0 && altura <= 3.00){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura){
  var imc = 0;

  imc = peso / (altura * altura);
  //função toFixed altera a quantia de casas decimais a serem exibidas
  return imc.toFixed(2)
}
