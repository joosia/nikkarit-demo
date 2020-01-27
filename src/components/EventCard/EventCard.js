import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import classes from './EventCard.module.css';

const EventCard = (props) => {
    return (
        <div className={classes.EventCard}>
            <Link to={props.url}>
                <img className={classes.BannerImage} src={props.imageUrl}/>
                <strong>{props.name}</strong>
                <p>{props.date}</p>
                <StarRatings/>
            </Link>
        </div>
    );
}

export default EventCard;