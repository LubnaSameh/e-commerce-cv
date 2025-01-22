import { createSlice } from "@reduxjs/toolkit";

// Retrieve data from localStorage
const initialCartState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalQuantity: Math.max(0, JSON.parse(localStorage.getItem("totalQuantity")) || 0), // Ensure non-negative
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    // Add an item to the cart
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity += 1;

      // Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
    },

    // Increment quantity of an item
    incrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;

        // Update localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.items));
        localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
      }
    },

    // Decrement quantity of an item
    decrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        if (state.totalQuantity > 0) {
          state.totalQuantity -= 1;
        }
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        if (state.totalQuantity > 0) {
          state.totalQuantity -= 1;
        }
      }

      // Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
    },

    // Clear the cart
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;

      // Update localStorage
      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalQuantity");
    },

    // Load cart from localStorage
    loadCartFromLocalStorage(state) {
      state.items = JSON.parse(localStorage.getItem("cartItems")) || [];
      state.totalQuantity =
        Math.max(0, JSON.parse(localStorage.getItem("totalQuantity")) || 0);
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
