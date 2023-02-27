const {fetchContent} = require('./src/data/content.js');

const fs = require('fs').promises;
const fetch = (...args) =>
    import(`node-fetch`).then(({default: fetch}) => fetch(...args))

require('dotenv').config({
    path: `.env`,
})


exports.sourceNodes = async ({
                                 actions: {createNode},
                                 createContentDigest,
                             }) => {

    //todo propping missing entries with json...
    let tempJson = await fs.readFile('./src/data/temp.json');
    tempJson = JSON.parse(tempJson);

    console.log({tempJson})
    let {content, res} = await fetchContent();

    createNode({
        content: {
            ...tempJson,
            ...content
        },
        id: `example-build-time-data`,
        parent: null,
        children: [],
        internal: {
            type: `Example`,
            contentDigest: createContentDigest(res),
        },
    })
}
