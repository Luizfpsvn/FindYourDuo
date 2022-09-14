import express from "express"; //Begin project with the new importation type: module

const app = express();
app.use(express.json());

// HTTP methods / API Restful

app.get("/games", (request, response) => {
  return response.json([]);
});

app.post("/ads", (request, response) => {
  return response.status(201).json(["ads"]);
});

app.get("/games/:id/ads", (request, response) => {
  // const gameId = request.params.id;

  return response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
    { id: 4, name: "Anúncio 4" },
    { id: 5, name: "Anúncio 5" }
  ]);
});

app.get("/ads/:id/discord", (request, response) => {
  const adId = request.params.id;

  return response.send(adId);
});

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
