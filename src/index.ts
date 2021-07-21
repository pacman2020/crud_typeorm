import "reflect-metadata";
import * as express from "express";
import userRoutes from "./routes/userRoutes";
import './database'


// create express app
const app = express();
app.use(express.json());

//routes
app.use(userRoutes)
// app.use('suggestion',suggestionRoutes)

// start express server
app.listen(process.env.PORT || 3000, () => {
    console.log("http://localhost:3000/users to see results");
});

