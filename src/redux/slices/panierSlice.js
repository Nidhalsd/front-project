import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [], 
};

const panierSlice = createSlice({
  name: 'panier',
  initialState,
  reducers: {
    addProductPanier: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(p => p.name === product.name);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find(p => p.name === action.payload.name);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(p => p.name === action.payload.name);
      if (product) {
        product.quantity -= 1;
        if (product.quantity === 0) {
          state.products = state.products.filter(p => p.name !== action.payload.name);
        }
      }
    },
    removeProductPanier: (state, action) => {
      state.products = state.products.filter(p => p.name !== action.payload.name);
    },
    clearPanier: (state) => {
      state.products = [];
    }
  },
});

export const { addProductPanier, incrementQuantity, decrementQuantity, removeProductPanier, clearPanier } = panierSlice.actions;

export default panierSlice.reducer;
