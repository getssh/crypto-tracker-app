import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getCoin = createAsyncThunk(
  'crypto/coins',
  async (coinId, {rejectWithValue}) => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&market_data=true`)
      const data = await res.json()
  
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
)

const initialState = {
  isLoading: false,
  coins: {},
  error: null,
}

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getCoin.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getCoin.fulfilled, (state, action) => {
      state.coins = action.payload;
      state.isLoading = false;
    })
    .addCase(getCoin.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
  }
})

export default coinSlice.reducer;