document.addEventListener("DOMContentLoaded", function () {
  const tutoriais = {
    inseticida: {
      titulo: "Inseticida Natural para Hortas Sustentáveis",
      video: "https://www.youtube.com/embed/6Sh5OEsctIA",
      descricao: `
        <p>Neste tutorial, você aprenderá como produzir um inseticida natural utilizando ingredientes acessíveis, sustentáveis e livres de produtos químicos. Essa receita é ideal para quem cultiva hortas orgânicas, plantas ornamentais ou busca uma alternativa ecológica aos produtos industrializados.</p>
        <h6 class="mt-4">🧪 Ingredientes Necessários:</h6>
        <ul>
          <li>1 litro de água morna</li>
          <li>10 gotas de óleo de Neem (natural e prensado a frio)</li>
          <li>1 colher de sopa de sabão neutro ou sabão de coco líquido (biodegradável)</li>
          <li>1 borrifador limpo e seco</li>
        </ul>
        <h6 class="mt-4">🌿 Benefícios:</h6>
        <ul>
          <li>✔️ Produto 100% natural e seguro para o meio ambiente</li>
          <li>✔️ Afasta pragas como pulgões, cochonilhas e lagartas</li>
          <li>✔️ Não agride a planta e pode ser usado em alimentos</li>
          <li>✔️ Baixo custo e fácil preparo</li>
        </ul>
        <p class="mt-4">Com essa receita, você garante a saúde das suas plantas e contribui com práticas mais conscientes no cultivo caseiro. O uso do óleo de Neem é uma alternativa eficaz, natural e amplamente reconhecida por quem adota uma rotina de jardinagem ecológica.</p>
      `,
      passos: [
        "Ferva ou aqueça levemente 1 litro de água para ajudar na diluição dos ingredientes.",
        "Em um recipiente, adicione a água morna.",
        "Pingue as 10 gotas de óleo de Neem e misture bem.",
        "Adicione o sabão líquido e continue misturando até obter uma solução homogênea.",
        "Transfira o conteúdo para um borrifador limpo.",
        "Agite antes de cada aplicação.",
        "Borrife diretamente sobre as folhas das plantas, especialmente no verso, onde os insetos se concentram.",
        "Repita a aplicação 1 a 2 vezes por semana, preferencialmente em horários de pouco sol."
      ]
    },
    lavanda: {
      titulo: "Como Plantar Lavanda em Casa",
      video: "https://youtube.com/embed/_YoIOH9nVxc",
      descricao: `
        <p>Este tutorial ensina a cultivar lavanda de forma prática e sustentável. A lavanda é uma planta aromática e ornamental, excelente para jardins e varandas.</p>
        <h6 class="mt-4">🌱 Materiais Necessários:</h6>
        <ul>
          <li>Vaso com furos de drenagem</li>
          <li>Pedrinhas para drenagem</li>
          <li>Terra rica em matéria orgânica</li>
          <li>Sementes ou mudas de lavanda</li>
        </ul>
        <h6 class="mt-4">🌿 Benefícios:</h6>
        <ul>
          <li>✔️ Aromática e calmante</li>
          <li>✔️ Atrai polinizadores</li>
          <li>✔️ Fácil de cultivar</li>
        </ul>
        <p class="mt-4">Com os cuidados certos, você terá uma lavanda saudável, perfumada e cheia de vida em poucos meses.</p>
      `,
      passos: [
        "Escolha um vaso com furos para drenagem.",
        "Adicione pedrinhas no fundo do vaso.",
        "Coloque terra rica em composto orgânico.",
        "Plante as sementes ou mudas e cubra levemente.",
        "Regue com moderação e evite encharcamento.",
        "Mantenha em local com sol direto por pelo menos 4 horas por dia."
      ]
    },
    adubo: {
      titulo: "Adubo Orgânico Caseiro: Compostagem Fácil",
      video: "https://youtube.com/embed/E_o1HipHEhU",
      descricao: `
        <p>Compostagem doméstica feita com resíduos de cozinha. Transforme lixo orgânico em adubo nutritivo para suas plantas.</p>
        <h6 class="mt-4">♻️ O que você vai precisar:</h6>
        <ul>
          <li>Restos de vegetais, frutas, borra de café</li>
          <li>Folhas secas ou serragem</li>
          <li>Recipiente ventilado (composteira ou balde com furos)</li>
        </ul>
        <p class="mt-4">Com o tempo e a mistura correta, você terá um adubo rico e sustentável para sua horta ou jardim.</p>
      `,
      passos: [
        "Separe os resíduos orgânicos em casa: frutas, legumes, borra de café.",
        "Coloque-os em uma composteira alternando com folhas secas ou serragem.",
        "Misture a cada 2 ou 3 dias para arejar.",
        "Evite restos de carne, gordura e produtos industrializados.",
        "Após 30 a 60 dias, utilize o adubo pronto em seus vasos ou canteiros."
      ]
    },
    neem: {
      titulo: "Repelente Natural com Neem – Proteção Ecológica",
      video: "https://youtube.com/embed/jUg7xkEGDx8",
      descricao: `
        <p>Crie um repelente eficaz contra insetos usando óleo de Neem. Solução segura e natural para pele e ambientes.</p>
        <h6 class="mt-4">🧴 Ingredientes:</h6>
        <ul>
          <li>200ml de água</li>
          <li>10 gotas de óleo de Neem</li>
          <li>1 colher de álcool de cereais</li>
        </ul>
        <p class="mt-4">Ideal para aplicar em casa ou diretamente na pele com segurança.</p>
      `,
      passos: [
        "Adicione a água em um frasco spray.",
        "Pingue as gotas de óleo de Neem.",
        "Misture com o álcool de cereais.",
        "Agite bem antes de usar.",
        "Borrife no ambiente ou na pele (testar antes em pequena área)."
      ]
    },
    folhas: {
      titulo: "Quadro com Folhas Secas – Arte Ecológica",
      video: "https://youtube.com/embed/GQ7Ukud-3sg",
      descricao: `
        <p>Transforme folhas naturais em quadros decorativos sustentáveis.</p>
        <h6 class="mt-4">🍁 Materiais:</h6>
        <ul>
          <li>Folhas secas prensadas</li>
          <li>Papel de fundo (kraft ou reciclado)</li>
          <li>Moldura</li>
          <li>Cola branca</li>
        </ul>
        <p class="mt-4">Dê vida à decoração da sua casa com elementos da natureza.</p>
      `,
      passos: [
        "Escolha folhas secas e prense entre livros.",
        "Corte um papel de fundo no tamanho da moldura.",
        "Cole as folhas de forma criativa.",
        "Enquadre com vidro e moldura.",
        "Pendure ou apoie onde quiser."
      ]
    },
    tomate: {
      titulo: "Cultive Tomate Cereja em Vasos – Ideal para Iniciantes",
      video: "https://youtube.com/embed/b1h43PWNGnE",
      descricao: `
        <p>Aprenda a plantar tomate cereja de forma prática em pequenos espaços.</p>
        <h6 class="mt-4">🍅 Você vai precisar de:</h6>
        <ul>
          <li>Vaso profundo com furos</li>
          <li>Terra adubada</li>
          <li>Sementes de tomate cereja</li>
          <li>Estaca ou suporte (opcional)</li>
        </ul>
        <p class="mt-4">Ideal para apartamentos, varandas ou hortas verticais.</p>
      `,
      passos: [
        "Encha o vaso com terra adubada.",
        "Plante as sementes a 1cm de profundidade.",
        "Regue todos os dias sem encharcar.",
        "Mantenha em local ensolarado.",
        "A colheita começa em cerca de 60 a 90 dias."
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const tutorial = tutoriais[id];
  const container = document.getElementById("tutorial-container");

  if (!tutorial) {
    container.innerHTML = "<p class='text-danger'>Tutorial não encontrado.</p>";
    return;
  }

  const listaPassos = tutorial.passos.map(p => `<li>${p}</li>`).join("");

  container.innerHTML = `
    <div class="col-md-8 offset-md-2">
      <h2 class="mb-3">${tutorial.titulo}</h2>
      <div class="ratio ratio-16x9 mb-4">
        <iframe src="${tutorial.video}" allowfullscreen></iframe>
      </div>
      ${tutorial.descricao}
      <h5 class="mt-4">🛠️ Passo a Passo:</h5>
      <ol>${listaPassos}</ol>
      <a href="${tutorial.video.replace('embed', 'watch')}" class="btn btn-success mt-4" target="_blank">Assistir diretamente no YouTube</a>
      <a href="guias.html" class="btn btn-secondary mt-2 d-block">← Voltar para tutoriais</a>
    </div>
  `;
});
