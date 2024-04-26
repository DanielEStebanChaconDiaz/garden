import { 
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil 
} from "./module/offices.js";

import { 
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAllEmployeesNotSalesReps,
    getAll
} from "./module/employees.js";
import { 
    getAll2,
    getClientsEmploy
} from "./module/clients.js";

console.log(await getAll());