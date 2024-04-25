import express from 'express';
import cors from 'cors';


const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

const workers = [{name: "Jaume Barrios", dpt: "Innovación"}, {name: "Celia Pallarés", dpt: "RRHH"}, {name: "Patricia Monteagudo", dpt: "RRHH"}, {name: "Nicolas Manero", dpt: "Innovación"}] 

app.get("/workers", (req, res)=>{
    res.json(workers);
})

app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000');
})

/**/