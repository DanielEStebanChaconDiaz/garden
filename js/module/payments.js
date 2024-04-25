// 3. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. 
// Ordene el resultado de mayor a menor.
export const getAllPaymentsPaypal = async () => {
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate = data.filter(val =>(val.date_payment[3] === "8" && val.payment === "PayPal"))
    .map(val=>{
        return {
            code_client: val.code_client,
            payment: val.payment,
            date_payment: val.date_payment,
            total: val.total
        }
    }).sort((a,b) => b.total - a.total);
        return dataUpdate;
}
