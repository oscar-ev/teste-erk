```javascript
// =====================================================
// GESTÃO+ FINANCEIRO
// SISTEMA DE NAVEGAÇÃO
// =====================================================


// =====================================================
// CONFIGURAÇÃO DAS PÁGINAS
// =====================================================

const paginas = {

    dashboard: {
        titulo: "Dashboard",
        descricao: "Visão geral da saúde financeira dos seus alunos."
    },

    alunos: {
        titulo: "Alunos",
        descricao: "Consulte a situação financeira individual."
    },

    financeiro: {
        titulo: "Financeiro",
        descricao: "Controle de receitas, recebimentos e inadimplência."
    },

    rentabilidade: {
        titulo: "Rentabilidade",
        descricao: "Analise quanto cada aluno contribui para o resultado."
    },

    "bons-pagadores": {
        titulo: "Bons pagadores",
        descricao: "Alunos com excelente comportamento financeiro."
    },

    inadimplentes: {
        titulo: "Inadimplentes",
        descricao: "Alunos que necessitam de atenção financeira."
    }

};


// =====================================================
// TROCAR DE TELA
// =====================================================

function mostrarTela(nomeTela) {

    // -----------------------------------------------
    // Localiza todas as telas
    // -----------------------------------------------

    const telas = document.querySelectorAll(".screen");


    // -----------------------------------------------
    // Esconde todas as telas
    // -----------------------------------------------

    telas.forEach(function(tela) {

        tela.classList.remove("active-screen");

    });


    // -----------------------------------------------
    // Localiza a tela escolhida
    // -----------------------------------------------

    const telaSelecionada =
        document.getElementById(nomeTela);


    // -----------------------------------------------
    // Mostra a tela
    // -----------------------------------------------

    if (telaSelecionada) {

        telaSelecionada.classList.add("active-screen");

    } else {

        console.error(
            "Tela não encontrada:",
            nomeTela
        );

        return;

    }


    // -----------------------------------------------
    // Atualiza título
    // -----------------------------------------------

    const titulo =
        document.getElementById("page-title");


    if (titulo && paginas[nomeTela]) {

        titulo.textContent =
            paginas[nomeTela].titulo;

    }


    // -----------------------------------------------
    // Atualiza descrição
    // -----------------------------------------------

    const descricao =
        document.getElementById("page-description");


    if (descricao && paginas[nomeTela]) {

        descricao.textContent =
            paginas[nomeTela].descricao;

    }


    // -----------------------------------------------
    // Remove active de todos os menus
    // -----------------------------------------------

    const menus =
        document.querySelectorAll(".menu-item");


    menus.forEach(function(menu) {

        menu.classList.remove("active");

    });


    // -----------------------------------------------
    // Ativa o menu selecionado
    // -----------------------------------------------

    const menuSelecionado =
        document.querySelector(
            `.menu-item[data-tela="${nomeTela}"]`
        );


    if (menuSelecionado) {

        menuSelecionado.classList.add("active");

    }


    // -----------------------------------------------
    // Volta para o topo
    // -----------------------------------------------

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// =====================================================
// INICIALIZAÇÃO
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {


        // -------------------------------------------
        // Localiza todos os itens do menu
        // -------------------------------------------

        const menus =
            document.querySelectorAll(".menu-item");


        // -------------------------------------------
        // Adiciona o clique em cada menu
        // -------------------------------------------

        menus.forEach(function(menu) {


            menu.addEventListener(
                "click",
                function(event) {


                    // Impede o "#" de alterar a página
                    event.preventDefault();


                    // Descobre qual tela deve abrir
                    const nomeTela =
                        menu.getAttribute(
                            "data-tela"
                        );


                    // Abre a tela
                    if (nomeTela) {

                        mostrarTela(nomeTela);

                    }

                }
            );

        });


        // -------------------------------------------
        // Abre Dashboard inicialmente
        // -------------------------------------------

        mostrarTela("dashboard");

    }
);


// =====================================================
// BUSCA DE ALUNOS
// =====================================================

function filtrarAlunos() {


    const campo =
        document.getElementById("searchAluno");


    if (!campo) {

        return;

    }


    const termo =
        campo.value
            .toLowerCase()
            .trim();


    const tabela =
        document.getElementById("tabelaAlunos");


    if (!tabela) {

        return;

    }


    const linhas =
        tabela.querySelectorAll(
            "tbody tr"
        );


    linhas.forEach(function(linha) {


        const texto =
            linha.textContent
                .toLowerCase();


        if (texto.includes(termo)) {

            linha.style.display = "";

        } else {

            linha.style.display = "none";

        }

    });

}


// =====================================================
// FILTRO POR STATUS
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {


        const filtro =
            document.getElementById(
                "filtroStatus"
            );


        if (!filtro) {

            return;

        }


        filtro.addEventListener(
            "change",
            function() {


                const status =
                    this.value;


                const tabela =
                    document.getElementById(
                        "tabelaAlunos"
                    );


                if (!tabela) {

                    return;

                }


                const linhas =
                    tabela.querySelectorAll(
                        "tbody tr"
                    );


                linhas.forEach(
                    function(linha) {


                        if (status === "") {

                            linha.style.display = "";

                            return;

                        }


                        const texto =
                            linha.textContent;


                        if (
                            texto.includes(status)
                        ) {

                            linha.style.display = "";

                        } else {

                            linha.style.display = "none";

                        }

                    }
                );

            }
        );

    }
);
```
