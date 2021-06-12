import { ADD_PRODUCT, ADD_PRODUCTS, REMOVE_PRODUCT } from "../types";

const initalState = {
    products: []
};

export default function(state = initalState, action){
    switch(action.type){
        case ADD_PRODUCTS: {
            return {products: action.data}
        }
        case ADD_PRODUCT: {
            let {products} = state;
            products.push(action.data);
            return {products: products};
        }
        case REMOVE_PRODUCT: {
            let {products} = state;
            let {id} = action.data;
            products.splice(id, 1);
            return {products: products};
        }
        default: {
            return state;
        }
    }
}