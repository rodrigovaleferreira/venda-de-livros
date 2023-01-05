const elementosParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')


function exibirLivrosNaTela (listaDeLivros){
    elementoComValorTotalLivrosDisponiveis.innerHTML = ''
  /*colocar o conteudo como string vazia para conseguir aplicar o filter*/
    elementosParaInserirLivros.innerHTML=''
    listaDeLivros.forEach(livro => {
        let disponibilidade = verificarDisponibilidadeDoLivro(livro)
        elementosParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}


function verificarDisponibilidadeDoLivro(livro){
  if(livro.quantidade > 0){
    return 'livro__imagens'
  }else{
    return 'livro__imagens indisponivel'
  }

}