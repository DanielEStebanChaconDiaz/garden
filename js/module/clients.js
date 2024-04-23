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