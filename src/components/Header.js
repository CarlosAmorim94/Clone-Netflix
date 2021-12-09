import React from 'react'
import './Header.css'
import Logo from '../img/netflix-logo.png'
import User from '../img/user.png'

export default function Header({black}) {
    return (
        <header className={black ? 'black':''}> {/* Deixar dinâmica para quando descer ela ficar preta */}
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="Netflix logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={User} alt="Netflix user" />
                </a>
            </div>
            
        </header>
    )
}
