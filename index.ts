// @ts-ignore
import express, {Express, Request, Response} from "express";
import mongoose from "mongoose";
import customerController from "./controller/Customer";
import deviceController from "./controller/Device";
import usageController from "./controller/Usage";




const app: Express = express();
app.use(express.json());

mongoose.connect("mongodb+srv://markospaltser:gqNkzVIdEupFmQQp@cluster0.4fbofow.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/customer', customerController);
app.use('/device', deviceController);
app.use('/usage', usageController);


app.listen(3000, () => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});