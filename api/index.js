import express from 'express';
import dotenv from 'dotenv';
import db from '../database/configdb.js';
import userRoutes from '../routes/user.routes.js';
import User from '../models/user.js';

dotenv.config();

db.connectDB();

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.get('/', (req, res) => {
    res.send({message: 'hello world'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running is port http://localhost:${PORT}/`);
});