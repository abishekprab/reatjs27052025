import { useState } from 'react'
import './ImageGallery.css'

// Image URLs 
const images = [
  'https://via.placeholder.com/150/0000FF/FFFFFF?text=1',
  'https://via.placeholder.com/150/FF0000/FFFFFF?text=2',
  'https://via.placeholder.com/150/00FF00/FFFFFF?text=3',
  'https://via.placeholder.com/150/FFA500/FFFFFF?text=4',
  'https://via.placeholder.com/150/800080/FFFFFF?text=5',
]

function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  return (
    <div className="gallery">
      {images.map((imgUrl, index) => (
        <img
          key={index}
          src={imgUrl}
          alt={`Gallery ${index + 1}`}
          className={selectedIndex === index ? 'active' : ''}
          onClick={() => setSelectedIndex(index)}
        />
      ))}
    </div>
  )
}

export default ImageGallery
