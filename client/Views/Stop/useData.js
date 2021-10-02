import { useEffect, useState } from 'react'
import { convertXML } from 'simple-xml-to-json'
import data from './exampleData'
let dataURL = 'https://catawba-audio-tour.s3.us-east-2.amazonaws.com'
const getData = ({ trail, slug }) => {
  return data[trail].filter((entry) => entry.slug == slug)
}
export const useData = (searchObj) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    let entry = getData(searchObj)
    if (entry.length < 1) return
    setData(entry[0])

    //   fetch(dataURL)
    //     .then((res) => res.text())
    //     .then((res) => convertXML(res))
    //     .then((obj) => obj.ListBucketResult.children)
    //     .then((objs) =>
    //       objs.filter((obj) => {
    //         let keys = Object.keys(obj)
    //         if (keys.includes('Contents')) {
    //           return true
    //         }
    //         return false
    //       })
    //     )
    //     .then((arr) => {
    //       return arr.map(({ Contents: { children } }) => {
    //         console.log('children', children)

    //         return children.reduce((acc, curr) => {
    //           let keys = Object.keys(curr)
    //           let key = keys[0]
    //           console.log('KEY: ', key)
    //           let value = curr[key].content
    //           console.log('VALUE', value)
    //           return { ...acc, [key]: value }
    //         }, {})
    //       })
    //     })
    //     .then((arr) => {
    //       return arr.map(({ Key, LastModified }) => {
    //         return {
    //           path: Key,
    //           lastModified: LastModified,
    //         }
    //       })
    //     })

    //     .then(console.log)
  }, [])
  return { data }
}

// {
//   trails: {
//     cultural: {
//       yehasuri: {
//         name: "",
//         text: "",
//         img: {
//           url:"",
//           lastModified: ""
//         },
//         audioUrl: "",

//       },

//     }
//   }
// }
