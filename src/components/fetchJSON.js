import fetch from 'isomorphic-fetch'

const fetchJSON = url => {
  return new Promise(( resolve, reject ) => {
    fetch( url )
      .then( json => resolve( json.json() ))
      .catch( err => reject( err ))
  })
}

export default fetchJSON