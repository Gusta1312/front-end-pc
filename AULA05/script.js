const formulario = document.getElementById('formCadastro');
const divMensagem = document.getElementById('mensagemConfirmacao');
const inputNome = document.getElementById('nome');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nomeInformado = inputNome.value;
    
    divMensagem.textContent = `Bem-vindo(a), ${nomeInformado}! Cadastro realizado com sucesso.`;
    
    formulario.reset();
});