import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [dateTime, setDateTime] = useState(new Date())
  const [use12Hour, setUse12Hour] = useState(false)

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
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: use12Hour })
  }

  return (
    <div className="container">
      <div className="clock-box">
        <div className="time-display">
          {formatTime(dateTime)}
        </div>
        <button onClick={() => setUse12Hour(!use12Hour)}>
          Switch to {use12Hour ? '24-hour' : '12-hour'} format
        </button>
        <div className="date-display">
          {formatDate(dateTime)}
        </div>
        <div className="env-display">
          <p><strong>NAME:</strong> {import.meta.env.VITE_NAME}</p>
          <p><strong>DEVELOPER:</strong> {import.meta.env.VITE_DEVELOPER}</p>
        </div>
      </div>
    </div>
  )
}

export default App
