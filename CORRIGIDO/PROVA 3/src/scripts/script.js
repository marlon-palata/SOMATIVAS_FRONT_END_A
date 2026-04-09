const horaAtual = new Date().getHours();
const saudacao = document.querySelector("#saudacao-livraria");

if (horaAtual < 12) {
  saudacao.textContent = "Boa leitura matinal!";
} else if (horaAtual < 18) {
  saudacao.textContent = "Aproveite a tarde para ler!";
} else {
  saudacao.textContent = "Uma boa história antes de dormir?";
}

const banner = document.querySelector("#banner-cultura");
banner.addEventListener("mouseover", () => {
  banner.classList.add("tema-sepia");
});
banner.addEventListener("mouseout", () => {
  banner.classList.remove("tema-sepia");
});

const qtdLivros = document.querySelector("#qtd-livros");
const totalPagar = document.querySelector("#total-pagar");
qtdLivros.addEventListener("input", () => {
  totalPagar.textContent = Number(qtdLivros.value) * 42;
});

const btnLista = document.querySelector("#btn-lista");
const nomeLivro = document.querySelector("#nome-livro");
const listaLeitura = document.querySelector("#lista-leitura");

btnLista.addEventListener("click", () => {
  if (nomeLivro.value === "") {
    console.warn("Digite um título válido!");
  } else {
    listaLeitura.innerHTML += `<article class="card-leitura"><h3>📖 Título: ${nomeLivro.value}</h3></article>`;
  }
});

const btnLimpar = document.querySelector("#btn-limpar");
btnLimpar.addEventListener("click", () => {
  listaLeitura.innerHTML = "";
  alert("Sua lista foi arquivada com sucesso!");
  nomeLivro.focus();
});
