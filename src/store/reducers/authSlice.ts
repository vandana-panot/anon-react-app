import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authDetails = {
  userDetails: {
    userName: '',
    userEmail: '',
    userPassword: '',
    token: '',
  },
  loginDetails: {
    email: '',
    password: ''
  },
  isLoggedIn: false,
  data: []
}

export const fetchData = createAsyncThunk("fetchData", async () => {
  console.log("ffff")
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
})

const authSlice = createSlice({
  name: "authorization",
  initialState: authDetails,
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    })
  },
  reducers: {
    loggedOut: (state) => {
      state.isLoggedIn = true;
    },
    logIn: (state, action) => {
      state.loginDetails = action.payload;
    }
  },
});


export const { loggedOut, logIn } = authSlice.actions;

export default authSlice.reducer;
