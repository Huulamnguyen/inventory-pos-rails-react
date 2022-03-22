import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", () => {
    return fetch("/categories")
    .then(r => r.json())
    .then(data => data)
})

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        entities: [], // array of categories
        status: "idle", // loading state
    },
    reducers: {
        categoryAdded(state, action){
            state.entities.push(action.payload);
        },
        categoryRemoved(state, action){
            const index = state.entities.findIndex(c => c.id === action.payload)
            state.entities.splice(index, 1);
        }
    },
    extraReducers: {
        // handle async actions: pending, fulfilled, rejected (for errors)
        [fetchCategories.pending](state) {
            state.status = "loading";
        },
        [fetchCategories.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
    },
})

export const { categoryAdded, categoryRemoved } = categoriesSlice.actions;
export default categoriesSlice.reducer;