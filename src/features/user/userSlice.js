/*
  This code defines a Redux slice named 'userSlice' using the createSlice function from 
  the '@reduxjs/toolkit' library. The slice manages the 'currentUser' state within the Redux
  store. It initializes the 'currentUser' to 'null' in the Redux store. It also defines a 
  'setCurrentUser' action that can be dispatched to update the 'currentUser' state in the store.

  The 'userReducer' and 'setCurrentUser' action creator are exported for use in Redux store 
  configuration, while 'selectCurrentUser' is exported as a selector function to access the 
  'currentUser' state from the Redux store.
*/


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state,action) => {
            return (
                { ...state, currentUser: action.payload }
            )
        }
    }
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state) => {
    return state.user.currentUser;
};