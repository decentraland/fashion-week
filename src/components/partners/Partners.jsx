import {ContentContext} from '../../context/ContentContext.js';
import * as React from 'react';
import {useContext} from 'react';
import {Marquee} from '../general/marquee/Marquee.jsx';
import ArrowDown from '../svg/ArrowDown.svg';

export const Partners = () => {

    const {data} = useContext(ContentContext);
    const partners = data?.partner;

    console.log({data});

    const items = (partners && partners.length) ? Array.apply(null, Array(25)).map((el, i) => {
        return partners[i % partners.length];
    }) : [];

    //todo missing title from cms

    return (
        <section id={'partners'}>
            <Marquee>
                {data?.partners?.title} <ArrowDown/>
            </Marquee>

            <div className={'partners__grid'}>
                {items.map((item,index) =>(
                    <div key={index} style={{backgroundImage : 'url("' +  item.image.fields.file.url + '")'}}></div>
                ))}
            </div>
        </section>
    );
}
