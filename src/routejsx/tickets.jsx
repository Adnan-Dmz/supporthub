import "../componentcss/Ticket.css"
import { useContext, useState, useEffect } from "react"
import { TicketContext } from "../context/contextticket"
import { Button } from "bootstrap"
import { SearchContext } from "../context/SearchContext"
import { TitleContext } from "../context/contexttitleroute"
const Tickets = () => {
  const { state, dispatch } = useContext(TicketContext)
  const [sortBy, setSortBy] = useState("newest")
  const [Status, setStatus] = useState("all")
  const [Priority, setPriority] = useState("all")
  const [selectTicket, setselecktTicket] = useState(null)
  const [valuedate, setValuedate] = useState("")
  const { setTitleroute } = useContext(TitleContext)
  useEffect(() => {
    setTitleroute("TICKETS")
  }, [])
  const { search } = useContext(SearchContext)
  const displayedTickets = [...state.tickets].sort(
    (a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt)
      }
      return new Date(a.createdAt) - new Date(b.createdAt)
    }).filter((x) => {
      if (Status === "open") {
        return x.status === "open"
      } else if (Status === "in") {
        return x.status === "in-progress"
      } else if (Status === "resolved") {
        return x.status === "resolved"
      } else {
        return x.status
      }
    }
    ).filter((y) => {
      if (Priority === "low") {
        return y.priority === "low"
      } else if (Priority === "high") {
        return y.priority === "high"
      } else if (Priority === "medium") {
        return y.priority === "medium"
      } else {
        return y.priority
      }
    }).filter((ticket) => {
      const query = search.trim().toLowerCase();
      return (
        ticket.customer.firstName.toLowerCase().includes(query) ||
        ticket.status.toLowerCase().includes(query) ||
        ticket.message.includes(query) ||
        ticket.priority.toLowerCase().includes(query)
      )
    })
  return (
    <>
      <div className={`div-routticket ${selectTicket ? "div-routticketOnselect" : "div-routticket"}`}>
        <div className="divmother-tabelticket">

          <div className="div-selects">
            <div className="div-select">
              <label className="lable-fillter">مرتب سازی:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="selectt">
                <option value={"newest"}>Newest</option>
                <option value={"oldest"}>Oldest</option>
              </select>
            </div>
            <div className="div-select">
              <label className="lable-fillter">وضعیت:</label>
              <select value={Status} onChange={(e) => setStatus(e.target.value)} className="selectt">
                <option value={"all"}>All</option>
                <option value={"open"}>Open</option>
                <option value={"in"}>In progress</option>
                <option value={"resolved"}>Resolved</option>
              </select>
            </div>
            <div className="div-select">
              <label className="lable-fillter">الویت:</label>
              <select value={Priority} onChange={(e) => setPriority(e.target.value)} className="selectt">
                <option value={"all"}>All</option>
                <option value={"high"}>High</option>
                <option value={"low"}>Low</option>
                <option value={"medium"}>Medium</option>
              </select>
            </div>
          </div>

          <div className="div-widthselect">
            {selectTicket && (
              <div className="div-selectchangeticket">
                <div className="div-customerchangeTicket">
                  <div>
                    <p className="p-name">{selectTicket.customer.firstName}{selectTicket.customer.lastName}</p>
                    <p className="p-email">{selectTicket.customer.email}</p>
                  </div>
                  <div>
                    <p className="p-date">{selectTicket.createdAt}</p>
                    <div>
                      <input placeholder="Update Data" className="chanhedateticket" value={valuedate} onChange={(e) => setValuedate(e.target.value)} />
                      <button className="btn-chanhedateticket" onClick={() =>
                        dispatch({
                          type: "UPDATE_TICKET",
                          payload: {
                            id: selectTicket.id,
                            changes: {
                              createdAt: new Date(valuedate).toISOString()
                            }
                          }
                        })
                      }>Change</button>
                    </div>
                  </div>
                </div>
                <div className="div-statuschangeTicket">
                  <div>
                    <label className="lable-chanheticket">Status:</label>
                    <select className="select-changeticket" value={selectTicket.status} onChange={(a) =>
                      dispatch({
                        type: "UPDATE_TICKET",
                        payload: {
                          id: selectTicket.id,
                          changes: {
                            status:
                              a.target.value
                          }
                        }
                      })
                    }>
                      <option value="open">Open</option>
                      <option value="in-progress">In-Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </div>
                  <div>
                    <label className="lable-chanheticket">Priority:</label>
                    <select className="select-changeticket" value={selectTicket.priority} onChange={((a) =>
                      dispatch({
                        type: "UPDATE_TICKET",
                        payload: {
                          id: selectTicket.id,
                          changes: {
                            priority: a.target.value
                          }
                        }
                      })
                    )}>
                      <option value="high">High</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                    </select>
                  </div>
                </div>
                <div className="div-messagechangeTcket">
                  <label className="lable-message">Message:</label>
                  <p className="p-messagee">{selectTicket.message}</p>
                </div>
                <div>
                  <button className="btn-closechanheticket" onClick={() => setselecktTicket(null)}>CloseTicket</button>
                </div>

              </div>
            )}
          </div>

          <div className={`div-tableticket ${selectTicket ? "div-tableticketOnselect" : "div-tableticket"} `}>
            <table className="tableticket">
              <thead>
                <th>Name</th>
                <th>Message</th>
                <th>Status</th>
                <th>Priority</th>
              </thead>
              <tbody>
                {displayedTickets.map(ticket => (
                  <tr className="tr-ticket" key={ticket.id} onClick={() => setselecktTicket(ticket)}>
                    <td>{ticket.customer.firstName}</td>
                    <td>{ticket.message}</td>
                    <td className="textcenter">
                      <span className={ticket.status === "open" ? "blue" : ticket.status === "in-progress" ? "orange" : ticket.status === "resolved" ? "green" : "default"}>{ticket.status}</span>
                    </td>
                    <td>
                      <span className={ticket.priority === "high" ? "red" : ticket.priority === "medium" ? "yellow" : ticket.priority === "low" ? "gray" : "default"}>{ticket.priority}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default Tickets