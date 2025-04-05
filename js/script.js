document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Limpa erros anteriores
      document.querySelectorAll(".erro").forEach(el => el.classList.remove("erro"));
      document.querySelectorAll(".erro__texto").forEach(el => el.style.display = "none");
  
      let valido = true;
      const nome = document.querySelector("#nome");
      const dataNascimento = document.querySelector("#dataNascimento");
      const email = document.querySelector("#email");
      const cpf = document.querySelector("#cpf");
      const termos = document.querySelector("#termos");
  
      if (!nome.value.trim()) {
        mostrarErro(nome);
        alert("Por favor, preencha o campo nome.");
        valido = false;
      }
      if (!dataNascimento.value) {
        alert("Por favor, preencha o campo data de nascimento.");
        valido = false;
      }
  
      if (!validarEmail(email.value)) {
        mostrarErro(email);
        alert("Por favor, preencha o campo email.");
        valido = false;
      }
      if(!validarCPF(cpf.value)){
        mostrarErro(cpf);
        valido = false;
      }
  
      if (!termos.checked) {
        alert("Você deve aceitar os Termos & Condições.");
        valido = false;
      }
  
      if (valido) {
        const dados = Object.fromEntries(new FormData(form));
        localStorage.setItem("inscricaoTrilhas", JSON.stringify(dados));
        alert("Inscrição realizada com sucesso!");
        form.reset();
      }
    });
  
    function mostrarErro(campo) {
      campo.classList.add("erro");
      const erroTexto = campo.nextElementSibling;
      if (erroTexto && erroTexto.classList.contains("erro__texto")) {
        erroTexto.style.display = "block";
        
      }
    }
  
    function validarEmail(email) {
      const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      return re.test(email);
    }
    function validarCPF(cpf) {
      return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
    }

  });