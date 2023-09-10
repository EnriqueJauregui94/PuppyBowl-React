import React, { useState, useEffect } from 'react';

function PlayerDetails({ id }) {
    const [playerData, setPlayerData] = useState(null);



    useEffect(() => {
        async function fetchPlayerData() {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players/${id}`);
                const data = await response.json();
                setPlayerData(data);
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        }

        fetchPlayerData();
    }, [id]);

    return (
        <div>
            <h2>Player Details</h2>
            {playerData ? (
                <div>
                    <p>ID: {playerData.data.player.id}</p>
                    <p>Name: {playerData.data.player.name}</p>
                    <p>Breed: {playerData.data.player.breed}</p>
                    {/* Add more player details here */}
                </div>
            ) : (
                <p>Loading player details...</p>
            )}
        </div>
    );
}

export default PlayerDetails;
