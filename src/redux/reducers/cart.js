import {
    CART_ADD, CART_REMOVE, CART_DECREMENT
} from '../constants/cart';

const INITIAL_STATE = {
    products: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CART_ADD:
            let doesExists = state.products.filter(item => item.id === action.payload.id)
            console.log(doesExists, "this is add scene with id exist")
            if (doesExists.length) {
                return {
                    ...state,
                    products: state.products.map(item => {
                        if (action.payload.id === item.id) {
                            return { ...item, quntity: item.quntity + 1 };
                        }
                        return item;
                    })
                }
            } else {
                return {
                    ...state,
                    products: [...state.products, action.payload]
                }
            }
        case CART_DECREMENT:

            let ItemToUpdate = state.products.find(item => item.id === action.payload.id);

            if (ItemToUpdate.quntity > 1) {
                let Sub = state.products.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quntity: item.quntity - 1 };
                    }
                    return item;
                });
                return {
                    ...state,
                    products: Sub
                }
            } else {
                return {
                    ...state,
                    products: state.products.filter(item => item.id !== action.payload.id)
                }
            }

        case CART_REMOVE:
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload.id)
            }

        default:
            return state;
    }
}
