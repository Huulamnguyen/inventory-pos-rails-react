import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import storesReducer from "./features/stores/storesSlice";
import brandsReducer from "./features/brands/brandsSlice";
import suppliersReducer from "./features/suppliers/suppliersSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        stores: storesReducer,
        brands: brandsReducer,
        suppliers: suppliersReducer
    },
});

export default store;