module.exports = (data, ...options) => {
  let payload = {}
  let errMessage = null
  let missingList = []

  options.map(item => {
    let keyFound = Object.keys(data).find(key => {
      if (item === key) return true
      return false
    })
    if (!keyFound) missingList.push(item)
    else payload[item] = data[item]
  })
  if (missingList.length > 0) errMessage = { err: `missing data`, missingList }

  return { payload, errMessage }
}
