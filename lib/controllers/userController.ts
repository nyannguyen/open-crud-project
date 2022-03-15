import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);
export class UserController {
    public getUsers (req: Request, res: Response) {
        User.find({}, (err, users) => {
            if(err){
                res.send(err);
            }
            res.json(users);
        });
    }

    public getUserByID (req: Request, res: Response) {
        User.findById(req.params.userId, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser (req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.userId}, 
            req.body, 
            { new : true }, 
            (err, user) => {
                if(err){
                    res.send(err);
                }
                res.json(user);
        });
    }

    public deleteUser (req: Request, res: Response) {
        User.deleteOne({ _id: req.params.userId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({msg: "DELETE_SUCCESSFULLY"});
        });
    }

    public addNewUser (req: Request, res: Response) {                
        let newUserData = new User(req.body);

        newUserData.save((err, user) => {
            if(err){
                res.send(err);
            }    
            res.json(user);
        });
    }
}
