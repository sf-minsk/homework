import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
        setDate(new Date())
    }
    const start = () => {
        stop()
        const id = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = `${date.getHours()}` + ':' + `${date.getMinutes()}` + ':' + `${date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds()}`
    const stringDate = `${date.getDate()}` + ':' + `${date.getMonth()}` + ':' + `${date.getFullYear()}`

    return (
        <div className={style.timer}>
            <div className={style.dataBlock}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>
            <div className={style.buttonsBlock}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
