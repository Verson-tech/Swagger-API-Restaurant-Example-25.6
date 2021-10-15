const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

var airplanes = [{id:0,name:"Cesna"},{id:1,name:"Boeing"}]

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))



app.get("/airplanes", (req,res)=>{
    res.send(airplanes);
})
app.post("/airplane",(req,res)=>{
    airplanes.push({id:req.body.id, name:req.body.name})
    res.send(`${JSON.stringify(airplanes)} created`)
})
app.delete("/airpalne/:id", (req,res)=>{
    console.log('delete:id:'+req.params.id)
    airplanes = airplanes.filter(item=> item.id != req.params.id)
    res.send("airplanes left:"+JSON.stringify(airplanes));
})

app.listen(4000,()=>console.log('Listening on 4000'))