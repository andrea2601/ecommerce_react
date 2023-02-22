import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("addToCart");
export const removeToCart = createAction("removeToCart");

export const openModal = createAction("openModal");
export const closeModal = createAction("closeModal");

export const GET_PRODUCTS_FETCH = "GET_PRODUCTS_FETCH";
export const getProductsFetch = createAction(GET_PRODUCTS_FETCH);
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const getProductsSUCCESS = createAction(GET_PRODUCTS_SUCCESS);
