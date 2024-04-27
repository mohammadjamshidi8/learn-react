import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './components/Counter'
import Temp from './Temp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Counter /> */}
    <Temp/>
  </React.StrictMode>,
)
