import {configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface NavDetails {
    location: string | null;
}

const initialState: NavDetails = {
    location: 'dffd',
};

export const navDetailsSlice = createSlice({
    name: 'navDetails',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<string>): void => {
            state.location = action.payload;
        }
    }
});

export const {setLocation} = navDetailsSlice.actions;

const store = configureStore(
    {
        reducer: {
            location: navDetailsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectLocation = (state: RootState) => state.location.location;

export default store;