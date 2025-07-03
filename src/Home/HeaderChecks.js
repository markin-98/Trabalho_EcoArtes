document.addEventListener("DOMContentLoaded", function(event) {
  user = localStorage.getItem('CurrentUser');
  if (user !== null) // usuario logado
  {
    const currentuser = JSON.parse(user);
    loadLogout();
    if (currentuser.userType == 'empreendedores')
      loadMeusProdutos();
    else
      loadMeusFavoritos();
  }
});

function loadMeusProdutos()
{
  document.getElementById('myproducts').innerHTML = `<b> Meus Produtos </b>`;
}
function loadMeusFavoritos()
{
  document.getElementById('myfav').innerHTML = `<b> Meus Favoritos </b>`;
}

function loadLogout(){
  user = localStorage.getItem('CurrentUser');
  currentuser = JSON.parse(user);
  //console.log(currentuser.carrinho.length);
  document.getElementById('cart'). innerHTML = `<div class="d-flex flex-nowrap" ><p class="rounded px-2 m-1" style="text-decoration: underline white !important;; color: var(--color-green); background: var(--color-purewhite)">${currentuser.carrinho.length}</p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--color-purewhite)" class="bi bi-cart" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
  </svg></div>`
  document.getElementById('icons').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--color-purewhite)" class="bi bi-door-open" viewBox="0 0 16 16">
    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
  </svg>`;
  document.getElementById('login').innerHTML = `<p class="text-light p-1 text-decoration-none">${currentuser.nome}</p>`;
}

function checkUser(){
  user = JSON.parse(localStorage.getItem('CurrentUser'));
  if (user == null){
    window.location.href = `/Cadastro/login.html`;
  }
  else 
  {
    //console.log(user.userType);
    if (user.userType == 'usuarios'){
      //alert("Somente usuários empreendedores podem acessar essa página");
      window.location.href = `${pathcorrect}ListaProdutos/produtos.html`; 
    }
    else {
      window.location.href = "/listaprodutos"; 
    }
  }
  
}

function logOut(){
  if (confirm("Tem certeza que quer sair da sua conta?"))
  {
    localStorage.clear();
    location.reload();
  }
}

function AddCarrinho(code) {
    //console.log(code);
    user = JSON.parse(localStorage.getItem('CurrentUser'));
    if (user !== null) // usuário logado 
    {
      if (code != null)
      {
        if (!user.carrinho.includes(code))
        {
          user.carrinho.push(code); // ID do produto adicionado no carrinho
          localStorage.setItem('CurrentUser', JSON.stringify(user));
        }
        tempAlert("Produto adicionado ao carrinho!");
        //console.log(user);
      }
    }
    else {
        window.location.href = "/Cadastro/login.html";
    }
    loadLogout();
}

async function AddFavorito(code) {
  //console.log(code);
  try{
  user = JSON.parse(localStorage.getItem('CurrentUser'));
  if (user !== null && user.userType == 'usuarios') // usuário logado 
  {
    if (code != null)
    {
      if (await IsFavorited(code) == 1)
      {
        console.log("Produto já favoritado!");
      }
      else{
        await fetch('/novofavorito', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: user.email, id: code }),
        });
        tempAlert("Produto adicionado aos seus favoritos!");
        return true;
      }
    }
  }
  else {
      window.location.href = addressfix + "/Cadastro/login.html";
  }
}
catch (e)
{
  console.error(e);
}
}

async function RemoveFavorito(code) {
  //console.log(code);
  try {
  user = JSON.parse(localStorage.getItem('CurrentUser'));
  if (user !== null && user.userType == 'usuarios') // usuário logado 
  {
    if (code != null)
    {
      await fetch('/removefavorite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email, id: code }),
      });
      tempAlert("Produto removido dos seus favoritos!");
      return true;
    }
  }
  else {
      window.location.href = addressfix + "/Cadastro/login.html";
  }
}
catch (e)
{
  console.error(e);
}
}

async function IsFavorited(codigo) {
  try
  {
    //console.log('trying IsFavorited');
    user = JSON.parse(localStorage.getItem('CurrentUser'));
    if (user && user.userType == 'usuarios')
    {
      let dude = await fetch(`/existsRel?table=favoritam&column1=emailusuario&value1=${user.email}&column2=idproduto&value2=${codigo}`, {
        method: 'GET',
      })
      dude = await dude.json();
      return dude ? 1 : 0 // 1 = true, 0 = false
    } 
    else
      return -1; // Não no usuário correto
  }
  catch (e)
  {
    console.error('IsFavorited Failed: ' + e);
    return -1;
  }
}

var storedanchor;
var activeitemcode;

document.getElementById("btn-add-popup2").addEventListener("click", (e) => {
  const target = e.target;
  if (target.matches(".favorite-btn")) {
      const codigo = target.dataset.codigo;
      if (target.classList.contains("add-favorite")) {
          AddFavoritoMiddleman(codigo);
      } else if (target.classList.contains("remove-favorite")) {
          RemoveFavoritoMiddleman(codigo);
      }
  }
});

async function mostrarDetalhesProduto(anchor) {
  try
  {
    //console.log('trying load');
    storedanchor = anchor;
    const produto = JSON.parse(anchor.getAttribute('data-details'));
    activeitemcode = produto.codigo;

    document.getElementById("imagem-produto").src = `/imagens/${produto.imagem}`;
    document.getElementById("popup-nome").innerText = produto.nome;
    document.getElementById("popup-descricao").innerText = produto.descricao || "Descrição não disponível.";
    document.getElementById("popup-preco").innerText = `R$ ${produto.valor}`;
    document.getElementById("btn-add-popup").innerHTML = `<button type="button" class="p-1 btn col-12 text-light" onclick="AddCarrinho(${produto.codigo}, 'src')" >Adicionar ao Carrinho</button>`
    switch (await IsFavorited(produto.codigo))
    {
      case 0:
          document.getElementById("btn-add-popup2").innerHTML = `
          <button data-codigo="${produto.codigo}" 
            class="favorite-btn p-1 btn col-12 text-warning btn-outline-warning add-favorite">
              Adicionar aos Favoritos
          </button>`
          break;
      case 1:
          document.getElementById("btn-add-popup2").innerHTML = `
          <button data-codigo="${produto.codigo}" 
            class="favorite-btn p-1 btn col-12 text-light btn-warning btn-outline-warning remove-favorite">
            Remover dos Favoritos
          </button>`
          break;
      default:
          console.error('invalid IsFavorited result detected');
          break;
    }//
    
    /*switch (await IsFavorited(produto.codigo))
    {
      case 0:
          document.getElementById("btn-add-popup2").innerHTML = `<button type="button" class="p-1 btn col-12 text-warning btn-outline-warning" onclick="AddFavoritoMiddleman(${produto.codigo})">Adicionar aos Favoritos</button>`
          break;
      case 1:
          document.getElementById("btn-add-popup2").innerHTML = `<button type="button" class="p-1 btn col-12 text-light btn-warning" onclick="RemoveFavoritoMiddleman(${produto.codigo})">Remover dos Favoritos</button>`
          break;
      default:
          console.log('yo wth');
          break;
    }//*/
    //console.log('FINISHED LOAD');
    document.getElementById("popup-produto").classList.remove("d-none");
  }
  catch (e)
  {
    console.error('ERROR: could not open pop-up: ' + e);
  }
}

function fecharPopup() {
  document.getElementById("popup-produto").classList.add("d-none");
  storedanchor = null;
  activeitemcode = null;
}

async function refreshPopup()
{
  try {
    //console.log('trying refresh');
    //const produto = JSON.parse(storedanchor.getAttribute('data-details'));
    switch (await IsFavorited(activeitemcode))
    {
      case 0:
          document.getElementById("btn-add-popup2").innerHTML = `<button type="button" class="p-1 btn col-12 text-warning btn-outline-warning" onclick="AddFavoritoMiddleman(${activeitemcode})">Adicionar aos Favoritos</button>`
          break;
      case 1:
          document.getElementById("btn-add-popup2").innerHTML = `<button type="button" class="p-1 btn col-12 text-light btn-warning" onclick="RemoveFavoritoMiddleman(${activeitemcode})">Remover dos Favoritos</button>`
          break;
      default:
          break;
    }
    //console.log('FINISHED REFRESH');
  }
  catch (e)
  {
    console.log('ERROR: could not refresh popup: ' + e);
  }
}

function tempAlert(message, duration = 2000) {
  try
  {
    const alertContainer = document.getElementById('alert-container');
    
    const alert = document.createElement('div');
    alert.textContent = message;
    alert.style.cssText = `
    background: var(--color-green);
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: opacity 1s ease;
  `;

  alertContainer.appendChild(alert);

  setTimeout(() => {
    alert.style.opacity = '0';
    setTimeout(() => alert.remove(), 500);
  }, duration);
  }
  catch
  {
    console.log('no container to show alert');
  }
  
  
}