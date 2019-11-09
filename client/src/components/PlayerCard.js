import React from 'react';

function PlayerCard({ playerData }) {

  return (
    <div className='playerCard'>
      <h2>Name: {playerData.name}</h2>
				<h3>Country: {playerData.country}</h3>
				<h4>
					Searches: {playerData.searches}
				</h4>
    </div>
  )
}

export default PlayerCard;
