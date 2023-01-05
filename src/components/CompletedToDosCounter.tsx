import { Typography } from '@mui/material'
import $store from '../store/todoStore'
import { useStore } from 'effector-react'
import { useMemo } from 'react'

const CompletedToDosCounter = () => {
    const { todos } = useStore($store)
    const completedTodos = useMemo(() => todos.filter((todo) => todo.completed).length, [todos])

    return (
        <Typography style={{ textAlign: 'center' }} variant="h4">
            Total completed to-dos: {completedTodos}
        </Typography>
    )
}

export default CompletedToDosCounter
