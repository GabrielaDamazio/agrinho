# 🌱 Energia Renovável na Propriedade Rural

## Projeto para o Agrinho 2026 - Paraná (PR)

![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![Licença](https://img.shields.io/badge/licença-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como material de apoio para o **Concurso Agrinho 2026 - Paraná**, abordando o tema oficial:

> **"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"**

O site apresenta um estudo completo sobre a implementação de **energias renováveis** em propriedades rurais, destacando:

- ✅ Tipos de fontes renováveis aplicáveis ao campo (Solar, Eólica, Biogás, Micro PCH)
- ✅ Vantagens econômicas e ambientais da transição energética
- ✅ **Simulador financeiro interativo** que calcula economia mensal, anual e tempo de retorno do investimento
- ✅ Design moderno, responsivo e acessível

O conteúdo é direcionado a **estudantes, educadores e produtores rurais** que desejam entender na prática como a energia limpa pode transformar a realidade do campo.

---

## 🎯 Tema Oficial do Agrinho 2026 - PR

> **"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"**

**Eixo temático abordado:** Energia Renovável na Propriedade Rural

**Palavras-chave:** Sustentabilidade, Inovação, Economia Circular, Agroecologia, Transição Energética

---

## 🚀 Demonstração

### Funcionalidades do Simulador

| Função | Descrição |
| :--- | :--- |
| **Conta de luz mensal** | Usuário informa o valor médio da fatura de energia |
| **Percentual de redução** | Escolhe entre 75%, 90% ou 95% de economia com sistema solar |
| **Investimento inicial** | Informa o custo estimado do sistema fotovoltaico |
| **Resultados gerados** | Economia mensal, economia anual, tempo de payback, lucro em 10 anos |

### Exemplo de Cálculo
Conta de luz mensal: R
950
,
00
R
e
d
u
c
\c
a
~
o
:
90
I
n
v
e
s
t
i
m
e
n
t
o
:
R
950,00Redu 
c
\c
​
  
a
~
 o:90Investimento:R 18.500,00

Resultados:
✅ Economia mensal: R
855
,
00
✅
E
c
o
n
o
m
i
a
a
n
u
a
l
:
R
855,00✅Economiaanual:R 10.260,00
✅ Payback: 1,8 anos
✅ Economia em 10 anos: R$ 102.600,00

text

---

## 📁 Estrutura do Projeto
agrinho-energia-renovavel/
│
├── index.html # Estrutura HTML completa do site
├── style.css # Estilos CSS (responsivo, animações)
├── script.js # Lógica do simulador e interações
└── README.md # Documentação do projeto

text

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5** | Estrutura semântica do site |
| **CSS3** | Estilização, layout responsivo e animações |
| **JavaScript (ES6+)** | Simulador financeiro, interações e eventos |
| **Font Awesome 6** | Ícones vetoriais |
| **Google Fonts** | Fontes Poppins e Inter |

---

## 📦 Como Executar o Projeto

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de texto (opcional, para edição)

### Passo a passo

1. **Crie uma pasta** para o projeto (ex: `agrinho-energia-renovavel`)

2. **Crie os 4 arquivos** dentro dessa pasta:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`

3. **Copie o conteúdo de cada arquivo** conforme fornecido

4. **Abra o arquivo `index.html`** no seu navegador

5. **Interaja com o simulador**:
   - Altere os valores da conta de luz e investimento
   - Escolha o percentual de redução
   - Clique em "Calcular economia anual"
   - Pressione **Enter** nos campos para recalcular automaticamente

---

## 🧠 Como o Simulador Funciona (Lógica)

```javascript
economiaMensal = contaMensal * (reducaoPercentual / 100)
economiaAnual = economiaMensal * 12
paybackAnos = investimento / economiaAnual
economia10Anos = economiaAnual * 10
lucro10Anos = economia10Anos - investimento
Todos os valores são exibidos em formato de moeda brasileira (R$) e atualizados em tempo real.

🎨 Personalização
Alterar cores principais
No arquivo style.css, modifique as cores:

css
/* Cores principais do tema */
header {
    background: linear-gradient(135deg, #0F4C2E 0%, #1C6E3C 100%);
}

.btn {
    background-color: #F4B942;  /* Amarelo do botão */
}

.section-title {
    color: #0F4C2E;  /* Verde escuro dos títulos */
}
Alterar imagens placeholder
No index.html, substitua as URLs https://placehold.co/... pelas suas próprias imagens.

Adicionar novas fontes de energia
No index.html, dentro da seção #tipos, adicione um novo card:

html
<div class="card">
    <i class="fas fa-fire"></i>
    <h3>Energia Geotérmica</h3>
    <p>Descrição da nova fonte de energia...</p>
</div>
📱 Responsividade
O projeto é totalmente responsivo e se adapta aos seguintes tamanhos de tela:

Dispositivo	Largura	Comportamento
Desktop	> 1024px	Layout completo com cards lado a lado
Tablet	768px - 1024px	Cards em 2 colunas, fonte reduzida
Mobile	< 768px	Menu empilhado, cards em 1 coluna, hero ajustado
🌟 Destaques do Projeto para o Agrinho
Critério	Como o projeto atende
Inovação	Simulador interativo que demonstra na prática a viabilidade financeira da energia solar
Sustentabilidade	Aborda fontes limpas, redução de emissões e economia circular (biogás)
Aplicabilidade real	Dados baseados em propriedades rurais do Paraná
Educação	Conteúdo explicativo sobre tipos de energia e vantagens
Tecnologia	HTML5, CSS3 e JavaScript puro (sem dependências externas pesadas)
📚 Referências e Fontes
SENAR-PR - Programa Agrinho

ANEEL - Geração Distribuída

EMBRAPA - Energia na Agricultura

COPEL - Energia Solar Rural

🤝 Contribuição
Contribuições são bem-vindas! Para contribuir:

Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/nova-fonte)

Commit suas alterações (git commit -m 'Adiciona nova fonte de energia')

Push para a branch (git push origin feature/nova-fonte)

Abra um Pull Request

📄 Licença
Este projeto está sob a licença MIT. Você pode usar, modificar e distribuir livremente, desde que mantenha os créditos.

👨‍🌾 Créditos
Desenvolvido como material educativo para o Concurso Agrinho 2026 - Paraná.

Tema abordado: Energia Renovável na Propriedade Rural

Objetivo: Incentivar estudantes e produtores a adotarem soluções sustentáveis no campo, alinhadas ao desenvolvimento econômico e ambiental.

📧 Contato
Para dúvidas, sugestões ou parcerias:

Projeto Agrinho - SENAR-PR

⭐ Avalie este projeto
Se este material foi útil para o seu projeto do Agrinho, deixe uma ⭐ no repositório!

🌿 Energia renovável não é o futuro — é o presente que transforma o campo.

*Agrinho 2026 - Agro forte, futuro sustentável*

text

---

## 📝 Instruções:

1. **Copie todo o conteúdo acima** (do `# 🌱 Energia Renovável...` até o final)

2. **Crie um arquivo chamado `README.md`** na mesma pasta do seu projeto

3. **Cole o conteúdo** no arquivo

4. **Salve o arquivo**

A estrutura final da sua pasta deve ficar assim:
agrinho-energia-renovavel/
├── index.html
├── style.css
├── script.js
└── README.md

text

Pronto! Agora você tem os 4 arquivos completos para o seu projeto do Agrinho 2026! 🚀🌱
