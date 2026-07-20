import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Instead of arbitrary pixels:

// text - [15px]

// use

// text - sm md: text - base

// Instead of

// text - [13px]

// use

// text - xs sm: text - sm

// Instead of

// text - [11px]

// use

// text - [10px] sm: text - xs
// For your headings

// Instead of:

// text - 5xl md: text - 6xl

// make them responsive down to mobile:

// text - 3xl sm: text - 4xl md: text - 5xl lg: text - 6xl
