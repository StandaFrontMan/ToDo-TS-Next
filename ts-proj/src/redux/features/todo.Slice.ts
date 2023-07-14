import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITodo {
    id: string;
    text: string;
    complited: boolean;
}

interface TodoState {
    todos: ITodo[];
}

const initialState: TodoState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        
    }
})
