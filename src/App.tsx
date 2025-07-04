//import { Route, Router, Routes } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx'
import PropertyListing from './pages/Property_listing.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Property from './pages/Property.tsx'
import Contact from './pages/Contact.tsx'
import Cart from './pages/Cart.tsx'
import Footer from './components/Footer.tsx'
import Listings from './pages/Listings.tsx'

function App() {
  return (
    <>
      <Navbar />
      {/* Navbar is always displayed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/property/:id" element={<PropertyListing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<h1></h1>} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
      <Footer />
      {/* Footer is always displayed */}
      {/* You can conditionally render the footer based on the route if needed */}
      {/* <Footer /> can be placed here if you want it to appear on all pages */}
      {/* Or you can conditionally render it based on the route */}
      {/* Example: {!isAdminRoute && <Footer />} */}
      {/* This will render the footer only if the current route is not an admin route */}
      {/* Adjust the condition based on your routing logic */}
      {/* If you have an admin route, you can add it here */}
      {/* <Route path="/admin/*" element={<Admin />} /> */}
      {/* This will render the Admin component for any route starting with /admin */}
      {/* You can also add a 404 page or a NotFound component */}
    </>
  )
}

export default App
