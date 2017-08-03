
import React from 'react'
import fetch from '../util/fetch.js'

var Hello = props => <div>{props.msg}</div>


Hello.getInitialProps = async ({req}) => {
  const res = await fetch('/api/test')
  const json = await res.json()
  return json
}

export default Hello
