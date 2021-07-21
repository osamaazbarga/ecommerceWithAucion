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
    const req = await Api.get(`/products/${count}`)
    return req
}


export async function removeProduct(slug,authtoken) {
    const req = await Api.delete(`/product/${slug}`,{
        headers:{
            authtoken
        }
    })
    console.log(req);
    return req
    
}