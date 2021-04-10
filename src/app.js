const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

require('./db/connection');
require('dotenv').config();
const PORT = process.env.PORT;
const errors = require('./error-middleware');

const router =  require('./routers/index');
const app = express();
app.use(cors());
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Company Management Backend API",
        description:
          "A simple backend API to manage companies",
        termsOfService: "http://companymanagement.com/terms/",
        contact: {
          name: "API Support",
          url: "http://www.companymanagement.com/support",
          email: "expertsanoy@gmail.com",
        },
        license: {
          name: "Apache 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0.html",
        },
        version: "1.0.1",
        servers: ["http://localhost:3000"],
      },
      servers: [
        {
            url: "https://company-management-node-expres.herokuapp.com",
        },
    ],
    },
    apis: ["src/routers/*.js"],
  };
app.use("/api/v1", router);
const swaggerSpec = swaggerJsDoc(options);


app.use(express.json());

app.use("/api/v1", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errors.notFound);
app.use(errors.errorHandler);
app.listen(PORT, ()=>{
    console.log(`Server is started on PORT: ${PORT}`)
});