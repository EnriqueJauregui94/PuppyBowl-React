// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavigationBar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="nav-item">
                    <Link to="/AllPlayers">All Players</Link>
                </li>
                <li className="nav-item">
                    <Link to="/DeletePlayer">Delete Player</Link>
                </li>
                <li className="nav-item">
                    <Link to="/NewPlayerForm" className="new-player-link">New Player Form</Link>
                </li>
                <li className="nav-item">
                    <Link to="/PlayerDetails">Player Details</Link>
                </li>
                <li className="nav-item">
                    <Link to="/SinglePlayer">Single Player</Link>
                </li>
                <li className="nav-item">
                    <Link to="/TeamsList">Teams List</Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
}

export default NavigationBar;
