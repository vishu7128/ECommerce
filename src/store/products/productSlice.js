import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const loadProducts = createAsyncThunk(
    "products/loadProducts",
    async (page, {
        rejectWithValue
    }) => {
        try {
            const response = await axios.get(
                `https://fakestoreapi.com/products?limit=15&page=${page}`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loadProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = [...state.products, ...action.payload];
            })
            .addCase(loadProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const selectProducts = (state) => state.products.products;
export const selectStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;

export default productsSlice.reducer;