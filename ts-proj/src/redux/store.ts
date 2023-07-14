import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo.Slice";

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch //  экспортируем типы RootState и AppDispatch, чтобы они были доступны в других частях приложения