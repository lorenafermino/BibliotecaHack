function pesquisar() {

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    // se o campoPesquisa for um string sem nada,
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return 
    }

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
if (dado.titulo.includes(campoPesquisa)) {
    // Cria um novo elemento
    resultados += `
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
`;
}
    }

    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
}



