import { useState, useEffect } from 'react'
 import './ThemeToggle.css'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // Apply the theme class to the document body
  useEffect(() => {
    document.body.className = isDark ? 'dark' : 'light'
  }, [isDark])

  return (
    <div className="theme-toggle">
      <p>Current Theme: <strong>{isDark ? 'Dark' : 'Light'}</strong></p>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle Theme
      </button>
    </div>
  )
}

export default ThemeToggle