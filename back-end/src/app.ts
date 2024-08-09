import express from 'express'
import appRoutes from './index'
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express()
const port = process.env.PORT;
app.use(cors())

app.use(express.json());

appRoutes(app)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
