import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBrands = createAsyncThunk("brands/fetchBrands", () => {
    return fetch("/brands")
        .then(r => r.json())
        .then(data => data)
})

const brandsSlice = createSlice({
    name: "brands",
    initialState: {
        entities: [],
        status: "idle"
    },
    reducers: {
        brandAdded(state, action){
            state.entities.push(action.payload)
        },
        brandRemoved(state, action){
            const index = state.entities.findIndex(brand => brand.id === action.payload)
            state.entities.splice(index, 1);
        }
    },
    extraReducers: {
        [fetchBrands.pending](state) {
            state.status = "loading";
        },
        [fetchBrands.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
    }
})
export const { brandAdded, brandRemoved} = brandsSlice.actions;
export default brandsSlice.reducer;