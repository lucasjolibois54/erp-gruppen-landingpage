import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Fade from 'react-reveal/Fade'

function TagTemplate(props) {
  return <div>{props.name}</div>
}

export default TagTemplate
