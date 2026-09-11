```javascript
/* =====================================================
   CONFIGURAÇÃO DAS TELAS
===================================================== */

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


/* =====================================================
   MOSTRAR TELA
===================================================== */

function mostrarTela(tela) {


    /*
        1. Localiza todas as telas
    */

    const telas =
        document.querySelectorAll(".screen");


    /*
        2. Esconde todas
    */

    telas.forEach(function(elemento) {

        elemento.classList.remove(
            "active-screen"
        );

    });


    /*
        3. Localiza a tela escolhida
    */

    const telaSelecionada =
        document.getElementById(tela);


    /*
        4. Mostra a tela
    */

    if (telaSelecionada) {

        telaSelecionada.classList.add(
            "active-screen"
        );

    }


    /*
        5. Atualiza o título
    */

    const titulo =
        document.getElementById(
            "page-title"
        );


    if (
        titulo &&
        paginas[tela]
    ) {

        titulo.textContent =
            paginas[tela].titulo;

    }


    /*
        6. Atualiza a descrição
    */

    const descricao =
        document.getElementById(
            "page-description"
        );


    if (
        descricao &&
        paginas[tela]
    ) {

        descricao.textContent =
            paginas[tela].descricao;

    }


    /*
        7. Remove o "active"
        de todos os menus
    */

    const menus =
        document.querySelectorAll(
            ".menu-item"
        );


    menus.forEach(function(menu) {

        menu.classList.remove(
            "active"
        );

    });


    /*
        8. Encontra o menu
        correspondente à tela
    */

    menus.forEach(function(menu) {


        const comando =
            menu.getAttribute(
                "onclick"
            );


        if (
            comando &&
            comando.includes(
                `mostrarTela('${tela}')`
            )
        ) {

            menu.classList.add(
                "active"
            );

        }

    });


    /*
        9. Volta a página
        para o topo
    */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =====================================================
   BUSCAR ALUNO
===================================================== */

function filtrarAlunos() {


    /*
        Campo de pesquisa
    */

    const campo =
        document.getElementById(
            "searchAluno"
        );


    if (!campo) {

        return;

    }


    /*
        Texto pesquisado
    */

    const termo =
        campo.value
            .toLowerCase()
            .trim();


    /*
        Tabela
    */

    const tabela =
        document.getElementById(
            "tabelaAlunos"
        );


    if (!tabela) {

        return;

    }


    /*
        Linhas
    */

    const linhas =
        tabela.querySelectorAll(
            "tbody tr"
        );


    /*
        Verifica cada aluno
    */

    linhas.forEach(function(linha) {


        const texto =
            linha.textContent
                .toLowerCase();


        if (
            texto.includes(termo)
        ) {

            linha.style.display =
                "";

        } else {

            linha.style.display =
                "none";

        }

    });

}


/* =====================================================
   FILTRO POR STATUS
===================================================== */

const filtroStatus =
    document.getElementById(
        "filtroStatus"
    );


if (filtroStatus) {


    filtroStatus.addEventListener(
        "change",
        function() {


            const statusSelecionado =
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


                    /*
                        Se "Todos"
                    */

                    if (
                        statusSelecionado === ""
                    ) {

                        linha.style.display =
                            "";

                        return;

                    }


                    /*
                        Procura o texto
                        do status
                    */

                    const texto =
                        linha.textContent;


                    if (
                        texto.includes(
                            statusSelecionado
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
    );

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarTela("dashboard");

    }
);
```
