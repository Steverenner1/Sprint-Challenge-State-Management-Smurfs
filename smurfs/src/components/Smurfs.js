import React from 'react';
import "./App.css"

export const Smurfs = ({ smurfs }) => {
    return (
        <div>
            {smurfs.map(smurf => {
                return (
                    <div className='Smurfs' key={smurf.id}>
                        <strong>{smurf.name}</strong>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                )
            })}
        </div>
    )
}