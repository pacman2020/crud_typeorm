import "reflect-metadata";
import './database'
import * as express from "express";
import 'express-async-errors'
import { Request, Response, NextFunction } from "express";
import userRoutes from "./routes/userRoutes";
import suggestionRoutes from "./routes/suggestionRoutes";
import authenticationRoutes from "./routes/autheticationRoute";
import * as cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

//routes
app.use(userRoutes)
app.use(authenticationRoutes)
app.use(suggestionRoutes)

app.use((err: Error, request: Request , response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

// start express server
app.listen(process.env.PORT || 3000, () => {
    console.log("http://localhost:3000/suggestion");
});

