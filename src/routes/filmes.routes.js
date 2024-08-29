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
app.get("/Filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes);
});

