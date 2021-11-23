import { customers, employees } from "../data/users.js";
import { CUSTOMER, EMPLOYEE } from "../initialValues/initialValues.js";
import ErrorHandler from "./errorHandler/errorHandler.js";
import CustomerValidation from "./userValidation/CustomerValidation.js";
import EmployeeValidation from "./userValidation/EmployeeValidation.js";


let errorHandler = new ErrorHandler(new CustomerValidation(), new EmployeeValidation())

export function userController(user) {
    if(errorHandler.isValid(user)){
        switch (user.type) {
            case CUSTOMER:
                customers.push(user)
                break;
            case EMPLOYEE:
                employees.push(user)
                break;
            default:
                break;
        }          
    }

}