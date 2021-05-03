import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import menuImage from "./pages/menu.png"

function Header() {
    return (
        <div className={s.menu}>
            <div className={s.navBlock}>
                <NavLink to='/pre-junior'>Junior-</NavLink>
                <NavLink to='/junior'>Junior</NavLink>
                <NavLink to='/junior-plus'>Junior+</NavLink>
            </div>
            <div className={s.imgBlock}>
                <img src={menuImage}/>
            </div>
        </div>
    )
}

export default Header
