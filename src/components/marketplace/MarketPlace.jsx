import {ContentContext} from '../../context/ContentContext.js';
import * as React from 'react';
import {useContext, useState} from 'react';
import {MarketPlaceItem} from './MarketPlaceItem.jsx';
import {DataContext} from '../../context/DataContext.js';
import {HorizonalMenu} from '../general/HorizonalMenu.jsx';

export const MarketPlace = () => {

    const content = useContext(ContentContext);

    const data = useContext(DataContext);
    const marketPlace = data?.data?.marketPlace;

    const [isOverflowing, setIsOverflowing] = useState(false);

    const handleOverflow = ({isOverflowing}) => {
        setIsOverflowing(isOverflowing);
    }
    return (
        <section id={'marketplace'}>
            <div className={'marketplace__title'}>

                {isOverflowing && (
                    <button name={'scroll-left'}>
                        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 25L1 13L13 1" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                    </button>
                )}

                <h2>{content?.data?.content?.marketplace?.title}</h2>

                {isOverflowing && (
                    <button name={'scroll-right'}>
                        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L13 13L1 25" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                    </button>
                )}
            </div>
            <div className={'marketplace__products'}>
                <HorizonalMenu onChange={handleOverflow}>
                    {marketPlace && (marketPlace.map((item, index) => (
                        <MarketPlaceItem key={index} item={item} index={index}/>
                    )))}
                </HorizonalMenu>
            </div>
        </section>
    )
}
