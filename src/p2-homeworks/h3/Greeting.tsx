import React, { ChangeEvent } from 'react'
// import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, onChange, addUser, error, totalUsers}
) => {
    return (
        <div>
            <input value={name} onChange={onChange}/>
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <div style={{'color': 'red'}}>{error}</div>
        </div>
    )
}

export default Greeting
