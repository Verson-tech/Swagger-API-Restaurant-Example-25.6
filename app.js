const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

var airplanes = [{id:0,name:"Woodshill"},{id:1,name:"Fiorellas"}]

const app = express();
app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "airplanes API",
            version: "1.0.0"
        }
    },
        apis: ["app.js"]
}
/**
 * @swagger
 * /airplanes:
 *  get:
 *      summary: get all airplanes
 *      produces:
 *          application/json
 *  responses:
 *      200: success
 *      description : an array of airplanes
 *      schema:
 *          $ref: "#definitions/airplane"
 * definitions:
 *  airplane:
 *      properties:
 *          id:
 *              type: integer
 *          name:
 *              type: string
 * 
 * 
 */


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.get("/airplanes", (req,res)=>{
    res.send(airplanes);
})

/**
 * @swagger
 * /airplane:
 *  post:
 *      summary: add a airplane
 *      requestBody:
 *          $ref: '#/components/requestBodies/airplaneBody'
 *      required:
 *          -id:
 *          -name:
 * responses:
 *          201:
 *              description: created airplane
 *
 * definitions:
 *  restaurant:
 *      properties:
 *          id:
 *              type: integer
 *          name:
 *              type: string
 * components:
 *  requestBodies:
 *      RestaurantBody:
 *          description: A JSON object of restaurant information
 *          required: true
 *          content:
 *              application/json:
 *              schema:
 *                  $ref: '#/definitions/restaurant'
 *       
 */


app.post("/airplane",(req,res)=>{
    res.send(`${req.body.name} created`)
})


app.listen(4000,()=>console.log('Listening on 4000'))