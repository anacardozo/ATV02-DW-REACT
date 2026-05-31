# The Kuromi's Book ✦ 2026

Um acervo literário digital interativo que consome a API pública da Open Library. Este projeto une tecnologia moderna a uma estética mística e minimalista, focado na experiência do usuário e na reatividade.

---

## 🎯 Sobre a Atividade

O objetivo principal desta atividade é praticar o consumo de APIs REST no ecossistema do React e Next.js, aplicando conceitos fundamentais de componentização, reatividade e gerenciamento de estados.

### Componentes Técnicos Aplicados:
* **Hooks do React:** Uso estratégico de `useState` para controle de fluxos (dados da API, termos de busca e modais) e `useEffect` para ciclos de vida e requisições assíncronas.
* **Comunicação entre Componentes:** Passagem de dados via *props* de forma unidirecional. O estado da busca é elevado do componente filho `SearchBar` para a página principal (`Home`), que por sua vez alimenta o componente `BookList`.
* **Estilização Isolada:** Uso de **CSS Modules** para garantir escopo local e evitar colisões de classes de estilo.
* **Componentes Nativos Next.js:** Otimização de imagens externas com o componente `<Image>` e controle de metadados com `<Head>`.
* **Experiência do Usuário (UX):** Implementação de *Skeleton Loaders* para suavizar a transição visual enquanto os dados assíncronos estão sendo carregados do servidor.

---

## 🔮 O Tema e Estética

Inspirado no universo mágico, gótico e refinado (com uma sutil referência ao estilo da personagem *Kuromi*), o design visual adota:

* **Paleta de Cores Noturna:** Contraste marcante entre fundos profundos, tons pastéis místicos (lilás e rosa claro) e detalhes dourados para dar o aspecto de um "grimório antigo".
* **Microinterações:** Efeitos de *hover* refinados com elevação tridimensional dos cards, sombras suaves e o surgimento de runas/estrelas (`✦`) indicando elementos clicáveis.
* **Layout Simétrico:** Exibição organizada em um Grid responsivo de **4 cards por fileira** em telas grandes, adaptando-se perfeitamente para 2 colunas ou coluna única em dispositivos móveis.

---

## 🛠️ Como Funciona o Fluxo do App

1. **Estado Inicial:** Ao abrir a página, o aplicativo faz uma busca automática trazendo **16 obras clássicas** diretamente da API.
2. **Barra de Pesquisa Reativa:** O usuário pode digitar um título, autor ou gênero na `SearchBar`. Ao clicar em "Buscar" ou apertar a tecla Enter, o estado global na página principal é atualizado.
3. **Consumo Dinâmico (Axios):** O componente de listagem detecta a mudança de texto e faz um disparo instantâneo para a rota da API com o novo termo pesquisado, limitando o resultado em 16 cards.
4. **Modal de Detalhes:** Ao clicar em **"Ler mais ✦"**, a aplicação abre um Modal com foco total (fundo escuro e desfoque), exibindo dados ricos do livro (primeira edição, editoras, idiomas disponíveis e temas).

---

## 🚀 Como Executar o Projeto

Certifique-se de ter o Node.js instalado em sua máquina.

```bash
# 1. Clone o repositório
git clone [(https://github.com/anacardozo/ATV02-DW-REACT.git)]

# 2. Acesse a pasta do projeto
cd nome-do-projeto

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
