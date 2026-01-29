let listaServicos = [];
fetch("servicoslista.json")
  .then((response) => response.json())
  .then((dados) => {
    listaServicos = dados;
  });

function filtarServico(categorias) {
  const container = document.getElementById("container-cards");

  container.innerHTML = "";

  const filtro = listaServicos.filter((item) => {
    return item.categorias && item.categorias.includes(categorias);
  });
  filtro.forEach((servico) => {
    const link = document.createElement("div");
    link.className = ""; // se eu for estilizar o card

    link.innerHTML = `
  <a href="${servico.href}" target='${servico.targetBlank ? "_blank" : "_self"}'>
  ${servico.nome}</a>
  `;
    container.appendChild(link);
  });
}
