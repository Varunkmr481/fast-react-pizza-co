import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // payload = newItem

      state.cart.push(action.payload);
      //   state.cart = [...state.cart, action.payload];
    },
    deleteItem: (state, action) => {
      // payload = pizzaId

      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      // payload = pizzaId

      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity: (state, action) => {
      // payload : pizzaId

      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// These selectors can cause performance issues, use reselect library for optimising these selector functions

export const getCart = (state) => state.cart.cart;

// iterates over an array and reduces it to a single value
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, currItem) => sum + currItem.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, currItem) => sum + currItem.totalPrice, 0);
