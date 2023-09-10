export async function fetchPlayers(cohortName) {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${2302 - ACC - ET - WEB - PT - D}/players`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.message);
        }

        const result = await response.json();
        return result.data.players;
    } catch (error) {
        throw new Error(error.message);
    }
}
