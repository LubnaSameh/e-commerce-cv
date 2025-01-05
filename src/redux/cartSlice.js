import { createSlice } from '@reduxjs/toolkit';

// استرجاع البيانات من localStorage
const initialCartState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  totalQuantity: JSON.parse(localStorage.getItem('totalQuantity')) || 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    // إضافة عنصر للكارت
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity += 1;

      // تحديث localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    },

    // زيادة كمية عنصر
    incrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;

        // تحديث localStorage
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
      }
    },

    // تقليل كمية عنصر
    decrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;

        // تحديث localStorage
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity -= 1;

        // تحديث localStorage
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
      }
    },

    // إعادة تعيين الكارت
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;

      // تحديث localStorage
      localStorage.removeItem('cartItems');
      localStorage.removeItem('totalQuantity');
    },

    // تحميل الكارت من localStorage
    loadCartFromLocalStorage(state) {
      state.items = JSON.parse(localStorage.getItem('cartItems')) || [];
      state.totalQuantity = JSON.parse(localStorage.getItem('totalQuantity')) || 0;
    },
  },
});

export const {
  addItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  loadCartFromLocalStorage,
} = cartSlice.actions;
export default cartSlice.reducer;
