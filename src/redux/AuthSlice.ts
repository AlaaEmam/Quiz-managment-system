import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  role?: string;
  [key: string]: any;
}

interface AuthState {
  token: string | null;
  user: JwtPayload | null;
  role: string | null;
  error: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  user: localStorage.getItem('token')
    ? jwtDecode<JwtPayload>(localStorage.getItem('token') as string)
    : null,
  role: localStorage.getItem('token')
    ? jwtDecode<JwtPayload>(localStorage.getItem('token') as string).role || null
    : null,
  error: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      const token = action.payload;
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        state.token = token;
        state.user = decoded;
        state.role = decoded.role || null;
        localStorage.setItem('token', token);
      } catch (error) {
        console.error('Invalid token:', error);
        state.token = null;
        state.user = null;
        state.role = null;
        state.error = 'Failed to decode token';
      }
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;
      state.role = null;
      state.error = null;
      localStorage.removeItem('token');
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setToken, clearToken, setError, clearError } = AuthSlice.actions;
export default AuthSlice.reducer;
