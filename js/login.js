
document.getElementById('formLogin').addEventListener('submit', function (e) {
      e.preventDefault();
      const id = document.getElementById('loginId').value;
      const senha = document.getElementById('loginSenha').value;

      const dados = JSON.parse(localStorage.getItem('usuario'));

      if (dados && dados.idUsuario === id && dados.senha === senha) {
        alert('Login realizado com sucesso!');
        window.location.href= 'cadastro.html';
      } else {
        alert('ID ou senha incorretos.');
      }
});
