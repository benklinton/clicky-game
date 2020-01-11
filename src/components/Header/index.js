import React from 'react';

import './style.css';

function Header(props) {
    return (
        <header>
        <div className= "title">Harrison Ford Click Game</div>
        <div className= "scoreboard"> Score: {props.score}</div>
        </header>
    )
}

export default Header