/*
File name     : src/app/MyGames/page.tsx
Description   : My Games Page for story board
LastEditBy    : Vance Muzangu
CreatedDate   : 2023-10-22
Revisions  :
  2023-11-03 - Add Comments
Preconditions: N/A
Postconditions: Register page is rendered
*/
'use client'
import React from 'react';

const MyGamesPage = () => {
  // This function can be used to handle clicks on game cards
  const handleGameClick = (gameId:number) => {
    // Navigate to the specific game page using React Router
    console.log(`Navigating to game with ID ${gameId}`);
  };

  // Sample game data
  const games = [
    { id: 1, title: 'Game 1', description: 'Description for Game 1', imageUrl: 'https://via.placeholder.com/400x400' },
    { id: 2, title: 'Game 2', description: 'Description for Game 2', imageUrl: 'https://via.placeholder.com/400x400' },
    // Add more game objects as needed
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Games</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Map through the games array to render individual game cards */}
        {games.map((game) => (
          <div key={game.id} className="flex flex-col items-center">
            <h1 className="text-2xl">{game.title}</h1>
            <img
              src={game.imageUrl}
              alt={`Image for ${game.title}`}
              className="w-64 h-64 object-cover"
              onClick={() => handleGameClick(game.id)}
            />
            <p>{game.description}</p>
          </div>
        ))}
        {/* Start New Game card */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Start New Game</h1>
          <a href='/play'> {/* Use anchor tag for routing */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Start</button>
          </a>
        </div>
        {/* Continue Previous Game card */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Continue Previous Game</h1>
          <a href='/ClickToPlay'> {/* Use anchor tag for routing */}
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2">Continue</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyGamesPage;