# 🌤️ NeoWeather

**NeoWeather** é uma aplicação de previsão do tempo desenvolvida com foco em **experiência do usuário (UX)**, **interface futurista e intuitiva (UI)** e design responsivo.

O projeto foi criado 100% do zero — desde a **identidade visual**, **layout**, até a **arquitetura full stack**, incluindo um backend para proteção da API.

<br><br>

<p align="center">
  <img src="frontend/assets/mockup/NEOWERTHER.png" alt="Mockup do site NeoWeather" width="600" />
</p>

<p align="center">
  <i>Aplicação responsiva, leve e intuitiva para acompanhar o clima em tempo real. ☀️🌧️🌙</i>
</p>

<br>

---

## 🚀 Tecnologias Utilizadas

### 🎨 Frontend

* 🔹 **HTML5** — estrutura semântica e organizada
* 🔹 **CSS3** — responsividade e design moderno
* 🔹 **JavaScript (ES6+)** — manipulação do DOM e interatividade

### ⚙️ Backend

* 🔹 **Node.js** — ambiente de execução JavaScript no servidor
* 🔹 **Express** — criação de rotas e API
* 🔹 **dotenv** — gerenciamento seguro de variáveis de ambiente
* 🔹 **CORS** — comunicação entre front-end e back-end

### 🌐 API

* 🔹 **OpenWeatherMap API** — fornecimento de dados climáticos em tempo real

<br>

---

## 🧠 Sobre o Projeto

O **NeoWeather** permite que o usuário consulte a previsão do tempo de forma rápida, prática e visualmente agradável.

### ✨ Funcionalidades:

* 🌍 Busca de clima por cidade
* 🌡️ Exibição de temperatura, umidade e vento
* 🌦️ Ícones dinâmicos conforme o clima
* 📱 Layout responsivo (mobile, tablet e desktop)
* ⚙️ Código organizado e escalável

<br>

---

## 🔐 Segurança da Aplicação

Para evitar a exposição da API Key no front-end, foi implementado um backend com Node.js.

### 🔄 Fluxo da aplicação:

```
Frontend → Backend → API OpenWeather
```

✔️ A requisição é feita pelo front-end
✔️ O backend processa e chama a API
✔️ A chave da API fica protegida no servidor

Essa abordagem segue boas práticas de segurança utilizadas no mercado.

<br>

---

## 📁 Estrutura do Projeto

```
NeoWeather/
│
├── frontend/
│   ├── assets/
│   │    └── mockup/
│   ├── css/
│   │    └── style.css
│   ├── js/
│   │    └── script.js
│   └── index.html
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env (não versionado)
│
└── README.md
```

<br>

---

## ▶️ Como Rodar o Projeto

### 🔹 1. Clonar o repositório

```
git clone https://github.com/Lucas-tech-silva/neo-weather
```

---

### 🔹 2. Rodar o backend

```
cd backend
npm install
node server.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

### 🔹 3. Rodar o frontend

Abra o arquivo:

```
frontend/index.html
```

ou utilize o **Live Server** no VS Code.

<br>

---

## 📱 Responsividade

O site foi desenvolvido com foco em responsividade, garantindo uma excelente experiência em:

* 📱 Smartphones
* 📲 Tablets
* 💻 Desktops

<br>

---

## 🛠️ Autor

Desenvolvido por **Lucas Ferreira** 💻

* 🌐 Portfólio: https://portif-lio-nu-two.vercel.app/
* 💻 GitHub: https://github.com/Lucas-tech-silva
* 🔗 LinkedIn: https://www.linkedin.com/in/lucassilva-developer/

<br>

---

## 📌 Status do Projeto

✅ Concluído

💡 Futuras melhorias:

* 🌙 Modo escuro
* 📊 Gráficos de temperatura
* 📅 Previsão estendida
* ⭐ Sistema de cidades favoritas

<br>

---

## 🎉 Fun Fact

<p align="center">
  <i>🌤️ "Programar é dominar a arte da adaptação — assim como o clima muda constantemente, transformamos desafios em soluções que brilham como o sol após a tempestade."</i>
</p>

<br>

<p align="center">
  <img src="https://media1.tenor.com/m/GtDkRSPU9CgAAAAC/cloud-weather.gif" width="300" />
</p>

<br>
