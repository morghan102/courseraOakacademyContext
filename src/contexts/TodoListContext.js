import React, { createContext, useReducer } from 'react';

import { todosReducer } from '../reducers/todosReducer';

export const TodoListContext = createContext();


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