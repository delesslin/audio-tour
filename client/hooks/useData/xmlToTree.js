import { convertXML } from 'simple-xml-to-json'

let xmlToTree = function (url) {
  console.log(url)
  return fetch(url)
    .then((res) => res.text())
    .then((res) => convertXML(res))
    .then((obj) => obj.ListBucketResult.children)
    .then((objs) =>
      objs.filter((obj) => {
        let keys = Object.keys(obj)
        if (keys.includes('Contents')) {
          return true
        }
        return false
      })
    )
    .then((arr) => {
      return arr.map(({ Contents: { children } }) => {
        return children.reduce((acc, curr) => {
          let keys = Object.keys(curr)
          let key = keys[0]
          let value = curr[key].content
          return { ...acc, [key]: value }
        }, {})
      })
    })
    .then((arr) => {
      return arr.map(({ Key, LastModified }) => {
        return {
          path: Key,
          lastModified: LastModified,
        }
      })
    })

    .then((arr) => {
      // console.log(arr)
      let trails = {}
      arr.forEach((p) =>
        p.path.split('/').reduce((o, k, p) => {
          if (o[k]) {
            o[k] = o[k]
          } else {
            if (
              k == 'audio' ||
              k == 'image' ||
              k == 'qr' ||
              k == 'data.json' ||
              k == 'transcript.txt'
            ) {
              o[k] = {
                lastModified: p.lastModified,
                file: '',
                url: '',
              }
            } else {
              if (k.indexOf('.') == -1) {
                o[k] = {}
              }
            }
          }
          return o[k]
        }, trails)
      )
      let tempOut = { arr: arr, trails: trails.trails }
      return tempOut
    })
    .then((tempOut) => {
      // console.log(tempOut)
      let arr = tempOut.arr
      let trails = tempOut.trails
      arr.forEach((p) => {
        let path = p.path.split('/')
        if (path[path.length - 1].indexOf('.') > 0) {
          trails[path[1]][path[2]][path[3]].file = path[path.length - 1]
          trails[path[1]][path[2]][path[3]].lastModified = p.lastModified
        }
      })
      return trails
    })
    .then((obj) => {
      // console.log(obj)
      let trails = Object.keys(obj)

      trails.forEach((trail) => {
        let stops = Object.keys(obj[trail])
        stops.forEach((stop) => {
          let assets = Object.keys(obj[trail][stop])
          assets.forEach((asset) => {
            // TODO: handle when asset == data.json or 'transcript.txt'
            if (asset == 'data.json' || asset == 'transcript.txt') {
              let k = asset.split('.')[0]
              obj[trail][stop][k] = {
                ...obj[trail][stop][asset],
                url: `${url}/trails/${trail}/${stop}/${asset}`,
              }
              delete obj[trail][stop][asset]
              return
            }
            let fileName = obj[trail][stop][asset].file
            obj[trail][stop][
              asset
            ].url = `${url}/trails/${trail}/${stop}/${asset}/${fileName}`
          })
        })
      })
      // console.log(obj)
      return obj
    })
}

export default xmlToTree
