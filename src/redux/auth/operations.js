import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to register"
      );
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/login`, userData);
      return response.data; // contains token and user data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to login"
      );
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post(`${BASE_URL}/users/logout`);
    return {}; // No data returned on success
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data || "Failed to log out"
    );
  }
});
export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/current`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch current user"
      );
    }
  }
);
