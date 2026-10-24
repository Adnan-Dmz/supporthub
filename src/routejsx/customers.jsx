import { use, useContext, useState ,useEffect} from "react"
import { TicketContext } from "../context/contextticket"
import {SearchContext} from "../context/SearchContext"
import "../componentcss/Customer.css"
import { initialstate } from "../reducer/ticketReducer"
import {TitleContext} from "../context/contexttitleroute"
const Customers = () => {
    const { state, dispatch } = useContext(TicketContext)
    const [SelectCustomer, setSelectCustomer] = useState(null)
    const [inputName, setInputName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email,setEmail]=useState("")
    const [selectDelet,setSelectDelet]=useState(null)
    const {search}=useContext(SearchContext)
      const {setTitleroute}=useContext(TitleContext)
          useEffect(()=>{
              setTitleroute("CUSTOMER")
          },[])
    const filterCustomer=state.tickets.filter((ticket)=>{
         const query=search.trim().toLowerCase();
         return (
           String(ticket.id).includes(query)||
           ticket.customer.firstName.toLowerCase().includes(query)||
           ticket.customer.lastName.toLowerCase().includes(query)||
           ticket.customer.email.toLowerCase().includes(query)
         )
    })
    return (
        <div className="div-customer">
            <div className="div-selectDelet">
                {selectDelet &&(
                    <div className="divchild-selectDelet">
                        <div>
                            <p>ایا  مطمعن هستید که میخواهیدتیکت حذف شود؟</p>
                        </div>
                        <div className="div-btns">
                            <button className="btn-deletyes" onClick={()=>{
                                dispatch({
                                    type:"DELET_CUSTOMER",
                                    payload:{
                                    id:selectDelet.id,
                                    } 
                                })
                                setSelectDelet(null)
                            }}>Yes</button>
                            <button className="btn-deletno" onClick={()=>setSelectDelet(null)}>No</button>
                        </div>
                    </div>
                )}
            </div>
            <diV className="divmother-SelectCustomer">
                {SelectCustomer && (
                    <div className="div-allselect">
                    <div className="div-SelectCustomer">
                        <div className="div-lableinputbtn1">
                            <label className="lable-chanhecustomer">ChangeFirstName:</label>
                            <input className="input-changecustomer" type="text" value={inputName} onChange={(e) => {
                         
                            setInputName(e.target.value) 
                        
                            }}></input>
                            <button className="btn-changecustomers" onClick={() => {
                               if(!inputName.trim()){
                                alert("وارد کردن نام الزامی است");
                                return;
                               }
                                dispatch({
                                    type: "UPDATE_CUSTOMER",
                                    payload: {
                                        id: SelectCustomer.customer.id,
                                        changes: {
                                            firstName: inputName
                                        }
                                    }
                                });
                                setInputName("")
                            }


                            }>Change</button>
                        </div>
                        <div className="div-lableinputbtn2">
                            <label className="lable-chanhecustomer">ChangeLastName</label>
                            <input className="input-changecustomer" type="text" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                            <button className="btn-changecustomers" onClick={() => {
                                   if(!lastName.trim()){
                                alert("وارد کردن نام خانوادگی الزامی است");
                                return;
                               }
                                dispatch({
                                    type: "UPDATE_CUSTOMER",
                                    payload: {
                                        id:SelectCustomer.customer.id,
                                        changes: {
                                            lastName: lastName
                                        }
                                    }
                                });
                                setlastName("")
                            }


                            }>Change</button>
                        </div>
                        <div className="div-lableinputbtn3">
                            <label className="lable-chanhecustomer">ChangeEmail:</label>
                            <input className="input-changecustomer" value={email} type="email" onChange={(e)=>setEmail(e.target.value)}></input>
                            <button className="btn-changecustomers" onClick={()=>{
                                   if(!email.trim()){
                                alert("وارد کردن ایمیل الزامی است");
                                return;
                               }
                                   dispatch({
                                    type: "UPDATE_CUSTOMER",
                                    payload:{
                                        id:SelectCustomer.customer.id,
                                         changes:{
                                            email:email
                                         }
                                    }
                                   });
                                   setEmail("")
                                }
                            }>Change</button>
                        </div>
                      
                    </div>
                      <div><button className="btn-closenull" onClick={()=>setSelectCustomer(null)}>Close</button></div>
                      </div>
                )

                }
            </diV>
            <div className={` ${SelectCustomer?"div-tablecustomer":"div-tablecustomerOnEdit"}`}>
            <table className="table-customer">
                <thead>
                    <th>Customer ID</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {filterCustomer.map((ticket) =>
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.customer.firstName}</td>
                            <td>{ticket.customer.lastName}</td>
                            <td>{ticket.customer.email}</td>
                            <td className="td-btn">
                                <button className="btn-editcustomer" onClick={() => setSelectCustomer(ticket)}>Edit</button>
                                <button className="btn-deletecustomet" onClick={() =>setSelectDelet(ticket)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default Customers