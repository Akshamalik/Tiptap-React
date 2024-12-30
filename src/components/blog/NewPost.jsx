import { useState } from "react"
import Tiptap from "../Tiptap"
import ShowPost from "./ShowPost"

const NewPost = () => {
  const [htmlContent,sethtmlContent]=useState('')
  const handleEditorContentSave=(html)=>{
    sethtmlContent(html)
  }
  return (
    <div>
        <Tiptap onEditorContentSave={handleEditorContentSave}/>
        <hr/>
        <ShowPost content={htmlContent}/>
    </div>
  )
}

export default NewPost