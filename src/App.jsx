import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [dateTime, setDateTime] = useState(new Date())
  const [is24Hour, setIs24Hour] = useState(false)
  const [showSeconds, setShowSeconds] = useState(true)

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
    const options = { hour: 'numeric', minute: '2-digit', hour12: !is24Hour }
    if (showSeconds) options.second = '2-digit'
    return date.toLocaleTimeString('en-US', options)
  }

  return (
    <div className="container">
      <div className="clock-box">
        <div className="time-display">
          {formatTime(dateTime)}
        </div>
        <button
          className="format-toggle"
          type="button"
          aria-label={`Switch to ${is24Hour ? '12-hour' : '24-hour'} format`}
          aria-pressed={is24Hour}
          onClick={() => setIs24Hour(!is24Hour)}
        >{is24Hour ? '24H' : '12H'}</button>
        <button
          className="seconds-toggle"
          type="button"
          aria-label={`${showSeconds ? 'Hide' : 'Show'} seconds`}
          aria-pressed={showSeconds}
          onClick={() => setShowSeconds(!showSeconds)}
        >{showSeconds ? 'SECONDS: ON' : 'SECONDS: OFF'}</button>
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
