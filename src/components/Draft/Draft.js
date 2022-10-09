import React, { useState, useEffect } from 'react';
import './Draft.css';
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Draft = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/cricketers')
        .then(res => res.json())
        .then(data2 => setPlayers(data2))
    }, [])

    const [select, setSelect] = useState([]);

    const addPlayerHandler = (player) => {
        const newSelect = [...select, player];
        setSelect(newSelect);
    }
    return (
        <div className='draft-conteiner'>
            <div className='item-container'>
                {
                    players.map(player => <Player 
                        addPlayerHandler = {addPlayerHandler}
                        player = {player}></Player> )
                }
                
            </div>
            <div className='selection-container'>
                <Cart cart = {select}></Cart>
            </div>
        </div>
    );
};

export default Draft;