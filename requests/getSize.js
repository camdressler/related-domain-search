const request = require("request-promise")

exports.run = async (url) => {
    return JSON.parse(await request.get(`https://otx.alienvault.com/otxapi/indicators/domain/url_list/${url}`))
}