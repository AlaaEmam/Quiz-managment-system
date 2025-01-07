import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({ //replace "create context"
    reducer: {
        auth: AuthReducer,


    }
});
type AppState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()