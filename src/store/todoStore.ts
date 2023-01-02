import { createEvent, createStore } from 'effector'
import { IStore, IToDo } from '../interfaces/Todo'
import { v4 as uuidv4 } from 'uuid'

export const setNewTodo = createEvent<string>()
export const addTodo = createEvent()
export const deleteTodo = createEvent<string>()
export const toggleTodoStatus = createEvent<string>()

export default createStore<IStore>({
    todos: [],
    newTodoTitle: '',
})
    .on(setNewTodo, (state, newTodo) => ({
        ...state,
        newTodoTitle: newTodo,
    }))
    .on(addTodo, (state) => ({
        ...state,
        newTodoTitle: '',
        todos: [
            ...state.todos,
            {
                id: uuidv4(),
                title: state.newTodoTitle,
                completed: false,
            } as IToDo,
        ],
    }))
    .on(toggleTodoStatus, (state, id) => ({
        ...state,
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
    }))
    .on(deleteTodo, (state, id) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
    }))
