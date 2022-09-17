import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "./assets/css/animate.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/flaticon.css"
import "./assets/css/flexslider.css"
import "./assets/css/google-sans.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/menu.css"
import "./assets/css/owl.carousel.min.css"
import "./assets/css/owl.theme.default.min.css"
import "./assets/css/style.css"





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
