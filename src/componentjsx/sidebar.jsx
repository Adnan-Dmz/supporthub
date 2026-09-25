import { FaTicketAlt, FaUsers, FaCog, FaThLarge } from "react-icons/fa";
import "../componentcss/Sidebar.css"
import { Link } from "react-router-dom";
const Sidebar = ({issidebar}) => {
    return (
 <aside className={issidebar?"onsidebar":"ofsidebar"}>
            <div className="div-title">
                <h4 className="sidebar-title">
                    SUPPORTHUB
                </h4>
            </div>

            <div className="div-links">
                <Link to='/' className="link">
                    <FaThLarge className="sidebar-icon"/>
                    <span className="title-icon">Dashboard</span>
                </Link>

                <Link to='/tickets' className="link">
                    <FaTicketAlt className="sidebar-icon"/>
                    <span className="title-icon">Tickets</span>
                </Link>

                <Link to='/customers' className="link">
                    <FaUsers className="sidebar-icon"/>
                    <span className="title-icon">Customers</span>
                </Link>

                <Link to='/setting'  className="link">
                    <FaCog className="sidebar-icon"/>
                    <span className="title-icon">Setting</span>
                </Link>

            </div>
             <div className="div-admin">
                <div>
                   <div className='admin-img'>A</div>
                </div>
                <div className="p-admin">
                    <h4 className="A-D">Adnan Dami</h4>
                    <span className="span-admin">Admin</span>
                    <span className="gmail">adnan55dmz@gamil.com</span>
                </div>
            </div>
        </aside>
        
       
    )
}
export default Sidebar