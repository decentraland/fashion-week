const {MarketPlaceQuery} = require('./marketPlaceQuery.js');
const {formatWeiMANA} = require('./mana.js');

exports.fetchMarketPlace = async ()=> {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
        query : MarketPlaceQuery, //: "query {\r\n    collections(where: { id_in: [\"0xcdc94688aaaa4e6be1ef6fc271eb08873ab3df56\"], isApproved: true }) {\r\n      id,\r\n      name\r\n      items {\r\n        id\r\n        blockchainId\r\n        creator\r\n        metadata {\r\n          id\r\n          wearable {\r\n            name\r\n            description\r\n            rarity\r\n            category\r\n          }\r\n          emote {\r\n            name\r\n            description\r\n            rarity\r\n            category\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }",
        variables: {}
    })
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
        redirect: 'follow'
    };

    let res = await fetch("https://api.thegraph.com/subgraphs/name/decentraland/collections-matic-mainnet", requestOptions)
    res = await res.json();

    const items = res.data.collections[0].items
        .map(item => {
            const priceFormatted = formatWeiMANA(item.price);

            const id = item.id.split("-")[0];
            const index = item.id.split("-")[1];
            const uri = `https://market.decentraland.org/contracts/${id}/items/${index}`

            return {
                ...item,
                priceFormatted,
                uri
            }
        })

    return items;
}
