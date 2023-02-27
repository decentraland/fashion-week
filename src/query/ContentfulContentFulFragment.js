import {graphql} from 'gatsby';

export const ContentfulContentFulFragment = graphql`
fragment ContentfulContentFragment on ExampleContent{
      header{
        agenda
        maps
        marketplace
        events
        partners
        faqs
      }
      landing {
        title
        heroTitle {
          nodeType
          content {
            nodeType
            content {
              value
              nodeType
              marks {
                type
              }
            }
          }
        }
        startDate
        endDate
      }
      about {
        title
        description
        details {
          content {
            nodeType
            content {
              value
              nodeType
              marks {
                type
              }
            }
          }
        }
      }
      agenda{
        title
        cta
      }
      maps{
        title
      }
      marketplace{
        title
      }
      events{
        title
        cta
      }
      partners{
        title
      }
      partner{
        image{
          fields{
            file{
              url
            }
          }
        }
      }
      faq{
        id
        question
        answer
      }
      faqs{
        title
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
}
`
