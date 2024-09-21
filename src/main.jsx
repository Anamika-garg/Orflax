import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Layout from './components/Layout.jsx'
import {createBrowserRouter  , RouterProvider} from 'react-router-dom';
import AboutPage from './Pages/AboutPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import ProductPage from './Pages/ProductPage.jsx'
// import ReactDOM from 'react-dom';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    errorElement : <ErrorPage/>,
    children : [
      {index : true , element : <App/>},
      {path : '/About' , element : <AboutPage/>},
      {path : '/Contact' , element : <ContactPage/>},
      {path : '/Products' , element : <ProductPage/>},
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
