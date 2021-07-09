import React, { createContext, useState } from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {text: 'Plan for trip', id: 1},
        {text: 'Shop for camping trip', id: 2},
        {text: 'Walk around block', id: 3},
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, {text: todo, id: `${Math.random()}`}]);
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }

    return (
        <TodoListContext.Provider value={{todos, addTodo, removeTodo}}>
            {children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;