import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("addToCart");
export const removeToCart = createAction("removeToCart");

export const openModal = createAction("openModal");
export const closeModal = createAction("closeModal");
