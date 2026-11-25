document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contatoForm");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    // Instancia o Modal do Bootstrap
    const modalSucesso = new bootstrap.Modal(document.getElementById("modalSucesso"));
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o recarregamento da página
        let formularioValido = true;
        // Validação do Nome (mínimo 3 caracteres)
        if (nome.value.trim().length < 3) {
            nome.classList.add("is-invalid");
            nome.classList.remove("is-valid");
            formularioValido = false;
        } else {
            nome.classList.remove("is-invalid");
            nome.classList.add("is-valid");
        }
        // Validação do E-mail (formato básico texto@texto.dominio)
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value.trim())) {
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
            formularioValido = false;
        } else {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        }
        // 3. Validação da Mensagem (mínimo 10 caracteres)
        if (mensagem.value.trim().length < 10) {
            mensagem.classList.add("is-invalid");
            mensagem.classList.remove("is-valid");
            formularioValido = false;
        } else {
            mensagem.classList.remove("is-invalid");
            mensagem.classList.add("is-valid");
        }
        // Se tudo estiver válido, abre o modal e limpa o formulário
        if (formularioValido) {
            modalSucesso.show();
            form.reset();
            nome.classList.remove("is-valid");
            email.classList.remove("is-valid");
            mensagem.classList.remove("is-valid");
        }
    });
});