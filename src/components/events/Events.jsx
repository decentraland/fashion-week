import {ContentContext} from '../../context/ContentContext.js';
import * as React from 'react';
import {useContext, useState} from 'react';
import {DataContext} from '../../context/DataContext.js';
import {HorizonalMenu} from '../general/HorizonalMenu.jsx';

export const Events = () => {

    const content = useContext(ContentContext);

    const eventsContent = content?.data?.content?.events;
    const title = eventsContent?.title;

    const {data} = useContext(DataContext);
    const events = data?.agenda?.data || [];

    const [isOverflowing, setIsOverflowing] = useState(false);

    const handleOverflow = ({isOverflowing}) => {
        setIsOverflowing(isOverflowing);
    }

    return (
        <section id={'events'}>
            <div className={'events__title'}>

                {isOverflowing && (
                    <button name={'scroll-left'}>
                        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 25L1 13L13 1" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                    </button>
                )}

                <h2>{title}</h2>

                {isOverflowing && (
                    <button name={'scroll-right'}>
                        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L13 13L1 25" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                    </button>
                )}
            </div>
            <div className={'events__items ' + (isOverflowing ? 'scrolling' : '')}>
                <HorizonalMenu onChange={handleOverflow}>
                    {events.map((item, index) => (
                        <div key={index} className={'item'}>
                            <div className={'item__image'}>
                                <div></div>
                            </div>
                            <div className={'item__text'}>
                                <div>{item.title}</div>
                                <div>{item.type}</div>
                                <button><a href={item.link} target={'_blank'} rel={'noreferrer'}>{item.cta}</a></button>
                            </div>
                        </div>
                    ))}
                </HorizonalMenu>
            </div>
        </section>
    )

}
