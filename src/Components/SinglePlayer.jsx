import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SinglePlayer.css'; // Import the CSS file

function SinglePlayer() {
    const { id } = useParams(); // Get the player ID from the URL params
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        // Fetch a single player's details by their ID
        const fetchPlayer = async () => {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch player data');
                }
                const result = await response.json();

                if (result.success && result.data && result.data.player) {
                    // Update the player state with the fetched data
                    setPlayer(result.data.player);
                } else {
                    // Handle the case where the player data couldn't be retrieved
                    console.error('Error fetching player data:', result.error);
                }
            } catch (err) {
                console.error('Error fetching player data:', err);
            }
        };

        fetchPlayer();
    }, [id]); // Include 'id' in the dependency array to refetch when the ID changes

    return (
        <div className="single-player-container">
            <h4 className="single-player">Single Player Details</h4>
            {player ? (
                <div className="single-player-details">
                    <p>ID: {player.id}</p>
                    <p>Name: {player.name}</p>
                    <p>Breed: {player.breed}</p>
                    <p>Status: {player.status}</p>
                    <p>Image URL: {player.imageUrl}</p>
                    <p>Created At: {player.createdAt}</p>
                    <p>Updated At: {player.updatedAt}</p>
                    <p>Team ID: {player.teamId}</p>
                    <p>Cohort ID: {player.cohortId}</p>
                </div>
            ) : (
                <p className="loading-message">Loading player details...</p>
            )}
        </div>
    );
}

export default SinglePlayer;
