import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

//Connect to MongoDB
mongoose.connect(process.env.DATABASE);
const db = mongoose.connection;
db.on('Connected', () => {
    console.log('Connecté à la base de données MongoDB');
});

//Middlewares
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());

//Routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});