const horaAtual = new Date().getHours();
const saudacao = document.querySelector("#saudacao-pizzaria");

if (horaAtual < 12) {
  saudacao.textContent = "Bom dia! Pizza no café da manhã?";
} else if (horaAtual < 18) {
  saudacao.textContent = "Boa tarde! Que tal uma fatia agora?";
} else {
  saudacao.textContent = "Boa noite! A fornalha está quente, faça seu pedido!";
}

const banner = document.querySelector("#banner-promocao");
banner.addEventListener("mouseover", () => {
  banner.classList.add("fatia-destaque");
});
banner.addEventListener("mouseout", () => {
  banner.classList.remove("fatia-destaque");
});

const qtdPessoas = document.querySelector("#qtd-pessoas");
const totalPagar = document.querySelector("#total-pagar");
qtdPessoas.addEventListener("input", () => {
  totalPagar.textContent = Number(qtdPessoas.value) * 45;
});

const btnAdicionar = document.querySelector("#btn-adicionar");
const saborPizza = document.querySelector("#sabor-pizza");
const listaPedidos = document.querySelector("#lista-pedidos");

btnAdicionar.addEventListener("click", () => {
  if (saborPizza.value === "") return;
  listaPedidos.innerHTML += `<article class="card-pedido"><h3>🍕 Sabor: ${saborPizza.value} 🛵</h3></article>`;
});

const btnCancelar = document.querySelector("#btn-cancelar");
btnCancelar.addEventListener("click", () => {
  listaPedidos.innerHTML = "";
  alert("O seu pedido foi cancelado com sucesso!");
  saborPizza.focus();
});
