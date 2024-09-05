import { Router } from "express";

const docesRoutes = Router();

const guloseimas = [
  {
    id: 1,
    nome: "Trufa",
    preco: 8.5,
  },
  {
    id: 2,
    nome: "Brigadeiro",
    preco: 4.0,
  },
  {
    id: 3,
    nome: "Fini",
    preco: 9.99,
  },
];

//Rotas para buscar todos os  elementos do array guloseimass
docesRoutes.get("/", (req, res) => {
  return res.status(200).send(guloseimas);
});

// Rota para criar nova guloseimas
docesRoutes.post("/", (req, res) => {
  const { nome, preco } = req.body;

  const novoDoce = {
    id: guloseimas.length + 1,
    nome: nome,
    preco: preco,
  };

  guloseimas.push(novoDoce);

  return res.status(201).send(guloseimas);
});

// Rota para buscar um elemento específico do array guloseimas
docesRoutes.get("/:id", (req, res) => { 
    const { id } = req.params

    console.log(id);

    const guloseima = guloseimas.find((doce) => doce.id === Number(id));

    console.log(guloseima);

    if (!guloseima) {
        return res.status(404).send({ message: "Guloseima não encontrada!"});
    }

    return res.status(200).send(guloseima);
});

export default docesRoutes;

