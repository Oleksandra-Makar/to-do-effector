import { List } from '@mui/material'
import ToDoItem from './ToDoItem'
import { useStore } from 'effector-react'
import $store from '../store/todoStore'

const ToDoList = () => {
    const { todos } = useStore($store)

    return (
        <List>
            {todos.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                />
            ))}
        </List>
    )
}

export default ToDoList
