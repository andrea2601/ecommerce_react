import { addToCart, closeModal, openModal, removeToCart } from "./action";

import { createReducer } from "@reduxjs/toolkit";

export const reducer = createReducer({
    cart:[],
    modal: false
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
})