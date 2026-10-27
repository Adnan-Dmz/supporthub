import { useContext, useEffect } from "react"
import "../componentcss/Dashboard.css"
import { TicketContext } from "../context/contextticket"
import { ticketReducer, initialstate } from "../reducer/ticketReducer"
import { StateSidebar } from "../context/contextstatesidebare"
import { SearchContext } from "../context/SearchContext"
import { text } from "@fortawesome/fontawesome-svg-core"
import { TitleContext } from "../context/contexttitleroute"
const Dashboard = () => {
    const { showsidebar } = useContext(StateSidebar)
    const { state } = useContext(TicketContext)
    const Total = state.tickets.length;
    const Open = state.tickets.filter((ticket) => ticket.status === "open").length;
    const Progress = state.tickets.filter((ticket) => ticket.status === "in-progress").length;
    const Resolved = state.tickets.filter((ticket) => ticket.status === "resolved").length;
    const { search } = useContext(SearchContext)
    const { setTitleroute } = useContext(TitleContext)
    useEffect(() => {
        setTitleroute("DASHBOARD")
    }, [])
    const filtertickets = state.tickets.filter((ticket) => {
        const query = search.trim().toLowerCase();
        return (
            String(ticket.id).includes(query) ||
            ticket.customer.firstName.toLowerCase().includes(query) ||
            ticket.status.toLowerCase().includes(query) ||
            ticket.subject.toLowerCase().includes(query)
        )
    })
    return (
        <>
            <div className="route-dashboard">
                <div className={`div-status-number ${showsidebar ? "div-status-number-onsidebar" : "div-status-number-ofsidebar"}`}>
                    <div className={`status-number ${showsidebar ? "status-number-onsidebar" : "status-number-ofsidebar"}`}>
                        <label className="lable-status">Total Tickets</label>
                        <p className="status-p">{Total}</p>
                    </div>
                    <div className={`status-number ${showsidebar ? "status-number-onsidebar" : "status-number-ofsidebar"}`}>
                        <label className="lable-status">Open Tickets</label>
                        <p className="status-p">{Open}</p>
                    </div>
                    <div className={`status-number ${showsidebar ? "status-number-onsidebar" : "status-number-ofsidebar"}`}>
                        <label className="lable-status">In Progress</label>
                        <p className="status-p">{Progress}</p>
                    </div>
                    <div className={`status-number ${showsidebar ? "status-number-onsidebar" : "status-number-ofsidebar"}`}>
                        <label className="lable-status">Resolved</label>
                        <p className="status-p">{Resolved}</p>
                    </div>
                </div>

            </div>
            <div className="div-table-mother">
                <div className="div-table">
                    <table className="table">
                        <thead>
                            <th >ID</th>
                            <th >Subject</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Date</th>
                        </thead>
                        <tbody>
                            {filtertickets.map(ticket => (
                                <tr key={ticket.id} >
                                    <td>{ticket.id}</td>
                                    <td>{ticket.subject}</td>
                                    <td>{ticket.customer.firstName}</td>
                                    <td className="textcenter">
                                        <span className={ticket.status === "open" ? "blue" : ticket.status === "in-progress" ? "orange" : ticket.status === "resolved" ? "green" : "default"}>{ticket.status}</span>
                                    </td>
                                    <td>{ticket.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Dashboard