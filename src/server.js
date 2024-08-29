import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 4000

const app = express()
app.use(express.json())

const guloseimas = [
    {
        id: 1, 
        nome: "Trufa",
        preco: 8.5,
    },
    {
        id: 2,
        nome:"Brigadeiro",
        preco: 4.0,
    },
    {
        id: 3,
        nome: "Fini",
        preco: 9.99,

    }
]

const filmesMarcantes = [
    {
        id: 1001,
        titulo: "É assim que acaba",
        genero: "Romance e drama",
        emCartaz: true
    },
    {
        id: 1122,
        titulo: "Crepusculo",
        genero: "Romance",
        emCartaz: false
    },
    {  
        id: 2024,
        titulo: "Divertidamente 2",
        genero: "Animação",
        emCartaz: true


    }
]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!"})
});

app.get("/doces", (req, res) => {
    return res.status(200).send(guloseimas);
});
app.post("/doces", (req, res) => {
    const {nome, preco} = req.body;

    const novoDoce = { 
        id: guloseimas.length + 1,
        nome: nome,
        preco: preco,     
    };

    guloseimas.push(novoDoce);
    
    return res.status(200).send(guloseimas);
});

app.get("/Filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes);
});


app.listen(port, () =>{
    console.log(`✌ Server started on http://localhost:${port}`)
})
