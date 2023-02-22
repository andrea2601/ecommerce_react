import { call, put, takeEvery } from "redux-saga/effects";

function productsFetch() {
   return fetch("https://fakestoreapi.com/products/").then(res => res.json());
}

function* workGetProductsFetch() {
    
    const payload = yield call(productsFetch);
    yield put({ type: "GET_PRODUCTS_SUCCESS", payload })
}

function* mySaga() {
    yield takeEvery("GET_PRODUCTS_FETCH", workGetProductsFetch);
}

export default mySaga;