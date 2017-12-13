var campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];

            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(this.value, "i"); // expressão regular case insensitive, para comparar os nomes

            if(!expressao.test(nome)){ //função para testar se os nomes são iguais
            paciente.classList.add("invisivel");
          }else{
            paciente.classList.remove("invisivel");
          }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
