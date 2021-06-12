import { ADD_PRODUCT, ADD_PRODUCTS } from "../types";

export function addProduct(data) {
    return {
        type: ADD_PRODUCT,
        data: data
    }
}

export function addProducts(data) {
    return {
        type: ADD_PRODUCTS,
        data: data
    }
}

export function removeProduct(data) {
    return {
        type: ADD_PRODUCT,
        data: data
    }
}
