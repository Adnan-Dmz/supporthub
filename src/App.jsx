
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './routejsx/dashboard'
import Tickets from './routejsx/tickets'
import Customers from './routejsx/customers'
import Settings from './routejsx/settings'
import Sidebar from './componentjsx/sidebar'
import Nav from './componentjsx/nav'
import ScreenWidth from './with'
import { useState } from 'react'
function App() {
  const [showsidebar,setsidebar]=useState(false)
  return (
    <div className='div-app'>
        <BrowserRouter>
            <Nav changesidebar={()=>setsidebar(prev=>!prev)} issidebar={showsidebar}/>
              <div className='layout'>
            <Sidebar issidebar={showsidebar}/>
            <div className='Routes'>
         <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/tickets' element={<Tickets/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/settings' element={<Settings/>}/>
         </Routes>
         </div>
           <ScreenWidth />
           </div>
        </BrowserRouter>
    </div>
    
  )
}

export default App
