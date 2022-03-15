import {Request, Response} from "express";
import { UserController } from "../controllers/userController";

export class UserRoutes {       
    public userController: UserController = new UserController();

    public routes(app): void {          
        app.route('/user')
        .get(this.userController.getUsers)
        .post(this.userController.addNewUser)
        
        app.route('/user/:userId')
        .get(this.userController.getUserByID)
        .put(this.userController.updateUser)
        .delete(this.userController.deleteUser)
    }
}