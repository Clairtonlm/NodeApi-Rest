import express from "express";
import db from "./config/dbconnect.js";
import routes from "./routes/index.js";

//criando a conexão com banco
db.on("error", console.log.bind(console, 'Erro de conexão com Banco de dados'))
db.once('open', ()=>{
    console.log('Conexão feita com sucesso!!!');
})

const app = express();
app.use(express.json());//para poder entender arquivos json

routes(app);

export default app;