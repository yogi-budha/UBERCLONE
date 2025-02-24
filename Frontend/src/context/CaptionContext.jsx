import React, {  useState } from 'react'

export const captionContext = React.createContext()

function CaptionContext({children}) {
    const [caption,setCaption] = useState()
  return (
    <captionContext.Provider value={{
        caption,setCaption
    }}>{children}</captionContext.Provider>
  )
}

export default CaptionContext