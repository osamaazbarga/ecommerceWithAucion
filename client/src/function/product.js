import Api from '../components/API/MainApi'

export async function createProduct(product,authtoken) {
    const req = await Api.post(`/product`,product,{
        headers:{
            authtoken
        }
    })
    return req
}


export async function getProductsByCount(count) {
    console.log("req");
    const req = await Api.get(`/products/${count}`)
    console.log("req");
    return req
}