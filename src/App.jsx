import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [dateTime, setDateTime] = useState(new Date())
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode')
    return savedTheme === null
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : savedTheme === 'true'
  })

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

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
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
        </button>
        <div className="time-display">
          {formatTime(dateTime)}
        </div>
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
