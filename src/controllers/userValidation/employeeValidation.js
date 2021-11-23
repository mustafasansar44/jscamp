import UserValidation from "./userValidation.js";

export default class EmployeeValidation extends UserValidation{
    constructor(){
        super()
        this.requiredFields.push("salary")
    }

    employeeRequiredFieldCheck(employee){
        this.requiredFieldCheck(employee, this.requiredFields)
    }

}