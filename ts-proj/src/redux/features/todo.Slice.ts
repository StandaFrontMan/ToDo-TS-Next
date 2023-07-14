import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITodo { // тип элемента массива
    id: string;
    text: string;
    complited: boolean;
}

interface TodoState { // тип массива
    todos: ITodo[];
}

const initialState: TodoState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => { // добавляем элемент в массив todos
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
                complited: false
            })
        },
        removeTode: (state, action: PayloadAction<string>) => { // удаляем элемент из массива todoos 
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        markAsDone: (state, action: PayloadAction<string>) => { // ставим чекбокс в состояние выполнено или не выполнено
            const toggledTodo = state.todos.find(todo => todo.id === action.payload);
            if (toggledTodo) {
                toggledTodo.complited = !toggledTodo.complited;
            }
        }
    }
});

export const { addTodo, removeTode, markAsDone } = todoSlice.actions; // экспорт редусерав
export default todoSlice.reducer; // экспорт редюсера
