import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const findId = state.cartList.findIndex((v) => v.itemId === action.payload);
      if (findId != -1) {
        state.cartList[findId].quantitySelected += 1;
      } else {
        state.cartList.push({ itemId: action.payload, quantitySelected: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const findId = state.cartList.findIndex((v) => v.itemId === action.payload);
      if (findId != -1) {
        state.cartList[findId].quantitySelected -= 1;
        if (state.cartList[findId].quantitySelected == 0) {
          state.cartList.splice(findId, 1);
        }
      }
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, removeFromCart } = actions;
export default reducer;
