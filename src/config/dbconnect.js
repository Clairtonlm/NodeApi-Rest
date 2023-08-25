import mongoose from "mongoose";

mongoose.connect('mongodb+srv://clairtonlm:xxxxx@notrixdev.mpbefkb.mongodb.net/livraria-node');

let db = mongoose.connection;


//para exporta no app.js
export default db;