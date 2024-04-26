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
