var getData = require('./utils/getData');
const axios = require('./utils/request')
// getData('100000')

// getRegion
const getRegion = async (id) => {
  console.log(id)
  // http://192.168.1.106:8207/common/tree/region/
  // pid
  const res = await axios({
    url: 'http://192.168.1.106:8207/common/tree/region/',
    params: {
      pid: id || ''
    }
  })
  if (res.code === 0) {
    const regionArr = res.data
    for (const item of regionArr) {
      const code = item.code
      if (item && code) {
        await getData(item.code)
        if (item.level <= 2) {
          setTimeout(() => {
            getRegion(code)
          })
        }
      }
    }
  }
  return Promise.resolve()
}
getRegion()
