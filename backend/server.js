import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

// rota de clima
app.get("/clima", async (req, res) => {
  const cidade = req.query.cidade;

  if (!cidade) {
    return res.status(400).json({ erro: "Cidade não informada" });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric&lang=pt_br`
    );

    if (!response.ok) {
      return res.status(404).json({ erro: "Cidade não encontrada" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar clima" });
  }
});

// iniciar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});