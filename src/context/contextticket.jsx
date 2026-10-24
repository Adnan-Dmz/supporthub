import { createContext } from "react";
import useTicket from "../custom hook/CHusereducer"
export const TicketContext=createContext(null)
export const TicketContextProvider=(props)=>{
    const {state, dispatch}=useTicket();
    return <TicketContext.Provider value={{state, dispatch}}>{props.children}</TicketContext.Provider>
}
