import React from 'react';
// import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import classes from './EventCard.module.css';

const EventCard = (props) => {
    return (
        <div className={classes.EventCard}>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <div>
                    <img className={classes.BannerImage} src={props.imageUrl} alt="Banner"/>
                    <strong>{props.name}</strong>
                    <p>{props.date}</p>
                </div>
                <div style={{textAlign: "center", margin: "5px", padding: "0 0 10px 0"}}>
                    <StarRatings starDimension="25px" starSpacing="5px" rating={props.rating}/>
                </div>
            </a>
        </div>
    );
}

export default EventCard;