import React, { useEffect, useState } from 'react';

function TeamList() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch(
                    'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/teams'
                );
                const result = await response.json();
                if (result.success) {
                    setTeams(result.data.teams);
                } else {
                    console.error('Failed to fetch teams');
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchTeams();
    }, []); // Empty dependency array to fetch teams once when the component mounts

    return (
        <div>
            <h2>Teams</h2>
            <ul>
                {teams.map((team) => (
                    <li key={team.id}>
                        <h3>{team.name}</h3>
                        <p>Created At: {team.createdAt}</p>
                        <ul>
                            {team.players.map((player) => (
                                <li key={player.id}>
                                    <h4>{player.name}</h4>
                                    <p>Breed: {player.breed}</p>
                                    <p>Status: {player.status}</p>
                                    {/* Add more player details as needed */}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeamList;
