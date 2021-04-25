import React, {useState, ChangeEvent} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setName(e.currentTarget.value); setError('')}
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
        if (name.trim()) {
            addUserCallback(name)
            setError('')
            setName('')
        } else {
            setError('Input the name')
        }

    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            onChange={onChange}
            addUser={addUser}
            totalUsers={totalUsers}
            error={error}
        />
    )
}

export default GreetingContainer
