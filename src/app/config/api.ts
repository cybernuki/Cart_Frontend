import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'http://<url_to_api>' : 'http://localhost:3000';
export const prefix = '/api'

export const productsUrl = `${baseUrl}${prefix}/products`
export const carstUrl = `${baseUrl}${prefix}/carts`
export const productCarsUrl = `${baseUrl}${prefix}/product_cars`