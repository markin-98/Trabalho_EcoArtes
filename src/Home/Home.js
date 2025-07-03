async function LoadPromocao(){
    let container = document.getElementById('promo-content');
    container.innerHTML = ``;
    const response = await fetch(`/listar/todos`);
    if (!response.ok) {
        throw new Error('Failed to fetch data from server');
    }
    else {
      let count = 0;
      const data = await response.json();
      data.produtos.forEach(element => {
        if (count < 12)
        {
          container.innerHTML += `<div class="card col-3 col-sm-3 col-md-3 col-lg-2 flex-grow-1 m-1 rounded-3 shadow-sm" style="max-width: 220px;"> 
            <div class="card-header py-3"> 
              <a data-details='${JSON.stringify(element)}' onclick="mostrarDetalhesProduto(this)" style="color: var(--color-darkgrey); text-decoration: none">
                <img src="/imagens/${element.imagem}" class="d-flex flex-shrink-1 flex-grow-1 img-fluid" style="object-fit: contain; aspect-ratio: 1 / 1;">
              </a>
            </div> 
            <div class="card-body">
              <div class="d-flex flex-row col-12 flex-wrap">
                <a data-details='${JSON.stringify(element)}' onclick="mostrarDetalhesProduto(this)" style="color: var(--color-darkgrey); text-decoration: none">
                  <h5 class="card-title text-start flex-fill">${element.nome}</h1> 
                </a>
                <h5 class="card-title text-end flex-fill" style="color: var(--color-green)">R$${element.valor}</h1> 
              </div>
              <button type="button" class="p-2 btn col-12" onclick="AddCarrinho(${element.codigo}, 'src')" style="color: var(--color-purewhite); border-color: var(--color-purewhite); background: var(--color-green)">Adicionar</button> 
            </div> 
          </div>`
        }
        count++;
      });
    }
}

function LoadCarousel() {
  let container = document.getElementById('carousel-content');
  let sliders = document.getElementById('carousel-sliders');
  sliders.innerHTML = ``;
  container.innerHTML = ``;

  let contents = [
    {
      thumb: "https://img.youtube.com/vi/6Sh5OEsctIA/maxresdefault.jpg",
      link: "/tutorial/guia.html?id=inseticida",
      title: "Tutorial: Inseticida Natural Caseiro",
      descricao: "Neste tutorial, você aprenderá como produzir um inseticida natural utilizando ingredientes acessíveis, sustentáveis e livres de produtos químicos. Essa receita é ideal para quem cultiva hortas orgânicas, plantas ornamentais ou busca uma alternativa ecológica aos produtos industrializados."
    },
    {
      thumb: "/imagens/guias/Como Cultivar Lavanda.png",
      link: "/tutorial/guia.html?id=lavanda",
      title: "Como Plantar Lavanda",
      descricao: "Cultive lavanda em vasos com praticidade e aroma."
    },
    {
      thumb: "/imagens/guias/Quadro com folha seca.jpg",
      link: "/tutorial/guia.html?id=folhas",
      title: "Como fazer um Quadro com Folhas Secas",
      descricao: "Crie arte decorativa com folhas prensadas e moldura reciclável."
    }
  ];

  for (let i = 0; i < contents.length; i++) {
    sliders.innerHTML += `
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="${i}"
        class="${i === 0 ? "active" : ""}" 
        aria-label="Slide ${i + 1}" 
        ${i === 0 ? 'aria-current="true"' : ''}>
      </button>`;

    container.innerHTML += `
      <div class="carousel-item ${i === 0 ? "active" : ""}">
        <div class="d-flex justify-content-center align-items-center" style="height: 50vh;">
          <img src="${contents[i].thumb}" alt="${contents[i].title}" 
               style="max-height: 100%; max-width: 100%; object-fit: contain;">
        </div>

        <div class="carousel-caption d-block text-center p-3" 
             style="background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent); border-radius: 12px; bottom: 0px;">
          <a href="${contents[i].link}" class="text-decoration-none">
            <h2 class="fw-bold" style="color: #ffeb3b; text-shadow: 2px 2px 4px black;">${contents[i].title}</h2>
            <p style="color: #ffffff; text-shadow: 1px 1px 3px black;">${contents[i].descricao}</p>
          </a>
        </div>
      </div>`;
  }
}


document.addEventListener("DOMContentLoaded", function(event) {
  LoadPromocao();
  LoadCarousel();
});

async function AddFavoritoMiddleman(codigo)
{
  console.log(await AddFavorito(codigo));
  refreshPopup();
}

async function RemoveFavoritoMiddleman(codigo)
{
  console.log(await RemoveFavorito(codigo));
  refreshPopup();
}

