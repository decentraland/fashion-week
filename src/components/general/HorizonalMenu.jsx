import {useEffect, useRef, useState} from 'react';
import * as React from 'react';
export const HorizonalMenu = ({children, onChange})=>{

    const [isOverflowing, setIsOverflowing] = useState(false);
    const scrollRef = useRef();

    useEffect(()=> {
            onChange && onChange({isOverflowing});
    }, [isOverflowing]);


    useEffect(() => {
        let observer = null;
        if(scrollRef?.current !== null && observer === null) {
            observer = new ResizeObserver(()=>{
                const offsetWidth = scrollRef?.current.offsetWidth;
                const containerWidth = scrollRef?.current.parentNode.offsetWidth;
                setIsOverflowing(offsetWidth > containerWidth);
            });

            observer.observe(scrollRef.current)
            observer.observe(scrollRef.current.parentNode)
        }

        return ()=>{
            if(scrollRef?.current) {
                observer?.unobserve(scrollRef?.current)
                observer?.unobserve(scrollRef?.current.parentNode)
            }
        }
    }, [scrollRef])

    return (
        <div ref={scrollRef}>
            {children}
        </div>
    )

}
