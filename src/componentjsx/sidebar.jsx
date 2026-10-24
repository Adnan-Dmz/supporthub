import { FaTicketAlt, FaUsers, FaCog, FaThLarge } from "react-icons/fa";
import "../componentcss/Sidebar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import {StateSidebar} from "../context/contextstatesidebare"
import {StateSetting} from "../context/contextsetting"
const Sidebar = () => {
    const {showsidebar}=useContext(StateSidebar)
    const {emailSetting,nameSetting,backgroundside,one}=useContext(StateSetting)
    return (
 <aside className={showsidebar?"onsidebar":"ofsidebar"}>
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

                <Link to='/settings'  className="link">
                    <FaCog className="sidebar-icon"/>
                    <span className="title-icon">Setting</span>
                </Link>

            </div>
             <div className="div-admin">
                <div>
                    {
                        backgroundside? <img className="img-sidebaree" src={backgroundside}/> :
  <div className='admin-img'>
                    {one}
                    </div>
                    }
                 
                </div>
                <div className="p-admin">
                    <h4 className="A-D">{nameSetting}</h4>
                    <span className="span-admin">Admin</span>
                    <span className="gmail">{emailSetting}</span>
                </div>
            </div>
        </aside>
        
       
    )
}
export default Sidebar