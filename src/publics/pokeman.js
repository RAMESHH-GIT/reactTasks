// // import React, { useState, useEffect } from 'react';

// // const PokemonList = () => {
// //   const [pokemonData, setPokemonData] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
// //         const data = await response.json();
// //         setPokemonData(data.results);
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const fetchPokemonDetails = async (url) => {
// //     try {
// //       const response = await fetch(url);
// //       const data = await response.json();
// //       const { name, weight, sprites } = data;
// //       return { name, weight, image: sprites.front_default };
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   useEffect(() => {
// //     const fetchPokemonDetailsList = async () => {
// //       const pokemonWithDetails = await Promise.all(
// //         pokemonData.map((pokemon) => fetchPokemonDetails(pokemon.url))
// //       );
// //       setPokemonData(pokemonWithDetails);
// //     };

// //     if (pokemonData.length > 0) {
// //       fetchPokemonDetailsList();
// //     }
// //   }, [pokemonData]);

// //   return (
// //     <div>
// //       <h1>Pokemon List</h1>
// //       <div className="pokemon-container">
// //         {pokemonData.length > 0 ? (
// //           pokemonData.map((pokemon) => {
// //             if (pokemon && pokemon.name && pokemon.image && pokemon.weight) {
// //               return (
// //                 <div className="pokemon-card" key={pokemon.name}>
// //                   <img src={pokemon.image} alt={pokemon.name} />
// //                   <div className="pokemon-details">
// //                     <h2>{pokemon.name}</h2>
// //                     <p>Weight: {pokemon.weight}</p>
// //                   </div>
// //                 </div>
// //               );
// //             }
// //             return null;
// //           })
// //         ) : (
// //           <p>Loading...</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PokemonList;
// import React, { useState, useEffect } from 'react';

// const PokemonList = () => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
//         const data = await response.json();
//         setPokemonData(data.results);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchPokemonDetails = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       const { name, weight, sprites } = data;
//       return { name, weight, image: sprites?.front_default };
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const fetchPokemonDetailsList = async () => {
//       const pokemonWithDetails = [];
//       for (const pokemon of pokemonData) {
//         if (pokemon && pokemon.url) {
//           const details = await fetchPokemonDetails(pokemon.url);
//           pokemonWithDetails.push(details);
//         }
//       }
//       setPokemonData(pokemonWithDetails);
//     };

//     if (pokemonData.length > 0) {
//       fetchPokemonDetailsList();
//     }
//   }, [pokemonData]);

//   console.log("pokemonData:", pokemonData);
//   console.log("loading:", loading);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (pokemonData.length === 0) {
//     return <p>No Pokemon data available.</p>;
//   }

//   return (
//     <div>
//       <h1>Pokemon List</h1>
//       <div className="pokemon-container">
//         {pokemonData.map((pokemon, index) => {
//           console.log("pokemon:", pokemon);
//           if (pokemon && pokemon.name && pokemon.image && pokemon.weight) {
//             return (
//               <div className="pokemon-card" key={index}>
//                 <img src={pokemon.image} alt={pokemon.name} />
//                 <div className="pokemon-details">
//                   <h2>{pokemon.name}</h2>
//                   <p>Weight: {pokemon.weight}</p>
//                 </div>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// };

// export default PokemonList;
// import React, { useState, useEffect } from 'react';
// //import './PokemonList.css'; // Import the CSS file for additional custom styles
// //import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';


// const PokemonList = () => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPokemonData = async () => {
//       try {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
//         const data = await response.json();
//         setPokemonData(data.results);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };

//     fetchPokemonData();
//   }, []);

//   useEffect(() => {
//     const fetchPokemonDetails = async () => { 
//       const pokemonWithDetails = await Promise.all(
//         pokemonData.map(async (pokemon) => {
//           try {
//             const response = await fetch(pokemon.url);
//             const data = await response.json();
//             const { name, weight, sprites } = data;
//             // return { name, weight, image: sprites?.front_default };
//             const imageUrl = sprites.other['official-artwork'].front_default; // Higher-quality image URL
//             return { name, weight, image: imageUrl };
//           } catch (error) {
//             console.log(error);
//             return null;
//           }
//         })
//       );
//       setPokemonData((prevPokemonData) => {
//         return prevPokemonData.map((pokemon) => {
//           const detail = pokemonWithDetails.find((p) => p.name === pokemon.name);
//           console.log("pokemonData1:", pokemon.name);
//           return { ...pokemon, ...detail };
//         });
//       });
//       // setPokemonData((prevPokemonData) =>
//       //   prevPokemonData.map((pokemon, index) => {
//       //     return { ...pokemon, ...pokemonWithDetails[index] };
//       //   })
//       // );
//     };

//     if (pokemonData.length > 0) {
//       fetchPokemonDetails();
//     }
//   }, [pokemonData]);

//   console.log("pokemonData:", pokemonData);
//   console.log("loading:", loading);

//   if (loading) {
//     return <h1 style={{textAlign:"center",marginTop:"50px"}}>Loading...</h1>;
//   }

//   if (pokemonData.length === 0) {
//     return <p>No Pokemon data available.</p>;
//   }

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         {pokemonData.map((pokemon, index) => {
//           if (pokemon && pokemon.name && pokemon.image && pokemon.weight) {
//             return (
//               <div className="col-md-4 mb-4" key={index}>
//                 <div className="card">
//                   <div className='text-center'>
//                   <img src={pokemon.image} className="card-img-top" alt={pokemon.name} style={{height:"100px",width:"100px",textAlign:"center"}} />
//                   </div>
//                   <div className="card-body " style={{textAlign:"center"}}>
//                     <h5 className="card-title">{pokemon.name}</h5>
//                     <p className="card-text">Weight: {pokemon.weight}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// };

// export default PokemonList;
import React, { useState, useEffect } from 'react';

const PokemonList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const predefinedSuggestions = ['T-shirt', 'Jeans', 'Shoes', 'Dress', 'Jacket'];

  // Function to update the search term and fetch suggestions
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setSuggestions(predefinedSuggestions.filter((suggestion) => suggestion.includes(value)));
  };

  // const fetchSuggestions = async () => {
  //   try {
  //     // Perform an API call to JSONPlaceholder API to fetch user data
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/users?name=${searchTerm}`);
  //     const data = await response.json();
  //     console.log('API Response:', data)
  //     setSuggestions(data.map((user) => user.name));
  //   } catch (error) {
  //     console.error('Error fetching suggestions:', error);
  //   }
  // };

  // // Effect to fetch suggestions whenever the search term changes
  // useEffect(() => {
  //   fetchSuggestions();
  // }, [searchTerm]);

  // // Function to update the search term
  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   setSearchTerm(value);
  // };

  console.log('Search Term:', searchTerm);
  console.log('Suggestions:', suggestions);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};
export default PokemonList;
