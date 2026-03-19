import React, { useState, useEffect } from 'react';
import MagnificPopup from 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

const Project1 = () => {
  const [isTouch, setIsTouch] = useState(false);
  const images = [
    { id: 1081, caption: "Photo caption" },
    { id: 1014, caption: "Photo caption" },
    { id: 267, caption: "Photo caption" },
    { id: 266, caption: "Photo caption" },
    { id: 634, caption: "Photo caption" },
    { id: 923, caption: "Photo caption" },
    { id: 682, caption: "Photo caption" },
    { id: 173, caption: "Photo caption" },
    { id: 943, caption: "Photo caption" },
  ];

  useEffect(() => {
    // Check if touch device
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    // Initialize Magnific Popup
    if (window.$) {
      $('.gallery-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true,
          titleSrc: (item) => item.el.find('figcaption').text() || item.el.attr('title')
        },
        zoom: {
          enabled: true
        },
        gallery: {
          enabled: true,
          navigateByImgClick: false,
          tCounter: ''
        },
        disableOn: () => $(window).width() > 640
      });
    }
    
    return () => {
      // Cleanup Magnific Popup
      if (window.$) {
        $('.gallery-link').magnificPopup('close');
      }
    };
  }, []);

  const generateRandomSize = () => {
    const sizes = [5, 6, 7, 8];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    return 200 * randomSize;
  };

  return (
    <>
      <div className="gallery columns-1 sm:columns-2 lg:columns-3 gap-0">
        {images.map((image) => {
          const height = generateRandomSize();
          const width = generateRandomSize();
          const imgUrl = `https://unsplash.it/${width}/${height}?image=${image.id}`;
          
          return (
            <a 
              key={image.id}
              href={imgUrl}
              className="gallery-link block mb-0 break-inside-avoid"
            >
              <figure className={`gallery-image m-0 p-0 relative overflow-hidden ${!isTouch ? 'group' : ''}`}>
                <img 
                  src={imgUrl} 
                  alt={image.caption}
                  width={width}
                  height={height}
                  className="block w-full h-auto"
                />
                <figcaption className={`absolute ${
                  isTouch 
                    ? 'left-1/2 bottom-8 transform -translate-x-1/2 text-white text-sm font-semibold px-4 py-3 text-center max-w-[calc(100%-9em)] leading-tight z-10 before:content-[""] before:absolute before:bg-black/20 before:w-full before:h-full before:px-4 before:py-3 before:left-[-1.5em] before:top-[-1.5em] before:z-[-1]' 
                    : 'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent text-sm font-semibold px-4 py-3 text-center max-w-[calc(100%-9em)] leading-tight z-10 transition-all duration-200 ease-in before:content-[""] before:absolute before:bg-black/20 before:w-full before:h-full before:px-4 before:py-3 before:right-full before:bottom-full before:transition-all before:duration-300 before:ease-in-out before:opacity-0 before:z-[-1] after:content-[""] after:absolute after:bg-black/20 after:w-full after:h-full after:px-4 after:py-3 after:left-full after:top-full after:transition-all after:duration-300 after:ease-in-out after:opacity-0 after:z-[-1] group-hover:text-white group-hover:transition-all group-hover:duration-200 group-hover:ease-in group-hover:delay-300 group-hover:before:opacity-100 group-hover:before:right-[-1.5em] group-hover:before:bottom-[-1.5em] group-hover:after:opacity-100 group-hover:after:left-[-1.5em] group-hover:after:top-[-1.5em]'
                }`}>
                  {image.caption}
                </figcaption>
                {!isTouch && (
                  <>
                    <div className="absolute inset-0 border-16 border-black/10 transition-all duration-200 group-hover:border-32 group-hover:border-black/10"></div>
                    <div className="absolute inset-0 border-0 border-black/10 transition-all duration-200 group-hover:border-32"></div>
                  </>
                )}
              </figure>
            </a>
          );
        })}
      </div>

    

      <style jsx>{`
        html {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        
        .mfp-with-zoom .mfp-container,
        .mfp-with-zoom.mfp-bg {
          opacity: 0;
          backface-visibility: hidden;
          transition: all 0.3s ease-out;
        }
        
        .mfp-with-zoom.mfp-bg {
          background-color: rgba(0, 0, 0, 0.9);
        }
        
        .mfp-with-zoom.mfp-ready .mfp-container {
          opacity: 1;
        }
        
        .mfp-with-zoom.mfp-ready.mfp-bg {
          opacity: 1;
        }
        
        .mfp-with-zoom.mfp-removing .mfp-container,
        .mfp-with-zoom.mfp-removing.mfp-bg {
          opacity: 0;
        }
        
        .mfp-with-zoom img.mfp-img {
          padding: 0;
        }
        
        .mfp-with-zoom .mfp-figure:after {
          top: 0;
          bottom: 0;
        }
        
        .mfp-with-zoom .mfp-container {
          padding: 0;
        }
        
        .mfp-with-zoom .mfp-content {
          overflow: hidden;
        }
        
        .mfp-with-zoom .mfp-bottom-bar {
          top: auto;
          bottom: 0;
          margin-top: 0;
        }
        
        .mfp-with-zoom .mfp-title {
          position: absolute;
          top: auto;
          bottom: 2em;
          left: 50%;
          transform: translateX(-50%);
          font-size: 14px;
          color: rgba(255, 255, 255, 0);
          padding: 1em;
          transition: all .2s ease;
          font-weight: 600;
          max-width: calc(100% - 9em);
          line-height: 1.25;
          text-align: center;
          box-sizing: border-box;
        }
        
        .mfp-with-zoom .mfp-title:before,
        .mfp-with-zoom .mfp-title:after {
          content: '';
          position: absolute;
          background: rgba(0, 0, 0, 0.2);
          width: 100%;
          height: 100%;
          padding: 1em;
          transition: all .3s ease-in-out;
          opacity: 0;
          z-index: -1;
        }
        
        .mfp-with-zoom .mfp-title:before {
          right: 100%;
          bottom: 100%;
        }
        
        .mfp-with-zoom .mfp-title:after {
          left: 100%;
          top: 100%;
        }
        
        .mfp-with-zoom.mfp-ready .mfp-title {
          color: rgba(255, 255, 255, 1);
          text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
          transition: all .2s ease .3s;
        }
        
        .mfp-with-zoom.mfp-ready .mfp-title:before,
        .mfp-with-zoom.mfp-ready .mfp-title:after {
          opacity: 1;
        }
        
        .mfp-with-zoom.mfp-ready .mfp-title:before {
          right: -1.5em;
          bottom: -1.5em;
        }
        
        .mfp-with-zoom.mfp-ready .mfp-title:after {
          left: -1.5em;
          top: -1.5em;
        }
        
        .mfp-arrow {
          opacity: 1;
          margin-top: 0 !important;
          width: 20%;
          height: 30%;
          transform: translateY(-50%);
        }
        
        .mfp-arrow:before,
        .mfp-arrow:after {
          margin: 0;
          border: none;
          width: 2rem;
          height: 2rem;
          transform: rotate(-45deg) translate(-50%, -100%);
          opacity: 1;
          top: 50%;
          left: 50%;
          transition: all .15s;
        }
        
        .mfp-arrow:active {
          transform: translateY(-50%) scale(0.95);
        }
        
        .mfp-arrow-left:before,
        .mfp-arrow-left:after {
          border-top: 2px solid white;
          border-left: 2px solid white;
        }
        
        .mfp-arrow-left:after {
          margin-left: 2rem;
        }
        
        .mfp-arrow-left:hover:before,
        .mfp-arrow-left:active:before {
          margin-left: 2rem;
        }
        
        .mfp-arrow-left:hover:after,
        .mfp-arrow-left:active:after {
          margin-left: 0;
        }
        
        .mfp-arrow-right:before,
        .mfp-arrow-right:after {
          border-right: 2px solid white;
          border-bottom: 2px solid white;
        }
        
        .mfp-arrow-right:after {
          margin-left: 2rem;
        }
        
        .mfp-arrow-right:hover:before {
          margin-left: 2rem;
        }
        
        .mfp-arrow-right:hover:after {
          margin-left: 0;
        }
        
        button.mfp-close {
          opacity: 1;
          margin-top: 0 !important;
          width: 20%;
          height: 30%;
          font: 0/0 serif;
          text-shadow: none;
          color: transparent;
        }
        
        button.mfp-close:before,
        button.mfp-close:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          margin: 0;
          border: none;
          width: 2rem;
          height: 2rem;
          opacity: 1;
          transition: all .15s;
          transform-origin: 0 0;
          border-top: 2px solid white;
          border-left: 2px solid white;
        }
        
        button.mfp-close:before {
          transform: rotate(-45deg);
        }
        
        button.mfp-close:after {
          transform: rotate(135deg);
        }
        
        button.mfp-close:hover:before {
          transform: rotate(135deg);
        }
        
        button.mfp-close:hover:after {
          transform: rotate(315deg);
        }
        
        button.mfp-close:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
};

export default Project1;