```javascript
// ==========================================
// NAVEGAÇÃO ENTRE TELAS
// ==========================================

function mostrarTela(tela) {

    // Esconde todas as telas
    const telas = document.querySelectorAll(".screen");

    telas.forEach(function(elemento) {
        elemento.classList.remove("active-screen");
    });


    // Mostra a tela selecionada
    const telaSelecionada = document.getElementById(tela);

    if (telaSelecionada) {
        telaSelecionada.classList.add("active-screen");
    }


    // Atualiza o título
    const titulos = {
        dashboard: "Dashboard",
        alunos: "Alunos",
        financeiro: "Financeiro",
        rentabilidade: "Rentabilidade"
    };

    document.getElementById("page-title").textContent =
        titulos[tela] || "Gestão Financeira";


    // Atualiza menu
    const menus = document.querySelectorAll(".menu-item");

    menus.forEach(function(menu) {
        menu.classList.remove("active");
    });


    // Marca o menu correspondente
    const menuAtivo = document.querySelector(
        `.menu-item[onclick="mostrarTela('${tela}')"]`
    );

    if (menuAtivo) {
        menuAtivo.classList.add("active");
    }
}


// ==========================================
// BUSCA DE ALUNOS
// ==========================================

function filtrarAlunos() {

    const campo =
        document.getElementById("searchAluno");

    const termo =
        campo.value.toLowerCase();


    const tabela =
        document.getElementById("tabelaAlunos");

    const linhas =
        tabela.querySelectorAll("tbody tr");


    linhas.forEach(function(linha) {

        const texto =
            linha.textContent.toLowerCase();


        if (texto.includes(termo)) {

            linha.style.display = "";

        } else {

            linha.style.display = "none";

        }

    });

}
```
