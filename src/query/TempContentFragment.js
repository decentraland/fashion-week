import {graphql} from 'gatsby';

export const TempContentFragment = graphql`
fragment ContentFragment on DataJson {
  landing {
    title
    date
    startDate
    days
    hours
    minutes
    seconds
  }
   header{
    agenda
    maps
    marketplace
    events
    partners
    faqs
  }
  about {
    title
    description
    details
  }
  agenda {
    title
    events {
      title
      date
      location
      description
      cta
      link
    }
  }
  maps {
    title
  }
  marketplace {
    title
    products {
      title
      creator
      cta
    }
  }
  events {
    title
  }
  partners {
    title
  }
  faq{
    title
    items {
        question
        answer
    }
  }
    footer{
        twitter
        twitterUrl
        discord
        discordUrl
        reddit
        redditUrl
        github
        githubUrl
    }
}`
