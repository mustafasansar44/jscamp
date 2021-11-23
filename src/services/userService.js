import { userController } from "../controllers/userController.js"
import { customers, employees, users } from "../data/users.js"

export default class UserService {
    constructor(loggerService, errorHandler) {
        this.employees = employees
        this.customers = customers
        this.loggerService = loggerService

    }
    load() {
        for (const user of users) {
            userController(user)
        }
    }

    add(user) {
        userController(user)
        this.loggerService.log(user)
    }

    listCustomers() {
        return this.customers
    }

    getCustomerById(id) {
        return this.customers.find(u => u.id === id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1;
            } else if (customer1.firstName === customer2.firstName) {
                return 0;
            } else {
                return -1
            }
        })

    }




}
