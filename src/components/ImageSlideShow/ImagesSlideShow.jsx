import React, { useEffect, useState } from 'react'
import "./ImagesSlideShow.css";

const slideshowDuration = 5000;

function ImagesSlideShow({images, alt}) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(prev => {
      if (prev + 1 >= images.length) return 0;
      return prev + 1;
    });
  };

  const prevImage = () => {
    setCurrentImage(prev => {
      if (prev - 1 <= -1) return images.length-1;
      return prev - 1;
    });
  };

  const imageSelectorClick = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
      document.querySelector("images-selector-container").scrollTo(document.querySelector("img.highlight").scrollWidth);
    }, slideshowDuration);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className='slideshow-container'>
      <img id="slideshow-image" loading="lazy" src={images[currentImage]} alt={alt} />
      {images.length > 1 && 
        <div className="button-container">
          <button onClick={prevImage}><span className="material-symbols-outlined">chevron_left</span></button> 
          <div className="images-selector-container">
            {images.map((image, i) => (
              <img loading="lazy" src={image} className={(i == currentImage) ? "highlight" : ""} onClick={() => {imageSelectorClick(i)}}/>
            ))}
          </div>
          <button onClick={nextImage}><span className="material-symbols-outlined">chevron_right</span></button>
        </div>
      }
    </div>
  )
}

export default ImagesSlideShow