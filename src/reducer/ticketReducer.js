import tickets from "../data/tickets"
export const initialstate={
   tickets:tickets,
}
export const ticketReducer=(state,action)=>{
 switch(action.type){
   case "UPDATE_TICKET" :
      return {
         ...state ,
          tickets:state.tickets.map((ticket)=>
         ticket.id === action.payload.id
          ? 
          {...ticket,...action.payload.changes}
          :ticket
         )
      }
      case "UPDATE_CUSTOMER" :
         return {
            ...state,
            tickets:state.tickets.map((ticket)=>
               ticket.customer.id===action.payload.id
            ?
            {...ticket,
               customer:{
                  ...ticket.customer,
                  ...action.payload.changes
               },}
            :ticket
            ),
         }
         case "DELET_CUSTOMER":
            return {
               ...state,
tickets:state.tickets.filter(ticket=>ticket.customer.id!==action.payload.id)
            }
    default: return state;
 }
}