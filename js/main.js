import { 
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil 
} from "./module/offices.js";

import { 
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAllEmployeesNotSalesReps
} from "./module/employees.js";
import { 
    getAll,
    getClientsEmploy
} from "./module/clients.js";

console.log(await getClientsEmploy());