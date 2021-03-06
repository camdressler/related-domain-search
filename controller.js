const sizeReq = require('./requests/getSize.js')
const urlReq = require('./requests/getURLs.js')

exports.size = async (domain) => {
  return await sizeReq.run(domain)
}

exports.url = async (domain, page) => {
  return await urlReq.run(domain, page)
}
