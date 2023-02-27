import {ContentContext} from '../../context/ContentContext.js';
import {Marquee} from '../general/marquee/Marquee.jsx';
import ArrowDown from '../svg/ArrowDown.svg';
import * as React from 'react';
import {useContext} from 'react';

export const Maps = () => {

    const {data} = useContext(ContentContext);
    const maps = data?.content?.maps;
    const title = maps?.title;

    return (
        <section id="maps">
            <Marquee>
                {title} <ArrowDown/>
            </Marquee>
        </section>
    )
}
