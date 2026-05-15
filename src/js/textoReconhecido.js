const editarBtn = document.getElementById("editarBtn");

editarBtn.addEventListener("click", function(){

    const textoAtual = document.getElementById("textoIA");

    const novoTexto = prompt(
        "Edite o texto:",
        textoAtual.innerHTML
    );

    if(novoTexto !== null){

        textoAtual.innerHTML = novoTexto.toUpperCase();

    }

});

const gerarBtn = document.getElementById("gerarBtn");

gerarBtn.addEventListener("click", function(){

    alert("Resumo gerado com sucesso!");

    window.location.href = "resumoGerado.html";

});