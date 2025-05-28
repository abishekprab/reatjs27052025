import { useState } from 'react'
import './ImageGallery.css'

// Importing images from the assets folder
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'

const images = [image1, image2, image3, image4, image5]

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
