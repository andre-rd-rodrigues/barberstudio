import React, { useState } from 'react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState();

  const images = [
    'https://images.unsplash.com/photo-1587909209111-5097ee578ec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1533245270348-821d4d5c7514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1553521041-d168abd31de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    'https://images.unsplash.com/photo-1536520002442-39764a41e987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
    'https://images.unsplash.com/photo-1536520002442-39764a41e987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
  ];

  return (
    <div className="relative section" id="galeria">
      <div className="w-full">
        <h2
          data-animation="fade-in"
          className="animation mb-20 text-4xl md:text-5xl leading-tighter tracking-wider my-9 md:mt-0 font-heading text-red-800 dark:text-orange-200"
        >
          Galeria
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridGap: '30px',
            alignItems: 'center',
          }}
        >
          {images.map((src, i) => (
            <button
              data-delay={300 + i * 100}
              key={i}
              onClick={() => setSelectedImage(src)}
              className="animation border-0"
            >
              <img className="h-80 w-full shadow-2xl object-cover rounded-md" src={src} alt="" />
            </button>
          ))}
        </div>
        {selectedImage && (
          <div className="bg-neutral-900/90 backdrop-blur-sm h-screen w-full fixed top-0 left-0  flex items-center justify-center z-10">
            <div className="relative w-full max-w-md max-h-full">
              <button className="absolute top-0 right-0 z-10 p-3" onClick={() => setSelectedImage()}>
                <img src="/images/icons/remove.png" width={30} />
              </button>
              <img className="w-full shadow-2xl rounded-md" src={selectedImage} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
