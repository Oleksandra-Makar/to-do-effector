import { FormEvent, useCallback } from 'react'
import { Button, TextField } from '@mui/material'
import { useStore } from 'effector-react'
import $store, { setNewTodo, addTodo } from '../store/todoStore'

const AddToDo = () => {
    const { newTodoTitle } = useStore($store)

    const handleSubmit = useCallback(
        (event: FormEvent<EventTarget>) => {
            event.preventDefault()
            if (newTodoTitle) {
                addTodo()
            }
        },
        [newTodoTitle]
    )
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                label="To Do Item"
                fullWidth
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodoTitle}
                margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
                Add Item
            </Button>
        </form>
    )
}

export default AddToDo
