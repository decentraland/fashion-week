import * as React from "react";
import { useEffect, useState } from "react";
import { Header } from "../components/header/Header.jsx";
import { ContentContext } from "../context/ContentContext.js";
import "../scss/decentralandFW/globals.scss";
import { Landing } from "../components/landing/Landing.jsx";
import { Agenda } from "../components/agenda/Agenda.jsx";
import { graphql } from "gatsby";
import { Meta } from "../components/general/Meta.jsx";
import { Maps } from "../components/maps/Maps.jsx";
import { MarketPlace } from "../components/marketplace/MarketPlace.jsx";
import { Events } from "../components/events/Events.jsx";
import { Partners } from "../components/partners/Partners.jsx";
import { FAQS } from "../components/faqs/FAQS.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { About } from "../components/about/About.jsx";
import { DataContext } from "../context/DataContext.js";
import { fetchMarketPlace } from "../data/marketplace/marketplace.js";
import { Teaser } from "../components/teaser/Teaser.jsx";
import { fetchContent } from "../data/contentful/content.js";

const IndexPage = (props) => {
  let tempJSON = props.data.contentfulJson;

  const [content, setContent] = useState(null);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!content) {
      fetchContent().then(({ content, res }) => {
        content = { ...content, ...tempJSON };
        setContent(content);
      });
    }
  }, [content, setContent, tempJSON]);

  useEffect(() => {
    const fetchData = async () => {
      let agenda = await fetch(
        "https://events.decentraland.org/api/events?schedule=912e71d2-8e58-4597-99f1-c28cebb31205"
      );
      agenda = await agenda.json();

      let marketPlace = await fetchMarketPlace();

      setData({ agenda, marketPlace });
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      <ContentContext.Provider value={{ data: content }}>
        <Header />
        <main>
          <Landing />
          <About />
          <Agenda />
          {/* TODO: no map yet */}
          {/* <Maps/> */}
          {/* TODO: not returning MVFW wearables */}
          {/* <MarketPlace /> */}
          <Events />
          <Teaser />
          {/* TODO: no partners yet */}
          {/* <Partners/> */}
          <FAQS />
        </main>
        <Footer />
      </ContentContext.Provider>
    </DataContext.Provider>
  );
};

export default IndexPage;

export const Head = () => <Meta />;
export const pageQuery = graphql`
  fragment TempContentFragment on ContentfulJson {
    header {
      agenda
      maps
      marketplace
      events
      partners
      faqs
    }
    agenda {
      title
      cta
    }
    maps {
      title
    }
    marketplace {
      title
      cta
    }
    events {
      title
      cta
    }
    faqs {
      title
    }
    partners {
      title
    }
    footer {
      twitter
      twitterUrl
      discord
      discordUrl
      reddit
      redditUrl
      github
      githubUrl
    }
  }

  query {
    contentfulJson {
      ...TempContentFragment
    }
  }
`;
