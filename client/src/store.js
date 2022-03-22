import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import categoriesReducer from "./features/categories/categoriesSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer
    },
});

export default store;