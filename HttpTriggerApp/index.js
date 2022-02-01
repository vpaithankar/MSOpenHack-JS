module.exports = async function (context, req) {
    context.log(req);
    if(req.method == 'GET') {
    const productId = (req.query.productId || (req.body && req.body.productId));
    const responseMessage = productId
        ? "V2 - The product name for your product id {"+productId+"} is Starfruit Explosion"
        : "Please pass productId in query string or body";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
    } else if(req.method == 'POST') {
        const productId = (req.query.productId || (req.body && req.body.productId));
        const responseMessage = productId
        ? "The product name for your product id {"+productId+"} is Starfruit Explosion"
        : "Please pass productId in query string or body";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
    }

}
