import { addToCart, closeModal, openModal, removeToCart } from "./action";
import { GET_PRODUCTS_FETCH, GET_PRODUCTS_SUCCESS } from "./action";
import { createReducer } from "@reduxjs/toolkit";

export const reducer = createReducer({
    cart:[],
    products:[],
    modal: false,
    isLoading: false
}, {
    [addToCart.type]: (state, action)=>{
        state.cart = [...state.cart, action.payload]
    },
    [removeToCart.type]: (state, action)=>{
       state.cart = [...state.cart.filter(el => el !== action.payload)]
    },
    [openModal.type]: (state, action)=>{
       state.modal = true
    },
    [closeModal.type]: (state, action)=>{
       state.modal = false
    },
    [GET_PRODUCTS_FETCH]: (state) => { state.isLoading = true },
    [GET_PRODUCTS_SUCCESS]: (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
    }
})