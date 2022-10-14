import {createContext, useCallback, useContext, useEffect, useReducer, useState} from "react";
import {act} from "react-dom/test-utils";

const initProductState = [];
const ProductContext = createContext(initProductState)

export const useProducts = () => {
    return useContext(ProductContext)
}

export const productActionTypes = {
    AddToCart: 'ADD_TO_CART',
    RemoveFromCart: 'REMOVE_FROM_CART',
    IncreaseQuantityToProduct: 'INCREASE_QTY_TO_PRODUCT',
    DecreaseQuantityToProduct: 'DECREASE_QTY_FROM_PRODUCT',
}


const productsReducer = (products, action) => {
    switch (action.type) {
        case productActionTypes.AddToCart: {
            // if product did not exist
            if (!products.find(product => product.id === action.payload.id)) {
                return [...products, {...action.payload, qty: 1}]
            }
            return products
        }
        case productActionTypes.RemoveFromCart:
            return products.filter(product => product.id !== action.payload.id)
        case productActionTypes.IncreaseQuantityToProduct: {
            return products.map(product => {
                if (product.id === action.payload.id) {
                    return {...product, qty: product.qty + 1}
                } else {
                    return product
                }
            })
        }
        case productActionTypes.DecreaseQuantityToProduct: {
            return products.map(product => {
                if (product.id === action.payload.id) {
                    if (product.qty === 1) {
                        return product;
                    }
                    return {...product, qty: product.qty - 1}
                }
                return product
            })
        }
        default:
            return products;
    }
}

export const ProductContextProvider = ({children}) => {

    const [products, dispatch] = useReducer(productsReducer, initProductState, () => [])
    const addToCart = useCallback((product) => dispatch({type: productActionTypes.AddToCart, payload: product}), [])
    const removeFromCart = useCallback((product) => dispatch({
        type: productActionTypes.RemoveFromCart,
        payload: product
    }), [])
    const increaseProductQuantity = useCallback((product) => dispatch({
        type: productActionTypes.IncreaseQuantityToProduct,
        payload: product
    }), [])
    const decreaseProductQuantity = useCallback((product) => dispatch({
        type: productActionTypes.DecreaseQuantityToProduct,
        payload: product
    }), [])

    const value = {
        products,
        addToCart,
        removeFromCart,
        increaseProductQuantity,
        decreaseProductQuantity
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}