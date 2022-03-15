import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'FIRSTNAME_MISSING'
    },
    lastName: {
        type: String,
        required: 'LASTNAME_MISSING'
    },
    age: {
        type: Number,
        required: 'AGE_MISSING'
    },
    email: {
        type: String            
    },
    company: {
        type: String            
    },
    phone: {
        type: Number            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
