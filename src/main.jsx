import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Router, Route, Routes, useParams } from 'react-router-dom'
import { Home } from './pages/home'
import { Details } from './pages/details'
import './global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/details/:useId' element={<Details/>}></Route>
        </Routes>
    </BrowserRouter>
)
