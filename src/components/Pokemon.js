import React from 'react';

export function Pokemon({pokemon}){
return (
    <div className="pokemon">
        <div className="pokemon__name">
            <p>{pokemon.name}</p>
        </div>

        <div className="pokemon__meta">
            <p>{pokemon.maxHP}</p>
            <p>{pokemon.maxCP}</p>
        </div>

        <div className="pokemon__image">
            <img src={pokemon.image} alt={pokemon.name} />
        </div>

        <div className="pokemon__attacks">
            {pokemon.attacks.special.slice().map(attack => ( // why not use simply {attack.name}-{attack.damage} ??
                <span key={`${attack.name}-${attack.damage}`}>  
                    {attack.name}
                </span>
            ))}
        </div>
    </div>
)
}