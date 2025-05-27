import { useState } from 'react'
import './CharCounter.css'

function CharCounter() {
  const [text, setText] = useState('')

  return (
    <div className="char-counter">
      <textarea
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
      />
      <p>Character Count: <strong>{text.length}</strong></p>
    </div>
  )
}

export default CharCounter