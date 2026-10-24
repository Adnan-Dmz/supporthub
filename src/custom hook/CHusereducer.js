import { useState , useReducer, useEffect} from 'react'
import {ticketReducer , initialstate} from "../reducer/ticketReducer"
const useTicket=()=>{
         const [state, dispatch]=useReducer(
              ticketReducer,
              initialstate,
              ()=>{
                      const saved=localStorage.getItem("app-start");
                      return saved ? JSON.parse(saved) :initialstate;
                    }
          )
          useEffect(()=>{
            localStorage.setItem("app-start",JSON.stringify(state))
          },[state])
       return {state, dispatch} ;
}
export default useTicket;