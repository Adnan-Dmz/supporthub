import { createContext } from "react";
import useStatesidebar from "../custom hook/CHstatesidebar"
export const StateSidebar=createContext(
    {
showsidebar:false,
changesidebar:()=>{},
    }
)
export const StateSidebarProvider=(props)=>{
    return <StateSidebar.Provider value={useStatesidebar()}>{props.children}</StateSidebar.Provider>
}