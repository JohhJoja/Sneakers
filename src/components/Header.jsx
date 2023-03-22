import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import './header.css'

function Header() {
    const { active } = useAuth()
    document.addEventListener('click', (e) => {
        const header = document.querySelector('.header')
        if (window.innerWidth <= 440) {
            if (e.target.closest('.header')) {
                header.classList.add('headerMedia')
            } else {
                header.classList.remove('headerMedia')
            }
        }
    });
    return (

        <div className="header">
            <Link to="/user">
                <div className="ico">
                    <img src={require('../img/ico.jpg')} alt="" srcset="" />
                </div>
                {active
                    ? <div className="ico_message"></div>
                    : <div></div>
                }

            </Link>
            <div className="links">
                <NavLink to="/" className="header_link">Главная</NavLink>
                <NavLink to="/shop" className="header_link">Магазин</NavLink>
                <NavLink to="/user" className="header_link">Мой профиль</NavLink>
            </div>
        </div>


    )
}

export default Header