import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertProduct = payload => api.post('/product', payload)
export const getAllProducts = () => api.get('/products')
export const updateProductById = (id, payload) => api.put(`/product/${id}`, payload)
export const deleteProductById = id => api.delete(`/product/${id}`)
export const getProductById = id => api.get(`/product/${id}`)

const apis = {
    insertProduct,
    getAllProducts,
    updateProductById,
    deleteProductById,
    getProductById,
}

export default apis
