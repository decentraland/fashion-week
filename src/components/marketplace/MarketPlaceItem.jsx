import * as React from 'react';
import {useState} from 'react';

export const MarketPlaceItem = ({index, item}) => {

    const [isOverImage, setIsOverImage] = useState(false);

    return (
    <div key={index} className={'item ' + (isOverImage ? " over-image" : "")}>
        <div className={'item__image'} onMouseEnter={() => setIsOverImage(true)} onMouseLeave={()=> setIsOverImage(false)}>
            <div></div>
        </div>
        <div className={'item__text'}>
            <div>
                <h5>{item.metadata.wearable.name}</h5>
            </div>
            <div className={'item__creator'}>{item.creator}</div>
            <div className={"item__tag"}>
                <button className={'button__tag'}><a href={item.link}>{item.cta}</a></button>
            </div>
            <button className={"button_link"}><a href={item.link}>{item.cta}</a></button>
        </div>
    </div>)
}
