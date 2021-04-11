import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

export type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (value: number) => void
    filter: string
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}
    const setClass = (filter: FilterType) => props.filter === filter ? s.filterButton : s.filterButtonActive


    return (
        <div>
            {mappedAffairs}
            <button className={setClass('all')} onClick={setAll}>All</button>
            <button className={setClass('high')} onClick={setHigh}>High</button>
            <button className={setClass('middle')} onClick={setMiddle}>Middle</button>
            <button className={setClass('low')} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
