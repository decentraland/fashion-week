import * as React from 'react';

export const MarketPlaceItem = ({index, item}) => {

    return (
        <div key={index} className={'marketplace-item'}>
            <div className={'marketplace-item__image'}>
                <img src={item.image} alt={item.metadata.wearable.name}/>
            </div>
            <div className={'marketplace-item__text'}>
                <div className={'marketplace-item__title'}>
                    <h5>{item.metadata.wearable.name}</h5>
                    <span>
                        <svg width="18" height="18" viewBox="0 0 18 18"
                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="9" y="1.05882" width="11.2305" height="11.2305" transform="rotate(45 9 1.05882)" stroke="white"
                              strokeWidth="1.4974"/>
                        <circle cx="9.00002" cy="9.00002" r="3.36916" fill="white"/>
                        </svg>
                        {Math.round(item.price / Math.pow(10, 18))}</span>
                </div>
                <div className={'marketplace-item__creator'}>Polygon</div>
                <div className={'marketplace-item__tags'}>
                    <button className={'button__tag'}>{item.metadata.wearable.rarity}</button>
                    <div>
                        <span className={'icon marketplace-item__type ' + item.metadata.wearable.category}></span>
                        <span className={'icon marketplace-item__bodyShape ' + (item.metadata.wearable.bodyShapes?.join(' '))}></span>
                    </div>
                </div>
                <button  onClick={()=> window.location.href = item.uri} className={"button_link"}><a href={item.uri}>{item.cta}</a></button>
            </div>
        </div>)
}
