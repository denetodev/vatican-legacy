# Vatican Legacy 🕊️

Uma elegante Landing Page desenvolvida com Angular 19 para celebrar a vida, obra e legado do Papa Francisco — uma homenagem digital a um dos líderes religiosos mais impactantes da era moderna.

![Vatican Legacy - Preview](src/assets/pope-francis.jpeg)

---

## 🌟 Visão Geral

**Vatican Legacy** é uma aplicação web que oferece uma experiência imersiva para apresentar a trajetória, os feitos e a espiritualidade do Papa Francisco. Com um design inspirado em páginas comerciais de lançamentos de produtos, a proposta é transmitir sua essência e impacto global de forma respeitosa e moderna.

Desenvolvida com Angular 19 em modo standalone, a aplicação prioriza performance, acessibilidade e responsividade.

---

## ✨ Funcionalidades

- ✅ **Design Responsivo**: Otimizado para desktop, tablet e smartphones
- 🧩 **Arquitetura Modular**: Componentes independentes e reutilizáveis
- 🎞️ **Animações Suaves**: Transições fluidas e envolventes
- 🎨 **SCSS Moderno**: Uso de variáveis, mixins e funções personalizadas
- ⚡ **Alta Performance**: Estrutura leve com carregamento rápido
- ♿ **Acessibilidade**: Segue as diretrizes da WCAG para inclusão digital

---

## 🛠️ Tecnologias Utilizadas

- **Angular 19** (com `standalone: true`)
- **TypeScript**
- **SCSS** (utilizando `@use` ao invés de `@import`)
- **Font Awesome** (ícones)
- **HTML5 + CSS3**

---

## 📁 Estrutura do Projeto

```bash
vatican-legacy/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── about/
│   │   │   ├── cta/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── legacy/
│   │   │   ├── quotes/
│   │   │   └── timeline/
│   │   ├── models/
│   │   ├── services/
│   │   ├── views/
│   │   │   └── home/
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   └── images/
│   ├── styles/
│   │   ├── _animations.scss
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/vatican-legacy.git
cd vatican-legacy
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
ng serve
```

### 4. Acesse a aplicação

Abra seu navegador em: `http://localhost:4200`

---

## 📦 Build de Produção

Para gerar a versão otimizada para produção:

```bash
ng build --configuration production
```

Os arquivos finais estarão disponíveis no diretório `dist/`.

---

## 🎨 Personalização

O projeto foi criado com uma estrutura flexível que permite fácil personalização:

- **Cores e Temas**: Altere as variáveis em `src/styles/_variables.scss`
- **Textos e Conteúdo**: Atualize os dados em `src/app/services/pope-data.service.ts`
- **Componentes e Layouts**: Edite os componentes localizados em `src/app/components/`

---

## 🤝 Contribuições

Contribuições são muito bem-vindas!

1. Faça um fork do repositório
2. Crie sua branch de feature:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Commit suas alterações:

   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```

4. Faça o push para a branch:

   ```bash
   git push origin feature/nova-funcionalidade
   ```

5. Abra um Pull Request explicando suas mudanças

---

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](https://chatgpt.com/c/LICENSE).

---

## 👨‍💻 Autor

Desenvolvido com ❤️ por Neto
🌐 [deneto.com.br](https://deneto.com.br/)