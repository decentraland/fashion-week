import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import image from '../images/mvfw-2023.png'

import './index.css'

const SEGMENT_KEY = process.env.GATSBY_SEGMENT_KEY

const IndexPage: React.FC<PageProps> = () => {
  return <main>
      <svg width={652} height={544} />
    </main>
}

export default IndexPage

export const Head: HeadFC = () => <>
  <title>Metaverse Fashion Week 2023</title>
  <meta property="og:title" content="Metaverse Fashion Week 2023" />
  <meta property="og:site_name" content="" />
  <meta property="og:url" content="https://mvfw.org"/>
  <meta property="og:description" content="Metaverse Fashion Week (MVFW), pioneered by Decentraland and UNXD, will be held from March 28-31, 2023 concluding the Spring/Summer Fashion season on virtual catwalks." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={image} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@decentraland" />
  {SEGMENT_KEY && <script dangerouslySetInnerHTML={{  __html: [
    `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey=${JSON.stringify(SEGMENT_KEY)};;analytics.SNIPPET_VERSION="4.15.3";`,
    `analytics.load(${JSON.stringify(SEGMENT_KEY)});`,
    `analytics.page();`,
    `}}();`
  ].join('\n') }}></script>}
</>
