document.addEventListener("DOMContentLoaded", function() {
    const botaoLogin = document.getElementById("botaoLogin");
    botaoLogin.addEventListener("click", verificarSenha);

    const campoSenha = document.getElementById("senha");
    campoSenha.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita o envio do formulário padrão
            verificarSenha();
        }
    });
});

function verificarSenha() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    // Verifica se a senha está vazia
    if (senha === "") {
        mensagem.innerText = "tem que preencher, assim como você preenche o meu ser por completo.";
    } else {
        // Verifica se o usuário inseriu "Mily" como senha
        if (senha === "sim aceito") {
            mensagem.innerText = "Você não vai se arrepender, Moça maravilhosa. " + usuario + "!";
            // Redireciona o usuário para o link desejado
            window.location.href = "https://www.youtube.com/watch?v=lV2plyhSRBU"; // Substitua com o link desejado
        } else {
            mensagem.innerText = "Tudo bem, é normal erra a senha, não erre de novo.";
        }
    }
}
