const {createClient} = require('contentful');


let contentfulClient;
const getContentfulClient = () => {
    if (!contentfulClient) {
        let space = process.env.CONTENTFUL_SPACE_ID;
        let accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
        let environment = process.env.CONTENTFUL_ENVIRONMENT;

        contentfulClient = createClient({
            space,
            accessToken,
            environment,
            removeUnresolved: true,
            host: 'cdn.contentful.com'//usePreviewApi ? "preview.contentful.com" : "cdn.contentful.com",
        });
    }
    return contentfulClient;
};

/**
 * Fetches and formats (simplifies) data from contentful
 * @returns {Promise<{res: *, content: *}>}
 */
exports.fetchContent = async ()=> {
    let contentfulClient = getContentfulClient();
    const res = await contentfulClient.getEntries({'sys.contentType.sys.id[in]': 'website_landing,website_about,website_faq,website_menu,website_metadata,website_partner'});
    const content = res.items.reduce((acc, item) => {

        let type = item.sys.contentType.sys.id;
        type = type.split('_').pop()

        if (acc[type]) {
            if (!Array.isArray(acc[type]))
                acc[type] = [acc[type]];

            acc[type].push(item.fields)
        } else {
            acc[type] = item.fields
        }

        return acc
    }, {})
    return {content, res};
}
