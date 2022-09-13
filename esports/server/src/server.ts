import express from "express"; //Begin project with the new importation type: module

const app = express();
app.use(express.json());

app.get("/ads", (request, response) => {
  return response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
    { id: 4, name: "Anúncio 4" },
    { id: 5, name: "Anúncio 5" },
  ]);
});

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
