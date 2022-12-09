import { useCallback, useEffect, useReducer } from "react";
import { TodoItem } from "../models/todo";

type State = TodoItem[];
type Action = { type: 'LOAD', payload: State } | { type: 'TOGGLE', payload: number }

const initialState: State = [];

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOAD':
            return action.payload;
        case 'TOGGLE':
            const newState = [...state];
            const item = newState.find(item => item.id === action.payload);
            if (item) {
                item.completed = !item.completed;
            }
            return newState;
        default:
            return [...state]
    }
}

export const useTodo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const load = useCallback(() => {
        fetch('http://localhost:5000/todos').then(async res => {
            const data = await res.json();
            dispatch({ type: 'LOAD', payload: data });
        })
    }, [])

    const addTodo = useCallback((text: string) => {
        const todoItem: Omit<TodoItem, 'id'> = {
            text,
            completed: false,
        }
        fetch('http://localhost:5000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(todoItem)
        }).then(load)
    }, [])

    const deleteTodo = useCallback((id: number) => {
        fetch(`http://localhost:5000/todos/${id}`, {
            method: 'DELETE'
        }).then(load)
    }, [])

    const toggleTodo = useCallback((id: number) => {
        const item = state.find(item => item.id === id);
        dispatch({ type: 'TOGGLE', payload: id });
        fetch('http://localhost:5000/todos/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                completed: !item.completed
            })
        })
    }, [state])

    useEffect(() => {
        load();
    }, [])

    return {
        state,
        load,
        addTodo,
        deleteTodo,
        toggleTodo
    }
}

