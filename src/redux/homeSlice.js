import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getHome = createAsyncThunk(
  'crypto/trending',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
      const data = await res.json();

      return data.coins;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  },
);

const initialState = {
  isLoading: false,
  trending: [],
  error: null,
};

const homeSlice = createSlice({
  name: 'trend',
  initialState,
  reducers: {
    coinFilter: (state, action) => {
      const filteredCoin = state.trending
        .filter((coin) => (
          coin.name.toLowerCase().includes(action.payload)
        ));

      return ({
        ...state,
        trending: filteredCoin,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHome.pending, () => ({
        isLoading: true,
      }))
      .addCase(getHome.fulfilled, (state, action) => ({
        ...state,
        trending: action.payload.map((item) => ({
          id: item.item.id,
          coin_id: item.item.coin_id,
          name: item.item.name,
          market_cap_rank: item.item.market_cap_rank,
          img: item.item.small,
        })),
      }))
      .addCase(getHome, (action) => ({
        error: action.payload,
      }));
  },
});

export const { coinFilter } = homeSlice;
export default homeSlice.reducer;
