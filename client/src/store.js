import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import storesReducer from "./features/stores/storesSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        stores: storesReducer
    },
});

export default store;