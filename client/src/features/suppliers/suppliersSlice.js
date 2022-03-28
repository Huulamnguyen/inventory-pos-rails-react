import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSuppliers = createAsyncThunk("suppliers/fetchSuppliers", () => {
    return fetch("/suppliers")
        .then(r => r.json())
        .then(data => data)
})

const suppliersSlice = createSlice({
    name: "suppliers",
    initialState: {
        entities: [],
        status: "idle",
    },
    reducers: {
        supplierAdded(state, action){
            state.entities.push(action.payload);
        },
        supplierRemoved(state, action){
            const index = state.entities.findIndex(s => s.id === action.payload)
            state.entities.splice(index, 1);
        },
    },
    extraReducers: {
        // handle async actions: pending, fulfilled, rejected (for errors)
        [fetchSuppliers.pending](state) {
            state.status = "loading";
        },
        [fetchSuppliers.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
    },
})

export const { supplierAdded, supplierRemoved} = suppliersSlice.actions;
export default suppliersSlice.reducer;