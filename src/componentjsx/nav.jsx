import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { StateSidebar } from '../context/contextstatesidebare'
import "../componentcss/Nav.css"
import { SearchContext } from "../context/SearchContext"
import { TitleContext } from "../context/contexttitleroute"
import { StateSetting } from "../context/contextsetting"
const Nav = () => {
    const { changesidebar, showsidebar } = useContext(StateSidebar)
    const { setSearch } = useContext(SearchContext)
    const { titleroute } = useContext(TitleContext)
    const { nameSetting, one, backgroundside } = useContext(StateSetting)
    return (
        <header className={`site-header ${showsidebar ? "site-header-onsidebar" : "site-header"}`}>
            <div className='header-container'>
                <div className='header-left'>
                    <div>
                        <button className='btn-Bars' onClick={changesidebar}>
                            <FontAwesomeIcon icon={faBars} className='icon-Bars' />
                        </button>
                    </div>
                    <div>
                        <h4 className='title-route'>{titleroute}</h4>
                    </div>
                </div>
                <div className='header-center'>
                    <input className='input-search' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                    <button className='btn-search'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-MG' />
                    </button>
                </div>
                <div className='header-right'>
                    <div>
                        <div className="number-ticket"></div>
                        <FontAwesomeIcon icon={faBell} className='icon-Bell' />
                    </div>
                    <div className='profile'>
                        {backgroundside ? <img className="img-nav" src={backgroundside} /> :
                            <div className='profile-img'>{one}</div>
                        }

                        <h5 className='name-admin'>{nameSetting}</h5>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Nav