# 🌤️ NeoWeather

> Aplicação Full Stack para consulta de previsão do tempo em tempo real, com foco em **performance, integração de APIs e responsividade**.

<br>

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Express](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white)
![API](https://img.shields.io/badge/API-OpenWeather-blue?style=for-the-badge)

</div>

<br>

<p align="center">
  <img src="frontend/assets/mockup/NEOWERTHER.png" alt="NeoWeather Preview" width="650" />
</p>

<p align="center">
  <i>Interface moderna, responsiva e intuitiva para visualização de dados climáticos em tempo real.</i>
</p>

<br>

---

## 🚀 Visão Geral

O **NeoWeather** é uma aplicação full stack desenvolvida do zero para fornecer dados climáticos em tempo real de forma rápida, intuitiva e visualmente agradável.

O projeto também implementa uma arquitetura segura, garantindo que a **API Key não seja exposta no frontend**, seguindo boas práticas utilizadas em aplicações profissionais.

<br>

---


## ✨ Principais Funcionalidades

* 🔐 Proteção da API Key com backend intermediário (Node.js)
* ⚡ Consultas rápidas e otimizadas de dados climáticos
* 🎨 Interface moderna com foco em experiência do usuário (UX/UI)
* 📱 Layout totalmente responsivo (mobile-first)
* 🌐 Integração com API real de clima (OpenWeatherMap)
* 🧱 Estrutura organizada e escalável
  
<br>

---

## 🧠 Desafios que resolvi

* 🔥 Integração entre frontend e backend sem expor a API Key
* 🌐 Deploy do backend no Render e frontend na Vercel
* ⚙️ Configuração de CORS para comunicação entre domínios diferentes
* ❌ Tratamento de erro para cidades inválidas na API
* 🚀 Deploy e configuração de variáveis de ambiente (.env)
* 🧩 Correção de problemas de “Failed to fetch” em produção
  
<br>

---

## 🛠️ Tecnologias Utilizadas

### 🎨 Frontend
- HTML5 (estrutura semântica)
- CSS3 (estilização responsiva)
- JavaScript ES6+ (interatividade e consumo de API)

### ⚙️ Backend
- Node.js (runtime JavaScript)
- Express (criação de API e rotas)
- dotenv (gerenciamento de variáveis de ambiente)
- CORS (controle de acesso entre aplicações)

### 🌐 API
- OpenWeatherMap API (dados climáticos em tempo real)

<br>

---

## 🔐 Arquitetura da Aplicação

Para garantir segurança e boas práticas, a aplicação utiliza um backend intermediário para proteger credenciais sensíveis.

### Fluxo de dados:

```text
Frontend → Backend → OpenWeather API
```

* O frontend envia a requisição
* O backend processa e consome a API
* A chave da API permanece protegida no servidor

📌 Essa abordagem segue boas práticas utilizadas em aplicações reais.

<br>

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
│   └── .env
│
└── README.md
```

---

<br>

## ▶️ Como Executar Localmente

### 🔹 Backend

```bash
cd backend
npm install
node server.js
```

Servidor local:

👉 http://localhost:3000

<br>

## 🌐 Aplicação em Produção

O projeto já está disponível online:

👉 https://neo-weather-iota.vercel.app/

<br>

---

### 🔹 Frontend

Abra:

```
frontend/index.html
```

ou utilize o Live Server no VS Code.


<br>

---

## 📱 Responsividade

Aplicação adaptada para:

* 📱 Smartphones
* 📲 Tablets
* 💻 Desktops
  
<br>

---

## 📊 Melhorias Futuras

* 📈 Gráficos de temperatura
* 📅 Previsão estendida
* ⚡ Histórico de cidades pesquisadas
* 📍 Geolocalização automática
  
<br>

---

## 👨‍💻 Autor

**Lucas Silva**

* 🌐 Portfólio: https://portif-lio-nu-two.vercel.app/
* 💻 GitHub: https://github.com/Lucas-tech-silva
* 🔗 LinkedIn: https://www.linkedin.com/in/lucassilva-developer/
* 📧 Email: [lucassilva1710@yahoo.com](mailto:lucassilva1710@yahoo.com?subject=Oportunidade&body=Olá%20Lucas,%0A%0AVi%20o%20projeto%20NeoWeather%20e%20gostaria%20de%20falar%20sobre%20uma%20oportunidade.%0A)

<br>

---

## 📌 Status

✅ Projeto concluído e funcional
🚀 Em constante evolução

<br>

---

## 💡 Insight

<p align="center">
<p align="center"> “Um projeto se torna profissional quando une arquitetura, performance e boas práticas reais de mercado.” </p>

