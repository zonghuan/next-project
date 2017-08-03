require('es6-promise').polyfill();

import fetch from 'isomorphic-fetch'

const browserHost = 'http://localhost:3000'
const nodeHost = 'http://localhost:3000'

export default (url,options)=>{
  if(typeof(window)===undefined){
    url = nodeHost + url
  }else{
    url = browserHost + url
  }
  return fetch(url,options)
}
