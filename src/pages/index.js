import * as React from 'react'
import {useEffect, useState} from 'react'
import {Header} from '../components/header/Header.jsx';
import {ContentContext} from '../context/ContentContext.js';
import '../scss/decentralandFW/globals.scss';
import {Landing} from '../components/landing/Landing.jsx';
import {Agenda} from '../components/agenda/Agenda.jsx';
import {graphql} from 'gatsby';
import {Meta} from '../components/general/Meta.jsx';
import {Maps} from '../components/maps/Maps.jsx';
import {MarketPlace} from '../components/marketplace/MarketPlace.jsx';
import {Events} from '../components/events/Events.jsx';
import {Partners} from '../components/partners/Partners.jsx';
import {FAQS} from '../components/faqs/FAQS.jsx';
import {Footer} from '../components/footer/Footer.jsx';
import {About} from '../components/about/About.jsx';
import {DataContext} from '../context/DataContext.js';
import {fetchMarketPlace} from '../data/marketplace.js';
import {Teaser} from '../components/Teaser.jsx';

const IndexPage = (props) => {

    const [content, setContent] = useState(null);

    const [data, setData] = useState(null);

    useEffect(() => {
        //todo temp...
        let contentJSON = props.data.example;
        setContent(contentJSON)
    }, [setContent]);

    useEffect(() => {
        const fetchData = async () => {

            let agenda = await fetch('https://events.decentraland.org/api/events')
            agenda = await agenda.json();

            let marketPlace = await fetchMarketPlace();

            setData({agenda, marketPlace});

        }
        fetchData();


    }, [])

    return (
        <DataContext.Provider value={{data}}>

            <ContentContext.Provider value={{data: content}}>
                <Header/>
                <main>
                    <Landing/>
                    <About/>
                    <Agenda/>
                    <Maps/>
                    <MarketPlace/>
                    <Events/>
                    <Teaser/>
                    <Partners/>
                    <FAQS/>
                </main>
                <Footer/>
            </ContentContext.Provider>
        </DataContext.Provider>
    )
}

export default IndexPage

export const Head = () => (
    <Meta/>
)

export const pageQuery = graphql`
query{
  example {
    content{
      ...ContentfulContentFragment
    }
  }
}
`
