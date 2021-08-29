import Api from '../components/API/MainApi'

// export const userCart = async (cart, authtoken) => {
//     return await Api.post(`${process.env.REACT_APP_API}/user/cart`, { cart }, {
//         headers: {
//             authtoken
//         }
//     })
// }

export async function userCart(cart, authtoken) {
    const req = await Api.post('/user/cart', { cart }, {
        headers: {
            authtoken
        }
    })
    return req
}

export async function getUserCart(authtoken) {
    const req = await Api.get('/user/cart',  {
        headers: {
            authtoken
        }
    })
    return req
}


export async function emptyUserCart(authtoken) {
    const req = await Api.delete('/user/cart', {
        headers: {
            authtoken
        }
    })
    return req
}

export async function saveUserAddress(authtoken,address) {
    const req = await Api.post('/user/address', { address }, {
        headers: {
            authtoken
        }
    })
    return req
}

export async function applyCoupon(authtoken,coupon) {
    const req = await Api.post('/user/cart/coupon', { coupon }, {
        headers: {
            authtoken
        }
    })
    return req
}

export async function createOrder(stripeResponse,authtoken) {
    const req = await Api.post('/user/order', { stripeResponse }, {
        headers: {
            authtoken
        }
    })
    return req
}

export async function getUserOrders(authtoken) {
    console.log("before");
    const req = await Api.get('/user/orders', {
        headers: {
            authtoken
        }
    })
    console.log(req);
    return req
}