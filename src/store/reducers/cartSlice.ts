import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {addedItems: [{}]},
  reducers: {
    addItemToCart: (state) => {
      state.addedItems.push({itemName:"item"});
    },
    logIn: () => {

    }
  },
});


export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
