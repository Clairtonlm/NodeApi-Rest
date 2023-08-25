//cada rota rota que tiver deve estar aqui
import  Express  from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js";

//criar rotas
const routes = (app)=>{
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo: "Curso de node"})
    })
    app.use(
        Express.json(), 
        livros,
        autores
        );
        
       
}

export default routes;