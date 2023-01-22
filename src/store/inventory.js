import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    itemsList: [
      { itemName: "Eggs", quantityAvailable: 10, itemId: "eggs-cnp" },
      { itemName: "Bread", quantityAvailable: 5, itemId: "bread-0x2" },
      { itemName: "Soap", quantityAvailable: 10, itemId: "soap-1jci" },
      { itemName: "Shampoo", quantityAvailable: 0, itemId: "shampoo-9c0sj" },
      { itemName: "Candles", quantityAvailable: 10, itemId: "Candles-lxf" },
      { itemName: "Butter", quantityAvailable: 2, itemId: "butter-cios" },
    ],
  },
  reducers: {
    reduceQuantity: (state, action) => {
      let findId = state.itemsList.findIndex(
        (v) => v.itemId === action.payload
      );
      // console.log(findId)
      if (state.itemsList[findId].quantityAvailable > 0) {
        state.itemsList[findId].quantityAvailable -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      let findId = state.itemsList.findIndex(
        (v) => v.itemId === action.payload
      );
      if (state.itemsList[findId].quantityAvailable >= 0) {
        state.itemsList[findId].quantityAvailable += 1;
      }
    },
  },
});

const { actions, reducer } = inventorySlice;
export const { reduceQuantity, increaseQuantity } = actions;
export default reducer;
