import React from 'react'
import logo from '../logo.svg'

export default function Nav() {
    return (
        <nav className='header'>
            <img src={logo} className="App-logo" width="24" alt="logo"/>
            Elbert's Travel Journal
        </nav>
    )
}