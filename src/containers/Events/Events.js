import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import rp from 'request-promise';
import $ from 'cheerio';
import classes from './Events.module.css';

class Events extends React.Component {

    state = {
        url: "https://tapahtumainfo.fi/haku?kategoria=&pvm=03.02.2020+-+05.02.2020&kunta=turku&maakunta=&p=1",
        events: []
    }

    componentDidMount() {
        this.GetEvents();
    }

    GetEvents() {
        rp('https://pacific-atoll-18652.herokuapp.com/' + this.state.url)
        .then(html => {
            let eventUrls = [];
            // console.log(response);
            // Hae urlit yms yms
            for (let i = 0; i < 20; i++) {
                if (html !== undefined) {
                  eventUrls.push($('#maincontent > div:nth-child(' + (i + 3) + ') > div > a', html).attr('href'));
                }
            }
            console.log(eventUrls);
            return Promise.all(
                eventUrls.map(eventUrl => { // I learned the hard way to not use just "url" here. See the const at beginning
                    return this.ParseEvent('https://pacific-atoll-18652.herokuapp.com/https://tapahtumainfo.fi' +  eventUrl);
                })
            )
        })
        .catch(err => {
            console.log()
        })
    }

    ParseEvent = (url) => {
        return rp(url)
        .then(html => {

            let imgUrl = '';
            console.log('https://tapahtumainfo.fi' + $('#eventImageSmall', html).attr('src'));
            if ('https://tapahtumainfo.fi' + $('#eventImageSmall', html).attr('src') === 'https://tapahtumainfo.fiundefined' || 
            'https://tapahtumainfo.fi' + $('#eventImageSmall', html).attr('src') === 'https://tapahtumainfo.fi') {
                imgUrl = 'https://i.imgur.com/64x6C1i.png';
            }
            else {
                imgUrl = 'https://tapahtumainfo.fi' + $('#eventImageSmall', html).attr('src');
            }

            const newEvent = {
                name: $('#sivunotsikko', html).text(),
                date: $('#ajankohta > time:nth-child(1)', html).text(),
                imageUrl: imgUrl,
                link: $('#lisatiedotlinkki', html).attr('href'),
                key: $('#sivunotsikko', html).text()
            };

            this.setState({
                events: [...this.state.events, newEvent]
            })
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    render() {

        const events = this.state.events.map(event => {
            return (
                <EventCard 
                    url={event.link}
                    date={event.date}
                    name={event.name}
                    imageUrl={event.imageUrl}
                    rating={3.857}
                />
            );
        })

        return (
            <div className={classes.Events}>
                <h2>Tapahtumat paikassa Turku</h2>
                <div>
                    {events}
                    {/* <EventCard 
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
                    /> */}
                </div>
            </div>
        )
    }
}
    

export default Events;