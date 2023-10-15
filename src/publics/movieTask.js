// Create a React web application that consumes the https://swapi.dev/api/people/ 
// API and displays a table containing a list of Star Wars characters and 
// the films they have appeared in and the vehicles they have used. 
// The application should make multiple parallel API calls to fetch the
// film and vehicle details using the URLs returned in the first API call and display them in the table.						




import React, { useState, useEffect } from 'react';

function AppM() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        const charactersData = data.results;

        const charactersWithDetails = await Promise.all(
          charactersData.map(async (character) => {
            const films = await Promise.all(
              character.films.map(async (filmUrl) => {
                const filmResponse = await fetch(filmUrl);
                const filmData = await filmResponse.json();
                return filmData.title;
              })
            );

            const vehicles = await Promise.all(
              character.vehicles.map(async (vehicleUrl) => {
                const vehicleResponse = await fetch(vehicleUrl);
                const vehicleData = await vehicleResponse.json();
                return vehicleData.name;
              })
            );

            return {
              name: character.name,
              films,
              vehicles,
            };
          })
        );

        setCharacters(charactersWithDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacterDetails();
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Films</th>
            <th>Vehicles</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index}>
              <td>{character.name}</td>
              <td>{character.films.join(', ')}</td>
              <td>{character.vehicles.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppM;
