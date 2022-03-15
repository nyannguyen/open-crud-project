import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { UserRoutes } from "./routes/userRoutes";
import * as dotenv from 'dotenv';

class App {

    public app: express.Application;
    public userRoutes: UserRoutes = new UserRoutes();

    constructor() {
        this.app = express();
        this.config();        
        dotenv.config();
        this.mongoSetup();
        this.userRoutes.routes(this.app);
    }

    private mongoSetup(): void{
        (mongoose as any).Promise = global.Promise;     
        console.log(process.env.MONGO_URL);   
        mongoose.connect(process.env.MONGO_URL);    
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;
