import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
    return (

        <nav className="nav-style">
            <ul>
                <li><NavLink to='/' exact activeStyle={{ fontWeight: 'bold', color: 'red' }}>Home</NavLink></li>
                <li><NavLink to='/about' activeStyle={{ fontWeight: 'bold', color: 'red' }}>About</NavLink></li>
                <li><NavLink to='/profile' activeStyle={{ fontWeight: 'bold', color: 'red' }}>Profile</NavLink></li>
                <li><NavLink to='/projects' activeStyle={{ fontWeight: 'bold', color: 'red' }}>Projects</NavLink></li>
                <li><NavLink to='/query-strings-functional?from=2010&to=2020' activeStyle={{ fontWeight: 'bold', color: 'red' }}>QS (functional)</NavLink></li>
                <li><NavLink to='/query-strings-class?from=2010&to=2020' activeStyle={{ fontWeight: 'bold', color: 'red' }}>QS (class)</NavLink></li>
                <li><NavLink to='/counter' activeStyle={{ fontWeight: 'bold', color: 'red' }}>Contador (lifecycle)</NavLink></li>
                <li><NavLink to='/vivus' activeStyle={{ fontWeight: 'bold', color: 'red' }}>Vivus (lifecycle)</NavLink></li>
            </ul>
        </nav>



        /*
        <nav className="nav-style">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
        */
    )
}

export default navbar;