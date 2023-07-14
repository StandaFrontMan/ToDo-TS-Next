import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {

    }
});

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch //  экспортируем типы RootState и AppDispatch, чтобы они были доступны в других частях приложения