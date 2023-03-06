import YouTube from 'react-youtube';
import * as React from 'react'

export const Teaser = () => {

    return (
        <section id={"teaser"}>
            <YouTube className={'teaser__video'} videoId={'fj5Te3rOxf0'} opts={{width : '100%', height: '100%'}}/>
            <div className={"teaser__poster"}></div>
        </section>
    )

}
