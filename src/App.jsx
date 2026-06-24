import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour12: false })
  }

  return (
    <div className="container">
      <div className="clock-box">
        <div className="time-display">
          {formatTime(dateTime)}
        </div>
        <div className="date-display">
          {formatDate(dateTime)}
        </div>
      </div>
    </div>
  )
}

export default App
