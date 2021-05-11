import React from 'react';
import { NavLink } from 'react-router-dom';

import c from './SongTile.module.css';

const SongTile = ({ song }) => {
    const art = {
        background: `url(${song.cover_image})`,
        backgroundSize: 'contain',
        height: '100%',
        width: '100%',
        // objectFit: 'contain',
        opacity: 1,
        // float: 'left',
    };
    return (
        <div className={c.container}>
            <div className={c.artwork}>
                <div>
                    <div className={c.artwork__image}>
                        <div className={c.artwork__placeholder}>
                            <span className={c.image} style={art}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={c.description}>
                <div>
                    <NavLink to={`/songs/${song.id}`}>{song.name}</NavLink>
                </div>
                <div>
                    {/* <NavLink to={`/users/${song.user_id}`}>
                        {song.artist}
                    </NavLink> */}
                    <NavLink to={`/songs/${song.id}`}>{song.artist}</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SongTile;
