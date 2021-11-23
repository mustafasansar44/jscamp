import UserValidation from "./userValidation.js";

export default class CustomerValidation extends UserValidation{
    constructor(){
        super()
        this.requiredFields.push("creditCardNumber")
    }

    customerRequiredFieldCheck(customer){
        this.requiredFieldCheck(customer, this.requiredFields)
    }
}

