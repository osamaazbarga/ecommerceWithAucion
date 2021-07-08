import Api from '../components/API/MainApi'

export async function createProduct(product,authtoken) {
    const req = await Api.post(`/product`,product,{
        headers:{
            authtoken
        }
    })
    return req
}