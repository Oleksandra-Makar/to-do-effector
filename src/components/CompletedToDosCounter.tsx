import { Typography } from '@mui/material'
import $store from '../store/todoStore'
import { useStore } from 'effector-react'

const CompletedToDosCounter = () => {
    const { todos } = useStore($store)
    const completedTodos = todos.filter((todo) => todo.completed === true).length

    return (
        <Typography style={{ textAlign: 'center' }} variant="h4">
            Total completed to-dos: {completedTodos}
        </Typography>
    )
}

export default CompletedToDosCounter
