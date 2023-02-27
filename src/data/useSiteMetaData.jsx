import {graphql, useStaticQuery} from 'gatsby';

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
      example {
        content{
          metadata{
            title
          }
        }
      }
    }
  `)

    return data.example.content.metadata;
}
