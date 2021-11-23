import { errors } from "../../data/users.js";
import DataError from "../../models/dataError.js";

export default class UserValidation{
    constructor(){
        this.requiredFields = ["id", "firstName", "lastName", "age", "city"];
        this.hasErrors = false;
        
    }

    
    requiredFieldCheck(user, localRequiredFields){
        localRequiredFields.forEach(field => {
            if (!user[field]) {
                this.hasErrors = true
                errors.push(new DataError(`Validation problem. ${field} is required`, user))
                return this.hasErrors
            }
        });
    }

    userAgeIsNumber(user){
        if (Number.isNaN(Number.parseInt(user.age))) {
            this.hasErrors = true
            errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user)) 
            return this.hasErrors
        }
    }
    
}