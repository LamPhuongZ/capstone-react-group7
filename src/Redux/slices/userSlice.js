import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../Services/loginAPI";

export const login = createAsyncThunk("user/login", async (values) => {
  try {
    const response = await loginUser(values);
    // lưu accessToken từ api trả về vào localStorage
    const { accessToken } = response.data.content;
    localStorage.setItem("accessToken", accessToken);
    return response.data.content;
  } catch (error) {
    return error;
  }
});

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;