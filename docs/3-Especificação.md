# 3. Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="2-Planejamento-Projeto.md"> Planejamento do Projeto do Software (Cronograma) </a></span>

Nesta seção, serão apresentadas as especificações do projeto, incluindo a definição do problema e a ideia de solução a partir da perspectiva do usuário. Isso será realizado por meio da definição de histórias de usuários, requisitos funcionais, requisitos não funcionais e restrições do sistema.

Técnicas e Ferramentas Utilizadas

Para estruturar a especificação do projeto, utilizamos:

Histórias de Usuário: Método para descrever as necessidades do usuário em um formato simples e intuitivo.
Requisitos Funcionais: Definição das principais funcionalidades do sistema.
Requisitos Não Funcionais: Determinação de critérios de desempenho, segurança e usabilidade.
Restrições do Sistema: Limitações e regras de negócio que devem ser seguidas.

## 3.1 Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                     |
|--------------------|----------------------------------------|----------------------------------------|
| Usuário do Sistema | Cadastrar com minha conta do Google | Evitar criar e lembrar mais uma senha  |
| Usuário do Sistema | Encontrar e comprar produtos       | Satisfazer minhas necessidades e promover o consumo consciente |
| Usuário do Sistema | Adquirir produtos naturais e aprender técnicas ecológicas | Manter uma produção saudável e ambientalmente responsável |
| Usuário do Sistema | Listar produtos por categoria   | Facilitar a organização e busca  |
| Usuário do Sistema | Cadastrar novos produtos com nome, valor, categoria e imagem      | Disponibilizar itens para venda |
| Usuário do Sistema | Editar informações dos produtos que cadastrei    | Corrigir ou atualizar detalhes |
| Usuário do Sistema | Visualizar guias de como fazer produtos sustentáveis    | Satisfazer minhas necessidades ou vender produtos com materiais naturais e sustentáveis |
| Usuário do Sistema | Salvar produtos como favoritos    | Acessar o produto posteriormente com facilidade |
| Usuário Administrador | Acessar ferramentas de administração  | Garantir um ambiente seguro  |

## 3.2 Classificação dos Requisitos Funcionais x Requisitos não Funcionais 

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                       | Prioridade |
|------|----------------------------------------------------------------------------------------------|------------|
|RF-001| O sistema deve permitir o cadastro de usuários vendedores, que têm controle sobre os produtos que oferta |    ALTA    | 
|RF-002| O sistema deve permitir o cadastro de usuários consumidores, que podem visualizar produtos ofertados |    ALTA    | 
|RF-003| O sistema deve permitir que os usuários vendedores cadastrem produtos com nome, valor, categoria e imagem |    ALTA    |
|RF-004| O sistema deve permitir que os usuários vendedores façam alterações aos atributos de seus produtos cadastrados |    ALTA    | 
|RF-005| O sistema deve permitir que os usuários vendedores excluam seus produtos cadastrados                               |    ALTA    |
|RF-006| O sistema deve permitir que os usuários consumidores visualizem todos os produtos cadastrados ou utilize filtros para refinar a busca, incluindo categorias e outras propriedades definidas |    ALTA    | 
|RF-007| O sistema deve permitir que vários produtos sejam colocados em um carrinho para a efetuação de uma compra  |    ALTA    |
|RF-008| O sistema deve permitir pagamento de compras de forma online utilizando métodos PIX, boleto bancário e cartões de crédito |    ALTA    |
|RF-009| O sistema deve disponibilizar guias de como fazer certos produtos com materiais naturais ou reutilizados, para usuários vendedores e usuários consumidores  |    ALTA    |
|RF-010| As guias do sistema devem apresentar demonstrações visuais (imagens ou videos) |    MÉDIA    |
|RF-011| O sistema deve permitir que o usuário administrador tenha controle sobre o conteúdo das guias, dos produtos e dos usuários cadastrados |    ALTA    |
|RF-012| O sistema deve permitir que o usuário salve produtos como favoritos |    MÉDIA    |

### Requisitos não Funcionais

|ID     | Descrição do Requisito                                                                                                  |Prioridade |
|-------|-------------------------------------------------------------------------------------------------------------------------|-----------|
|RNF-001| O sistema deve ser capaz de processar uma requisição de cadastro, edição ou remoção de produtos em no máximo 2 segundos |     ALTA  | 
|RNF-002| A interface do site deve ser intuitiva, fácil de usar e acessível para melhor experiência do cliente                    |     ALTA  |
|RNF-003| O site deve ser compatível com Google Chrome, Firefox e Opera                                                |   ALTA    | 
|RNF-004| O site deve garantir a segurança e consistência dos dados dos usuários                                       |   ALTA    | 
|RNF-005| O site deve ser responsivo, adaptando-se automaticamente a diferentes tamanhos de tela e dispositivos. |   ALTA    |
|RNF-006| O sistema deve armazenar os produtos favoritos de cada usuário autenticado de forma segura e persistente |   MÉDIA    |
|RNF-007| O sistema deve ser estruturado para permitir futuras expansões, como novos tipos de produtos ou funcionalidades adicionais. |   BAIXA    |
|RNF-008| Se não houverem resultados na busca de produtos, o sistema deve informar de forma clara que nenhum produto foi encontrado | ALTA |

## Restrições

|ID| Restrição                                                                                               |
|--|---------------------------------------------------------------------------------------------------------|
|01| O sistema deverá permitir a venda apenas de produtos que atendam aos critérios de sustentabilidade definidos pela política interna da empresa |
|02| O sistema deve utilizar um banco de dados MySQL para armazenar as informações dos produtos|
|03| O sistema será desenvolvido com JavaScript, Bootstrap e Handlebars |
|04| O sistema deve ser capaz de lidar com um grande volume de produtos sem comprometer o desempenho.         |
|05| O design da plataforma deve seguir os princípios de sustentabilidade, adotando layouts eficientes e minimalistas para reduzir o consumo de energia e garantir uma boa performance, tanto em servidores quanto nos dispositivos dos usuários. |


