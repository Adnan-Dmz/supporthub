import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "../componentcss/Nav.css"
const Nav = ({changesidebar ,issidebar}) => {
    return (
        <header className={`site-header ${issidebar?"site-header-Bars":"site-header"}`}>
         <div className='header-container'> 
            <div className='header-left'>
                <div>
                    <button className='btn-Bars' onClick={changesidebar}>
                        <FontAwesomeIcon icon={faBars}  className='icon-Bars'/>
                    </button>
                </div>
                <div>
                    <h4 className='title-route'>Daeshboard</h4>
                </div>
            </div>
            <div className='header-center'>
                <input className='input-search' />
                <button className='btn-search'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-MG'/>
                </button>
            </div>
            <div className='header-right'>
                <div>
                    <FontAwesomeIcon icon={faBell} className='icon-Bell'/>
                </div>
                <div className='profile'>
                    <div className='profile-img'>A</div>
                    <h5 className='name-admin'>Adnan</h5>
                </div>
            </div>
            </div>

        </header>
    )
}
export default Nav