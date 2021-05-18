const axios = require('./request')
const fs = require('fs')
function getData(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      return Promise.reject()
    }
    id = String(id)
    let url = 'https://geo.datav.aliyun.com/areas_v2/bound/geojson?code='
    if (id.length === 6 && id.substring(id.length - 4) === '00') {
      url += id + '_full'
    } else {
      url += id
    }
    try {
      const res = await axios({
        url: url
      })
      // console.log(id)
      // console.log(JSON.stringify(res).length)
      // console.log(JSON.stringify(res))
      fs.writeFile(`./jsonData/${id}.json`, JSON.stringify(res), {encoding: 'utf8', flag: 'w'}, err => {
        if (err) {
          console.log(e)
        }
      })
      return resolve()
    } catch (e) {
      console.log(e)
      return reject()
      // console.log(e)
    }
  })
}
module.exports = getData
