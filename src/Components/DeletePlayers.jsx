import React from 'react';
import './DeletePlayers.css';

function DeletePlayer({ playerId }) {
    const handleDelete = async () => {
        try {
            // Send a DELETE request to delete the player with the specified ID
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players/${playerId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Player deleted successfully');
            } else {
                console.error('Failed to delete player');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Delete Player</h2>
            <button onClick={handleDelete}>Delete Player</button>
        </div>
    );
}

export default DeletePlayer;
