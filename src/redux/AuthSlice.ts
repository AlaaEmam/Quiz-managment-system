import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const initialState = {
    token: localStorage.getItem('token') || null,
    user: null,
    error: null
};
const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
            state.user = jwtDecode(action.payload);
        },
        clearToken: (state) => {
            state.token = null;
            state.user = null
            localStorage.removeItem('token');
        }
    }
});

export const { setToken, clearToken } = AuthSlice.actions;
export default AuthSlice.reducer; 
