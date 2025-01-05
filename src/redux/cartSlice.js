import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: JSON.parse(localStorage.getItem('cartItems')) || [],
      totalQuantity: 0, // إضافة المتغير
    },
    reducers: {
      incrementQuantity: (state, action) => {
        const item = state.items.find((item) => item.id === action.payload);
        if (item) {
          item.quantity += 1;
        }
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0); // تحديث
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      },
      decrementQuantity: (state, action) => {
        const item = state.items.find((item) => item.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        } else if (item && item.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0); // تحديث
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      },
      addItem: (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        if (item) {
          item.quantity += action.payload.quantity || 1;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0); // تحديث
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      },
      loadCartFromLocalStorage: (state) => {
        state.items = JSON.parse(localStorage.getItem('cartItems')) || [];
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0); // تحديث
      },
    },
  });
  

export const { incrementQuantity, decrementQuantity, loadCartFromLocalStorage, addItem } = cartSlice.actions;
export default cartSlice.reducer;
