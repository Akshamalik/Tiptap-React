import React from 'react'
import parse from 'html-react-parser'
const ShowPost = ({content}) => {
  return (
    <div>
        {parse(content)}
    </div>
  )
}

export default ShowPost