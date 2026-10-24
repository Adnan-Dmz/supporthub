import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './routejsx/dashboard'
import Tickets from './routejsx/tickets'
import Customers from './routejsx/customers'
import Settings from './routejsx/settings'
import Sidebar from './componentjsx/sidebar'
import Nav from './componentjsx/nav'
import ScreenWidth from './with'
import { useContext, useState } from 'react'
import { TicketContextProvider } from "./context/contextticket"
import { StateSidebarProvider, StateSidebar } from './context/contextstatesidebare'
import {SearchContextProvider} from "./context/SearchContext"
import {TitleContextProvider} from "./context/contexttitleroute"
import {StateSettingProvider} from "./context//contextsetting"
const App = () => {
  return (
    <StateSettingProvider>
    <TitleContextProvider>
    <SearchContextProvider>
    <StateSidebarProvider>
      <TicketContextProvider>
        < AppContact />
      </TicketContextProvider>
    </StateSidebarProvider>
    </SearchContextProvider>
    </TitleContextProvider>
    </StateSettingProvider>
  )
}
function AppContact() {
  const { showsidebar } = useContext(StateSidebar)
  return (
    <div className='div-app'>
      <BrowserRouter basename='/sopporthun/'>
        <Nav />
        <div className='layout'>
          <Sidebar />
          <div className={showsidebar ? "onsidebar-route" : "ofsidebar-route"}>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/tickets' element={<Tickets />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
          <ScreenWidth />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
