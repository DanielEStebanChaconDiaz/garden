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

// 1. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega 
// de los pedidos que no han sido entregados a tiempo.
export const getNotTimeOut = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataUpdate = data.filter(val=>(val.date_wait < val.date_delivery))
    .map(val=>{
        return {
            code_request: val.code_request,
            code_client: val.code_client,
            date_wait: val.date_wait,
            date_delivery: val.date_delivery
        }
    });
        return dataUpdate;
}



// 2. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y 
// fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la 
// fecha esperada.
export const getTwoDaysBefore = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataUpdate = data.filter(val=>(val.date_wait > val.date_delivery))
    .map(val=>{
        return {
            code_request: val.code_request,
            code_client: val.code_client,
            date_wait: val.date_wait,
            date_delivery: val.date_delivery
        }
    });
        return dataUpdate;
}


// 1. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.

export const getRequestsRefused = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataUpdate = data.filter(val=>(val.date_request[3] === "9" && val.status === "Rechazado"))
    .map(val=>{
        return {
            code_request: val.code_request,
            code_client: val.code_client,
            date_request: val.date_request,
            date_wait: val.date_wait,
            date_delivery: val.date_delivery,
            status: val.status
        }
    });
        return dataUpdate;
}

// 2. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.

export const getRequestsDelivered = async()=>{
    let res = await fetch("http://localhost:5508/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate = data.filter(val=>(val.date_delivery != null && val.date_delivery[5] === "0" && val.date_delivery[6] === "1"))
    .map(val=>{
        return {
            code_request: val.code_request,
            code_client: val.code_client,
            date_request: val.date_request,
            date_wait: val.date_wait,
            date_delivery: val.date_delivery,
            status: val.status
        }
    });
        return dataUpdate;
}