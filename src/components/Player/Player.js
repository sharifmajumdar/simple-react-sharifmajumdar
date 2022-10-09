import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Player = (props) => {
    const { name, image, email, salary } = props.player;
    return (
        <div className="player">
            <div>
                <img src={image} alt="" />
            </div>
            <div className='player-name'>
                <h2>{name}</h2>
                <br />
                <p><small>{email}</small></p>
                <p>BDT{salary}</p>
                <button className='btn btn-primary'
                    onClick={() => props.addPlayerHandler(props.player) }>
                        <FontAwesomeIcon icon={faHandPointer} /> Choose Player</button>
            </div>
        </div>
    );
};

export default Player;