

import {craeteContext,useContext} from 'react';
export const Todocontext=craeteContext({
    todos: [
        {
            id:1,
            todo:"Learn React",
            completed:false
        },
        
    ],
    addTodo: (todo)=>{},
    toggleTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete:(id)=>{},
});

export const useTodo=()=>{return useContext(Todocontext)};

export const TodoProvider=Todocontext.Provider;