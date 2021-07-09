import React, { createContext, useReducer } from 'react';

export const TodoListContext = createContext();

const todosReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { text: action.text, id: `${Math.random()}` }]
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id)
        default:
            return state;
    }
}

const TodoListContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todosReducer, [
        { text: 'Plan for trip', id: 1 },
        { text: 'Shop for camping trip', id: 2 },
        { text: 'Walk around block', id: 3 },
    ]);

    return (
        <TodoListContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;