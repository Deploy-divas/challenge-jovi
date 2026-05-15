const botao = document.getElementById("btnEntrar");

botao.addEventListener("click", function () {

    const email = document.getElementById("email").value;

    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    if(email === "" || senha === ""){

        mensagem.innerHTML = "Preencha todos os campos";

        alert("Campos vazios!");

        return;

    }

    mensagem.innerHTML = "";

    alert("Login realizado com sucesso!");

    window.location.href = "camera.html";

});