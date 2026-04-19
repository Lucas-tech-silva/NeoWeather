# 🌤️ NeoWeather

> Aplicação Full Stack de previsão do tempo com foco em **UX/UI**, **performance** e **segurança de dados (API protegida)**.

<br>

<p align="center">
  <img src="frontend/assets/mockup/NEOWERTHER.png" alt="NeoWeather Preview" width="650" />
</p>

<p align="center">
  <i>Interface moderna, responsiva e intuitiva para consulta de clima em tempo real.</i>
</p>

<br>

---

## 🚀 Sobre o Projeto

O **NeoWeather** é uma aplicação desenvolvida do zero com o objetivo de entregar uma experiência rápida, visualmente agradável e funcional para consulta de dados climáticos.

Além do front-end interativo, o projeto implementa uma **arquitetura full stack**, garantindo **segurança da API Key** e boas práticas utilizadas no mercado.

---

## ✨ Principais Diferenciais

* 🔐 **Proteção da API Key** com backend (Node.js)
* ⚡ **Requisições otimizadas** e resposta rápida
* 🎨 Interface moderna com foco em UX/UI
* 📱 **Totalmente responsivo** (mobile-first)
* 🧱 Estrutura escalável e organizada
* 🌐 Consumo de API real (OpenWeather)

---

## 🛠️ Tecnologias Utilizadas

### 🎨 Frontend

* **HTML5** — estrutura semântica
* **CSS3** — layout moderno e responsivo
* **JavaScript (ES6+)** — lógica e interatividade

### ⚙️ Backend

* **Node.js** — ambiente de execução
* **Express** — criação de rotas e API
* **dotenv** — variáveis de ambiente
* **CORS** — comunicação segura

### 🌐 Integração

* **OpenWeatherMap API** — dados climáticos em tempo real

---

## 🔐 Arquitetura e Segurança

Para evitar exposição da API Key no front-end, foi implementado um backend intermediário.

### 🔄 Fluxo da aplicação:

```text
Frontend → Backend → OpenWeather API
```

* O frontend envia a requisição
* O backend processa e consome a API
* A chave da API permanece protegida no servidor

📌 Essa abordagem segue boas práticas utilizadas em aplicações reais.

---

## 📁 Estrutura do Projeto

```text
NeoWeather/
│
├── frontend/
│   ├── assets/
│   ├── css/
│   ├── js/
│   └── index.html
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env (não versionado)
│
└── README.md
```

---

## ▶️ Como Executar Localmente

### 🔹 Backend

```bash
cd backend
npm install
node server.js
```

Servidor local:

👉 http://localhost:3000

## 🌐 Aplicação em Produção

O projeto já está disponível online:

👉 https://neo-weather-alpha.vercel.app/

---

### 🔹 Frontend

Abra:

```
frontend/index.html
```

ou utilize o Live Server no VS Code.

---

## 📱 Responsividade

Aplicação adaptada para:

* 📱 Smartphones
* 📲 Tablets
* 💻 Desktops

---

## 📊 Melhorias Futuras

* 🌙 Modo escuro
* 📈 Gráficos de temperatura
* 📅 Previsão estendida
* ⭐ Sistema de favoritos

---

## 👨‍💻 Autor

**Lucas Silva**

* 🌐 Portfólio: https://portif-lio-nu-two.vercel.app/
* 💻 GitHub: https://github.com/Lucas-tech-silva
* 🔗 LinkedIn: https://www.linkedin.com/in/lucassilva-developer/

---

## 📌 Status

✅ Projeto concluído e funcional
🚀 Em constante evolução

---

## 💡 Insight

<p align="center">
  <i>"Projetos simples se tornam profissionais quando aplicamos arquitetura, segurança e boas práticas."</i>
</p>
