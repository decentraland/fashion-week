export const MarketPlaceQuery = `
query {
    collections(where: { id_in: ["0xcdc94688aaaa4e6be1ef6fc271eb08873ab3df56"], isApproved: true }) {
      id,
      name
      items {
        id
        blockchainId
        creator
        price
        image
        metadata {
          id
          wearable {
            name
            description
            rarity
            category
            bodyShapes
          }
          itemType
          emote {
            name
            description
            rarity
            category
          }
        }
      }
    }
  }
`;
