// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getAllEstates = async () => {
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            code: val.code_request,
            status: val.status
        }
    })
    return dataUpdate;
}
// 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:
export const getAllCodigo2008 = async()=>{
    let res = await fetch("http://localhost:5508/requests?date_request ")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        if(val.date_request[3] === "8"){
            return {
                date_request: val.date_request
            }
        }
    })
    return dataUpdate;
}