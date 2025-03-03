//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import RoomSymbol from './components/RoomSymbol'
import AddRoom from './components/AddRoom'
import Room from './components/Room'
import { AppProvider } from './AppContext';

function App() {

  return (
    <>
      <AppProvider>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<RoomSymbol />} path='/RoomSymbol' />
          <Route element={<AddRoom />} path='/AddRoom' />
          <Route element={<Room />} path="/Room/:roomName/:roomType" />         
        </Routes>
      </AppProvider >
    </>
  )
}

export default App