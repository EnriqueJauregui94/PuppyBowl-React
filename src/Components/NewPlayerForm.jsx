import React, { useState } from 'react';

function NewPlayerForm() {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [playerData, setPlayerData] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        breed,
                    }),
                }
            );

            const result = await response.json();
            if (result.success && result.data && result.data.newPlayer) {
                setPlayerData(result.data.newPlayer);
                setError(null);
            } else {
                setError('Failed to create a new player.');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred while creating a new player.');
        }
    };

    return (
        <div>
            <h2>Create a New Player</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="breed">Breed:</label>
                    <input
                        type="text"
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Player</button>
            </form>
            {playerData && (
                <div>
                    <h3>New Player Created</h3>
                    <p>ID: {playerData.id}</p>
                    <p>Name: {playerData.name}</p>
                    <p>Breed: {playerData.breed}</p>
                    <p>Status: {playerData.status}</p>
                    <p>Image URL: {playerData.imageUrl}</p>
                    <p>Created At: {playerData.createdAt}</p>
                    <p>Updated At: {playerData.updatedAt}</p>
                </div>
            )}
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default NewPlayerForm;
