import { errors } from "../../data/users.js";
import { CUSTOMER, EMPLOYEE } from "../../initialValues/initialValues.js";
import DataError from "../../models/dataError.js"

export default class ErrorHandler {
    constructor(customerValidation, employeeValidation){
        this.customerValidation = customerValidation;
        this.employeeValidation = employeeValidation
    }

    isValid(user){
        switch (user.type) {
            case CUSTOMER:
                if (!this.customerValidation.customerRequiredFieldCheck(user) && !this.customerValidation.userAgeIsNumber(user)) {
                    return true;
                }
                break;
            case EMPLOYEE:
                if (!this.employeeValidation.employeeRequiredFieldCheck(user) && !this.employeeValidation.userAgeIsNumber(user)) {
                    return true;
                }
                break;
            default:
                errors.push(new DataError("Wrong user type", user)) 
                break;
        }
    }
}