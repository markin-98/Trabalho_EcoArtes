function crc16(payload) {
  let crc = 0xFFFF;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) & 0xFFFF : (crc << 1) & 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}


function gerarPayloadPix(valor) {
  const valorNum = Number(valor).toFixed(2);
  const vs = valorNum.replace('.', ''); 
  const tv = vs.length.toString().padStart(2, '0'); 

  const chave = "chavepix@ecoartes.com";
  let payload =
    "000201" +
    "26580014BR.GOV.BCB.PIX" +
    `0114${chave}` +
    "52040000" +
    "5303986" +
    `54${tv}${vs}` +
    "5802BR" +
    "59" + "EcoArtes Teste Ltda".length.toString().padStart(2, '0') + "EcoArtes Teste Ltda" +
    "60" + "SAO PAULO".length.toString().padStart(2, '0') + "SAO PAULO" +
    "62" + "0703***";

  const ps = payload + "6304";
  return ps + crc16(ps);
}


function selecionarMetodo(metodo) {
  const area = document.getElementById('area-pagamento');

  if (metodo === 'pix') {
    const total = localStorage.getItem('totalCompra') || '0.00';
    const totalFormatado = total.replace('.', ',');

    area.innerHTML = `
    <h5>Pagamento via Pix</h5>
    <label>Valor (R$):</label>
    <input readonly class="form-control mb-2" value="${totalFormatado}" />

    <p class="mt-3">Escaneie o QR Code abaixo ou copie a chave Pix:</p>
    <div id="qr-pix-container" class="mb-3">
      <img src="" alt="QR Code Pix" class="img-fluid" />
    </div>
    <input readonly class="form-control" value="chavepix@ecoartes.com" />
  `;

    const img = area.querySelector('img');
    const payload = gerarPayloadPix(total);
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(payload)}`;
  }


  else if (metodo == 'boleto') {
    area.innerHTML = `
        <h5>Pagamento via Boleto</h5>
        <p>Gerar boleto:</p>
        <button class="btn btn-success">Gerar Boleto</button>
      `;
  } else if (metodo == 'cartao') {
    area.innerHTML = `
        <h5 class="mb-4">Pagamento com Cartão</h5>
        <div class="cartao-container mb-4">
          <div class="cartao-flip" id="cartao-flip">
            <div class="cartao-visual frente">
              <div class="numero-cartao" id="exibir-num">0000 0000 0000 0000</div>
              <div class="nome-cartao" id="exibir-nome">Nome Completo</div>
              <div class="validade-cartao" id="exibir-validade">MM/AA</div>
            </div>
            <div class="cartao-visual verso">
              <div class="faixa-magnetica"></div>
              <div class="cvv-box">
                <label for="cvv" class="text-white">CVV</label>
                <div id="cvv-exibir" class="cvv-numero">123</div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Número do cartão:</label>
          <input type="text" class="form-control" id="num-cartao" maxlength="19" oninput="atualizarCartao()" placeholder="0000 0000 0000 0000">
        </div>
        <div class="mb-3">
          <label class="form-label">Nome no cartão:</label>
          <input type="text" class="form-control" id="nome-cartao" oninput="atualizarCartao()" placeholder="Nome Completo">
        </div>
        <div class="mb-3 d-flex gap-2">
          <div>
            <label class="form-label">Validade:</label>
            <input type="text" class="form-control" id="validade-cartao" maxlength="5" oninput="atualizarCartao()" placeholder="MM/AA">
          </div>
          <div>
            <label class="form-label">CVV:</label>
            <input type="text" class="form-control" id="cvv-cartao" maxlength="3"
              oninput="atualizarCartao()"
              onfocus="virarCartao(true)"
              onblur="virarCartao(false)"
              placeholder="123">
          </div>
        </div>
    <button class="btn btn-success w-100" id="btn-confirmar-cartao">Confirmar Pagamento</button>
  `;
    document.getElementById('btn-confirmar-cartao').addEventListener('click', () => {
      alert("Pagamento confirmado com sucesso!");
      window.location.href = "/src/ListaProdutos/produtos.html";
    });
  }
}

document.addEventListener('input', function (e) {
  if (e.target.id == 'num-cartao') {
    let v = e.target.value.replace(/\D/g, '').slice(0, 16);
    v = v.replace(/(\d{4})(?=\d)/g, '$1 ');
    e.target.value = v.trim();
  }
  if (e.target.id == 'validade-cartao') {
    let v = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) {
      v = v.replace(/(\d{2})(\d{1,2})/, '$1/$2');
    }
    e.target.value = v;
  }
  if (e.target.id == 'cvv-cartao') {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
  }
});

function atualizarCartao() {
  document.getElementById('exibir-num').innerText = document.getElementById('num-cartao').value || '0000 0000 0000 0000';
  document.getElementById('exibir-nome').innerText = document.getElementById('nome-cartao').value || 'Nome Completo';
  document.getElementById('exibir-validade').innerText = document.getElementById('validade-cartao').value || 'MM/AA';
  document.getElementById('cvv-exibir').innerText = document.getElementById('cvv-cartao').value || '123';
}

function virarCartao(virar) {
  const cartao = document.getElementById('cartao-flip');
  if (cartao) {
    cartao.classList.toggle('virado', virar);
  }
}

function validarFormulario() {
  const numero = document.getElementById('num-cartao').value.replace(/\s/g, '');
  const nome = document.getElementById('nome-cartao').value.trim();
  const validade = document.getElementById('validade-cartao').value.trim();
  const cvv = document.getElementById('cvv-cartao').value.trim();
  const erros = [];

  if (!/^\d{16}$/.test(numero)) {
    erros.push("Número do cartão inválido. Deve conter 16 dígitos.");
  }
  if (nome.length < 3) {
    erros.push("Nome do titular é obrigatório.");
  }
  if (!/^\d{2}\/\d{2}$/.test(validade)) {
    erros.push("Validade inválida. Use o formato MM/AA.");
  } else {
    const [mes, ano] = validade.split('/');
    const mesNum = parseInt(mes);
    if (mesNum < 1 || mesNum > 12) {
      erros.push("Mês de validade inválido.");
    }
  }
  if (!/^\d{3}$/.test(cvv)) {
    erros.push("CVV inválido. Deve conter 3 dígitos.");
  }
  if (erros.length > 0) {
    alert("Corrija os seguintes erros:\n\n" + erros.join('\n'));
    return false;
  }
  alert("Pagamento confirmado com sucesso!");
  return true;
}