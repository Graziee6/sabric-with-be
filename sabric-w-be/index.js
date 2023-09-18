import express from "express";
import swaggerUI from "swagger-ui-express";
import cors from "cors";

import connection from "./src/config/db.js";
import adminRoutes from "./src/routes/user.routes.js";
import swaggerDoc from "./swagger.js";
const app = express();
const port = process.env.PORT || 3400;

connection();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", adminRoutes);
app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});