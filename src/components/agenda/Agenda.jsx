import * as React from 'react';
import {useContext, useEffect, useMemo, useState} from 'react';
import {Marquee} from '../general/marquee/Marquee.jsx';
import {ContentContext} from '../../context/ContentContext.js';
import ArrowDown from '../svg/ArrowDown.svg';
import {DataContext} from '../../context/DataContext.js';

export const Agenda = () => {

    const contentData = useContext(ContentContext);

    const content = contentData?.data?.content;
    const startDate = content?.landing.startDate && new Date(content?.landing.startDate);
    const endDate = content?.landing.endDate && new Date(content?.landing.endDate);

    const {data} = useContext(DataContext);
    const events = data?.agenda?.data.map(evt => {
            const date = new Date(evt.start_at)

            var month = date.getUTCMonth() + 1; //months from 1-12
            var day = date.getUTCDate();
            var year = date.getUTCFullYear();

            const dateFormatted = year + '/' + month + '/' + day;

            const minutes = (date.getUTCHours() + "0").substring(0, 2);
            const hours = (date.getUTCHours() + "0").substring(0, 2);// || "24"; //todo test?
            const timeUTC = hours + ":" + minutes + " UTC";
            return {
                ...evt,
                date,
                timeUTC,
                dateFormatted
            }
        }).filter(evt => {
            const {date} = evt;
            let isValidDate = date >= startDate && date < endDate;
            return isValidDate;
        }) || []

    const dates = events?.length && events.reduce((acc, curr) => {
        const {dateFormatted} = curr;
        if (!acc.includes(dateFormatted))
            acc.push(dateFormatted)
        return acc;
    }, []).sort() || []

    const [currentDate, setCurrentDate] = useState(dates[0]);

    useEffect(() => {
        if (dates && !currentDate) {
            setCurrentDate(dates[0])
        }
    }, [dates, currentDate]);

    return (
        <section id="agenda" className={'agenda'}>
            <Marquee>
                {content?.agenda?.title} <ArrowDown/>
            </Marquee>
            <ul className="agenda__dates">
                {dates.map((date, index) => (
                    <li key={index} className={date === currentDate ? 'active' : ''} data-date={date}
                        onClick={() => setCurrentDate(date)}>{date}</li>
                ))}
            </ul>
            <div className="agenda__events">

                {events.map((item, index) => (

                    item.dateFormatted === currentDate ?
                        (<div key={index}>
                            <h3>{item.estate_name}</h3>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <time dateTime={item.start_at}>{item.timeUTC}</time>
                            <a href={item.url}>{content?.agenda.cta}
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.9585 9.5H15.0418" stroke="#FDC5DB" strokeWidth="1.97403"
                                          strokeLinejoin="round"/>
                                    <path d="M9.5 3.9585L15.0417 9.50016L9.5 15.0418" stroke="#FDC5DB"
                                          strokeWidth="1.97403" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>) : null

                ))}

            </div>
        </section>
    )

}
