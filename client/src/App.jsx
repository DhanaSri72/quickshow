import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route, useLocation } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
import Movies from './pages/Movies'
import Home from './pages/Home'
import Seatlayout from './pages/Seatlayout'
import Favorite from './pages/Favorite'
import MyBookings from './pages/MyBookings'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { Navigate } from 'react-router-dom';
import Layout from './pages/admin/Layout'
import DashBoard from './pages/admin/DashBoard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'

const App = () => {
  const isAdminRoute=useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar />}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/movies/:id" element={<MovieDetails />}/>
      <Route path="/movies/:id/:date" element={<Seatlayout />}/>
      <Route path="/my-bookings" element={<MyBookings />}/>
      <Route path="/favorite" element={<Favorite />}/>

      <Route path='/admin/*' element={<Layout/>}>
      <Route index element={<DashBoard/>}/>
      <Route path='add-shows' element={<AddShows/>}/>
      <Route path='list-shows' element={<ListShows/>}/>
      <Route path='list-bookings' element={<ListBookings/>}/>
      </Route>
      
    </Routes>
    {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
