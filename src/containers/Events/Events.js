import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import rp from 'request-promise';
import $ from 'cheerio';
import axios from 'axios';
import classes from './Events.module.css';

class Events extends React.Component {

    state = {
        url: "http://kalenteri.turku.fi/events/calendar",
        events: [],
        testEvent: {
            name: '',
            date: '',
            imageUrl: '',
            link: ''
        }
    }

    componentDidMount() {
        this.ParseEvent('https://cors-anywhere.herokuapp.com/http://kalenteri.turku.fi/events/node/307620');
    }

    GetEvents() {
        axios.get('https://cors-anywhere.herokuapp.com/' + this.state.url)
        .then(response => {
            // console.log(response);
            // Hae urlit yms yms
            return this.ParseEvent('http://kalenteri.turku.fi/events/node/307620');
        })
    }

    ParseEvent = (url) => {
        return rp(url)
        .then(html => {
            this.setState({
                testEvent: {
                    name: $('#l-content > div.event.node.node--event.view-mode-full.node--full.node--event--full > div.event__image--wrapper > div.event__image__content > div.event__image__content--bottom > div.event__title > h1', html).text(),
                    date: $('#l-content > div.event.node.node--event.view-mode-full.node--full.node--event--full > div.event__image--wrapper > div.event__image__content > div.event__image__content--bottom > div:nth-child(1)', html).text(),
                    imageUrl: $('#l-content > div.event.node.node--event.view-mode-full.node--full.node--event--full > div.event__image--wrapper > div.event__image > picture > source:nth-child(1)', html).attr('srcset'),
                    link: $('#l-content > div.event.node.node--event.view-mode-full.node--full.node--event--full > div.event__sidebar--top > div.event__website > a', html).attr('href')
                }
            })
            // return {
            //     eventName: $('#l-content > div.event.node.node--event.view-mode-full.node--full.node--event--full > div.event__image--wrapper > div.event__image__content > div.event__image__content--bottom > div.event__title > h1', html).text(),
            //     eventDate: $('#l-content > div.event.node.node--event.view-mode-full.node--full.node--event--full > div.event__image--wrapper > div.event__image__content > div.event__image__content--bottom > div:nth-child(1)', html).text(),
            //     eventBanner: $('#l-content > div.event.node.node--event.view-mode-full.node--full.node--event--full > div.event__image--wrapper > div.event__image > picture > source:nth-child(1)', html).attr('srcset')
            // };
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    render() {
        return (
            <div className={classes.Events}>
                <h2>Tapahtumat paikassa Turku</h2>
                <div>
                    <EventCard 
                        url={this.state.testEvent.link}
                        date={this.state.testEvent.date}
                        name={this.state.testEvent.name}
                        imageUrl={this.state.testEvent.imageUrl}
                        rating={3.857}
                    />
                    <EventCard 
                        url="http://www.google.fi" 
                        date="1.2.2020" 
                        name="Kissanristiäiset" 
                        imageUrl="https://i.ytimg.com/vi/acm9dCI5_dc/maxresdefault.jpg"
                        rating={4.304}
                    />
                    <EventCard 
                        url="http://www.google.fi" 
                        date="1.3.2020" 
                        name="Geneerinen seminaaritapahtuma" 
                        imageUrl="https://pinghelsinki.fi/wp-content/uploads/2018/11/Copy-of-IMG_7799.jpg"
                        rating={4.450}
                    />
                    <EventCard 
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                        date="1.4.2020" 
                        name="April fules" 
                        imageUrl="https://compote.slate.com/images/26572c3a-0e51-4a9f-9049-b64e730ca75d.jpg"
                        rating={5}
                    />
                </div>
            </div>
        )
    }
}
    

export default Events;