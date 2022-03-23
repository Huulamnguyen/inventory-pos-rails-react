import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStores = createAsyncThunk("stores/fetchStores", () => {
    return fetch("/stores")
        .then( r => r.json())
        .then(data => data)
});

const storesSlice = createSlice({
    name: "stores",
    initialState: {
        entities: [], // array of stores
        status: "idle", // loading state
    },
    reducers: {
        storeAdded(state, action){
            state.entities.push(action.payload);
        },
        storeRemoved(state, action){
            const index = state.entities.findIndex(s => s.id === action.payload)
            state.entities.splice(index, 1);
        },
    },
    extraReducers: {
        // handle async actions: pending, fulfilled, rejected (for errors)
        [fetchStores.pending](state) {
            state.status = "loading";
        },
        [fetchStores.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
    },
})

export const { storeAdded, storeRemoved} = storesSlice.actions;
export default storesSlice.reducer;