import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/estado", (_request, response) => {
  response.json({
    ok: true,
    mensaje: "API de practica Git Flow funcionando",
    version: "1.0.0"
  });
});

const server = app.listen(port);

server.on("listening", () => {
  console.log(`API disponible en http://localhost:${port}/api/estado`);
});

server.on("error", (error) => {
  console.error(`No se pudo iniciar la API en el puerto ${port}.`);
  console.error(error.message);
  process.exit(1);
});
