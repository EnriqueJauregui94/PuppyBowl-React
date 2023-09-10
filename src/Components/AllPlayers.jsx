import React, { useState, useEffect } from 'react';
import { fetchPlayers } from './ajaxHelpers'; // Make sure you have this function defined correctly in ajaxHelpers.js
import DeletePlayers from './DeletePlayers';
import TeamsList from './TeamsList';
import './AllPlayers.css';

function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const cohortName = '2302-ACC-ET-WEB-PT-D';
                const playersData = await fetchPlayers(2302 - ACC - ET - WEB - PT - D);
                setPlayers(playersData);
                setError(null);
            } catch (error) {
                setError(error.message);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h2>All Players</h2>
            {error && <p>Error: {error}</p>}
            <ul>
                {players.map((player) => (
                    <li key={player.id}>{player.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default AllPlayers;
