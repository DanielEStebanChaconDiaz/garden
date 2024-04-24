// Devuelve un listado con el nombre de los todos los clientes españoles.
export const getAllFullName = async()=>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return {
            name: val.client_name,
            fullLastname: `${val.contact_lastname}`,
            country: val.country,
            city: val.city,
        }
    })
    return dataUpdate;
}


import{
    getEmployByCode
} from './employees.js'
import{
    getEmployOfficesByCode
} from './offices.js'

export const getClientsEmploy = async()=>{
    let res = await fetch("http://localhost:5501/clients")
    let clients = await res.json();
    for(let i=0; i<clients.length; i++) {
        let {
            limit_credit,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            id:idclients,
            ...clientsUpdate
        } = clients[i];
        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let{
            extension,
            email,
            code_boss,
            position,
            id: idemploy,
            ...employUpdate
        } = employ
        let [office] = await getEmployOfficesByCode(employUpdate.code_office)
        let{
            country:countryOffice,
            region:regionOffice,
            postal_code:postalCodeOffice,
            movil,
            address1:address1Office,
            address2:address2Office,
            id:idOffice,
            ...officeUpdate
        } = office
        // employUpdate.code_office = officeUpdate
        // clientsUpdate.code_employee_sales_manager =employUpdate;
        let date = {...officeUpdate, ...employUpdate, ...clientsUpdate}
        let{
            code_employee_sales_manager:code_employee_sales_manager,
            code_office:code_office,
            lastname1: lastname1employee,
            lastname2: lastname2employee,
            name: nameemployee,
            client_code: clientCode,
            employee_code: employee_code,
           ...dateUpdate
        } = date
        dateUpdate.employee_name = `${nameemployee} ${lastname1employee} ${lastname2employee}`
        clients[i] = dateUpdate
    }
    return clients;
}