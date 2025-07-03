var carrinho = [];

function alterarQtd(delta, id) {
  const input = document.getElementById(`quantidade${id}`);
  let valor = parseInt(input.value);
  valor = isNaN(valor) ? 1 : valor + delta;
  valor = Math.max(1, valor);
  input.value = valor;
  atualizarValores();
}

function atualizarValores() {
  if (carrinho.length > 0) {
    let subtotal = 0;
    const frete = 5.00;

    carrinho.forEach(item => {
      const inputQtd = document.getElementById(`quantidade${item.codigo}`);
      const qtd = inputQtd ? Number(inputQtd.value) || 1 : 1;
      subtotal += item.valor * qtd;
    });

    const total = subtotal + frete;
    document.getElementById('subtotal').innerText = `R$${subtotal.toFixed(2)}`;
    document.getElementById('total').innerText = `R$${total.toFixed(2)}`;
    localStorage.setItem('totalCompra', total.toFixed(2));
  } else {
    document.getElementById('subtotal').innerText = 'R$0.00';
    document.getElementById('total').innerText = 'R$0.00';
    localStorage.setItem('totalCompra', '0.00');
  }
}



window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-menos')?.addEventListener('click', () => alterarQtd(-1));
  document.getElementById('btn-mais')?.addEventListener('click', () => alterarQtd(1));
  document.getElementById('quantidade')?.addEventListener('input', atualizarValores);
  user = JSON.parse(localStorage.getItem('CurrentUser'));
  if (user !== null) {
    carregarCarrinho();
  }
  atualizarValores();
});

async function carregarCarrinho() {
  console.log()
  for (const element of user.carrinho) {
    const product = await fetch(`/produto/${element}`);
    const product2 = await product.json();
    carrinho.push(product2.produtos[0]);
  }
  if (carrinho.length > 0) {
    let container = document.getElementById('cartcard');
    container.innerHTML = '';
    carrinho.forEach(element => {
      container.innerHTML += `<div class="d-flex align-items-center gap-3">
      <img src="/imagens/${element.imagem}" alt="${element.nome}" class="img-thumbnail" style="width: 100px; height: auto;">
      <div class="d-flex flex-column w-100">
        <div class="input-group mb-2">
          <p class="text-center p-1"> ${element.nome} </p>
          <!--
          <select class="form-select" aria-label="${element.nome}">
            <option selected>${element.nome}</option>
            <option value="2">Produto 2</option>
            <option value="3">Produto 3</option>
          </select>
          -->
        </div>
        <div class="m-0 p-0">
          <p>R$ ${element.valor}</p>
        </div>
        <div class="input-group">
          <button id="btn-menos" class="btn btn-outline-secondary" onclick="alterarQtd(-1, ${element.codigo})" type="button" onclick=()>−</button>
          <input type="number" class="form-control text-center" id="quantidade${element.codigo}" value="1" min="1" onchange="atualizarValores()" style="max-width: 80px;">
          <button id="btn-mais" class="btn btn-outline-secondary" onclick="alterarQtd(1, ${element.codigo})" type="button">+</button>
        </div>
        <div class="col-12 text-center d-flex ms-5 p-1">
          <button class="btn btn-danger" onclick="remover(${element.codigo})"> Remover </button>
        </div>
      </div>
    </div>`
    })
  }
  atualizarValores();
}

function remover(codigo) {
  if (confirm("Tem certeza que quer remover este item do carrinho?")) {
    console.log("removing " + codigo);
    user = JSON.parse(localStorage.getItem('CurrentUser'));
    user.carrinho = user.carrinho.filter(item => item != codigo);
    carrinho = carrinho.filter(item => item.codigo != codigo);
    console.log(carrinho);
    localStorage.setItem('CurrentUser', JSON.stringify(user));
    location.reload();
  }
}

function finalizarCompra() {
  window.location.href = "../../../src/Pagamento/html/checkout.html";
}