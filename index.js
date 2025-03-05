import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import numRoute from "./src/router/number.routes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT =process.env.PORT || 3500;

//Middleware
app.use(cors());
app.use(express.json());

 app.use('/api/classify-number', numRoute);


app.get('/',(req, res) => {
    res.send('Number Properties API is running');
    });

    // Start the server
    const server = app.listen(PORT, () => {
        console.log((`Server is runing on port ${PORT}`));
    });