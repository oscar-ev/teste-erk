```javascript
// =====================================================
// GESTÃO+ FINANCEIRO
// SISTEMA DE NAVEGAÇÃO
// =====================================================


// =====================================================
// PÁGINAS DO SISTEMA
// =====================================================

const paginas = {

    dashboard: {

        titulo: "Dashboard",

        descricao:
            "Visão geral da saúde financeira dos seus alunos."

    },


    alunos: {

        titulo: "Alunos",

        descricao:
            "Consulte a situação financeira individual."

    },


    financeiro: {

        titulo: "Financeiro",

        descricao:
            "Controle de receitas, recebimentos e inadimplência."

    },


    rentabilidade: {

        titulo: "Rentabilidade",

        descricao:
            "Analise quanto cada aluno contribui para o resultado."

    },


    "bons-pagadores": {

        titulo: "Bons pagadores",

        descricao:
            "Alunos com excelente comportamento financeiro."

    },


    inadimplentes: {

        titulo: "Inadimplentes",

        descricao:
            "Alunos que necessitam de atenção financeira."

    }

};



// =====================================================
// FUNÇÃO PARA TROCAR DE TELA
// =====================================================

function mostrarTela(nomeTela) {


    console.log(
        "Abrindo tela:",
        nomeTela
    );


    // -----------------------------------------------
    // 1. Localizar todas as telas
    // -----------------------------------------------

    const telas =
        document.querySelectorAll(
            ".screen"
        );


    // -----------------------------------------------
    // 2. Esconder todas as telas
    // -----------------------------------------------

    telas.forEach(
        function(tela) {

            tela.classList.remove(
                "active-screen"
            );

        }
    );


    // -----------------------------------------------
    // 3. Localizar a tela escolhida
    // -----------------------------------------------

    const telaSelecionada =
        document.getElementById(
            nomeTela
        );


    // -----------------------------------------------
    // 4. Verificar se existe
    // -----------------------------------------------

    if (!telaSelecionada) {

        console.error(
            "ERRO: Tela não encontrada:",
            nomeTela
        );

        return;

    }


    // -----------------------------------------------
    // 5. Mostrar a tela
    // -----------------------------------------------

    telaSelecionada.classList.add(
        "active-screen"
    );


    // -----------------------------------------------
    // 6. Atualizar título
    // -----------------------------------------------

    const titulo =
        document.getElementById(
            "page-title"
        );


    if (
        titulo &&
        paginas[nomeTela]
    ) {

        titulo.textContent =
            paginas[nomeTela].titulo;

    }


    // -----------------------------------------------
    // 7. Atualizar descrição
    // -----------------------------------------------

    const descricao =
        document.getElementById(
            "page-description"
        );


    if (
        descricao &&
        paginas[nomeTela]
    ) {

        descricao.textContent =
            paginas[nomeTela].descricao;

    }


    // -----------------------------------------------
    // 8. Remover active dos menus
    // -----------------------------------------------

    const menus =
        document.querySelectorAll(
            ".menu-item"
        );


    menus.forEach(
        function(menu) {

            menu.classList.remove(
                "active"
            );

        }
    );


    // -----------------------------------------------
    // 9. Ativar menu selecionado
    // -----------------------------------------------

    const menuSelecionado =
        document.querySelector(
            `.menu-item[data-tela="${nomeTela}"]`
        );


    if (menuSelecionado) {

        menuSelecionado.classList.add(
            "active"
        );

    }


    // -----------------------------------------------
    // 10. Voltar ao topo
    // -----------------------------------------------

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



// =====================================================
// INICIALIZAÇÃO DO SISTEMA
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {


        console.log(
            "Gestão+ iniciado."
        );


        // -------------------------------------------
        // Localiza os menus
        // -------------------------------------------

        const menus =
            document.querySelectorAll(
                ".menu-item"
            );


        console.log(
            "Menus encontrados:",
            menus.length
        );


        // -------------------------------------------
        // Adiciona evento de clique
        // -------------------------------------------

        menus.forEach(
            function(menu) {


                menu.addEventListener(
                    "click",
                    function() {


                        const nomeTela =
                            this.dataset.tela;


                        console.log(
                            "Clique:",
                            nomeTela
                        );


                        if (nomeTela) {

                            mostrarTela(
                                nomeTela
                            );

                        }

                    }
                );

            }
        );


        // -------------------------------------------
        // Botões "Ver todos"
        // -------------------------------------------

        const botoesNavegacao =
            document.querySelectorAll(
                "[data-ir-para]"
            );


        botoesNavegacao.forEach(
            function(botao) {


                botao.addEventListener(
                    "click",
                    function() {


                        const destino =
                            this.dataset.irPara;


                        if (destino) {

                            mostrarTela(
                                destino
                            );

                        }

                    }
                );

            }
        );


        // -------------------------------------------
        // Abrir Dashboard
        // -------------------------------------------

        mostrarTela(
            "dashboard"
        );

    }
);



// =====================================================
// BUSCA DE ALUNOS
// =====================================================

function filtrarAlunos() {


    const campo =
        document.getElementById(
            "searchAluno"
        );


    const tabela =
        document.getElementById(
            "tabelaAlunos"
        );


    if (
        !campo ||
        !tabela
    ) {

        return;

    }


    const termo =
        campo.value
            .toLowerCase()
            .trim();


    const linhas =
        tabela.querySelectorAll(
            "tbody tr"
        );


    linhas.forEach(
        function(linha) {


            const texto =
                linha.textContent
                    .toLowerCase();


            if (
                texto.includes(
                    termo
                )
            ) {

                linha.style.display =
                    "";

            } else {

                linha.style.display =
                    "none";

            }

        }
    );

}



// =====================================================
// FILTROS DOS ALUNOS
// =====================================================

function aplicarFiltros() {


    const campoBusca =
        document.getElementById(
            "searchAluno"
        );


    const filtroStatus =
        document.getElementById(
            "filtroStatus"
        );


    const filtroPlano =
        document.getElementById(
            "filtroPlano"
        );


    const tabela =
        document.getElementById(
            "tabelaAlunos"
        );


    if (!tabela) {

        return;

    }


    const termo =
        campoBusca
            ? campoBusca.value
                .toLowerCase()
                .trim()
            : "";


    const status =
        filtroStatus
            ? filtroStatus.value
            : "";


    const plano =
        filtroPlano
            ? filtroPlano.value
            : "";


    const linhas =
        tabela.querySelectorAll(
            "tbody tr"
        );


    linhas.forEach(
        function(linha) {


            const texto =
                linha.textContent
                    .toLowerCase();


            const statusAluno =
                linha.dataset.status || "";


            const planoAluno =
                linha.dataset.plano || "";


            const correspondeBusca =
                texto.includes(
                    termo
                );


            const correspondeStatus =
                status === "" ||
                statusAluno === status;


            const correspondePlano =
                plano === "" ||
                planoAluno === plano;


            if (
                correspondeBusca &&
                correspondeStatus &&
                correspondePlano
            ) {

                linha.style.display =
                    "";

            } else {

                linha.style.display =
                    "none";

            }

        }
    );

}



// =====================================================
// EVENTOS DOS FILTROS
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {


        const campoBusca =
            document.getElementById(
                "searchAluno"
            );


        const filtroStatus =
            document.getElementById(
                "filtroStatus"
            );


        const filtroPlano =
            document.getElementById(
                "filtroPlano"
            );


        if (campoBusca) {

            campoBusca.addEventListener(
                "input",
                aplicarFiltros
            );

        }


        if (filtroStatus) {

            filtroStatus.addEventListener(
                "change",
                aplicarFiltros
            );

        }


        if (filtroPlano) {

            filtroPlano.addEventListener(
                "change",
                aplicarFiltros
            );

        }

    }
);
```
