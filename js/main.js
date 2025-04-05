document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value;
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const idUsuario = document.getElementById("idUsuario").value.trim();
    const senha = document.getElementById("senha").value;
  
    if (!validarEmail(email)) {
      alert("Insira um e-mail válido.");
      return;
    }
  
    if (
      !nome || !dataNascimento || !cpf || !email ||
      !telefone || !idUsuario || !senha
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    const dados = {
      nome,
      dataNascimento,
      cpf,
      email,
      telefone,
      idUsuario,
      senha,
    };
  
    localStorage.setItem("usuario", JSON.stringify(dados));
    alert("Inscrição realizada com sucesso!");
    document.getElementById("formulario").reset();
    window.location.href= 'login.html';
  });
  
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }