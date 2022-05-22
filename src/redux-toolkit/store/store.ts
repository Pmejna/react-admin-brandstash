import {configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
        setLocation: (state, action: PayloadAction<string>) => {
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

type RootState = ReturnType<typeof store.getState>;

export const selectLocation = (state: RootState) => state.location.location;

export default store;