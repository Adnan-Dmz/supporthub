import { createContext } from "react"
import  useStateTitle  from "../custom hook/CHtitleroute"
export const TitleContext=createContext(null)
export const TitleContextProvider = (props) => {
    const {titleroute,setTitleroute}=useStateTitle()
    return <TitleContext.Provider value={{titleroute,setTitleroute}}>{props.children}</TitleContext.Provider>
}