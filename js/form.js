var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona"); //selecionar o form pelo html

    var paciente = obtemDado(form); //chama função para obter os dados do cliente

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
      exibeMsgErro(erros);
      return;
    }

    adicionaPacienteNaTabela(paciente)

    form.reset(); //limpa o formulário
});

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = criaTr(paciente); //chama função para criar tr
  var tabela = document.querySelector("#tabela-pacientes"); //seleciona a tabela via html
  tabela.appendChild(pacienteTr); //cria a tr dentro da tabela
}

function obtemDado(form){

  var paciente= {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function criaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function criaTd(dado,classe){
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function validaPaciente(paciente){

  var erros = [];

  if(!validaPeso(paciente.peso)){
    erros.push("O peso é invalido");
  }

  if(!validaAltura(paciente.altura)){
   erros.push("A altura é inválida");
 }

  if(paciente.nome.length == 0){
    erros.push("Nome não pode estar em branco");
  }

  if(paciente.altura.length == 0){
    erros.push("Altura não pode estar em branco");
  }

  if(paciente.peso.length == 0){
    erros.push("Peso não pode estar em branco");
  }

  if(paciente.gordura.length == 0){
    erros.push("Gordura não pode estar em branco");
  }

  return erros;
}

function exibeMsgErro(erros){
  var ul = document.querySelector("#msg-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}
