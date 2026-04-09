const horaAtual = new Date().getHours();
const saudacao = document.querySelector("#saudacao-cafetaria");

if (horaAtual < 12) {
  saudacao.textContent = "Bom dia! O primeiro café é por nossa conta!";
} else if (horaAtual < 18) {
  saudacao.textContent = "Boa tarde! Precisa de energia para programar?";
} else {
  saudacao.textContent = "Boa noite! Um descafeinado para não perder o sono?";
}

const banner = document.querySelector("#banner-especialidade");
banner.addEventListener("mouseover", () => {
  banner.classList.add("aroma-destaque");
});
banner.addEventListener("mouseout", () => {
  banner.classList.remove("aroma-destaque");
});

const qtdCafes = document.querySelector("#qtd-cafes");
const totalPagar = document.querySelector("#total-pagar");
qtdCafes.addEventListener("input", () => {
  totalPagar.textContent = Number(qtdCafes.value) * 12;
});

const btnPedir = document.querySelector("#btn-pedir");
const nomeCafe = document.querySelector("#nome-cafe");
const listaPedidos = document.querySelector("#lista-pedidos");

btnPedir.addEventListener("click", () => {
  if (nomeCafe.value === "") {
    alert("Por favor, digite o nome de um café!");
  } else {
    listaPedidos.innerHTML += `<article class="card-pedido"><h3>☕ Pedido: ${nomeCafe.value} 🍰</h3></article>`;
  }
});

const btnCancelar = document.querySelector("#btn-cancelar");
btnCancelar.addEventListener("click", () => {
  listaPedidos.innerHTML = "";
  nomeCafe.value = "";
  nomeCafe.focus();
});
