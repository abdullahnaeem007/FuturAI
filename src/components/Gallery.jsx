import React, { useEffect, useRef } from 'react';
import pic1 from '../assets/gallery/main.png';
import pic2 from '../assets/gallery/rect2.png';
import pic3 from '../assets/gallery/rect3.png';
import pic4 from '../assets/gallery/react4.png';
import pic5 from '../assets/gallery/react5.png';

function Gallery() {
    const arrayOfPics = [
        pic1, pic2, pic3, pic4, pic5
    ];

    const middleIndex = Math.floor(arrayOfPics.length / 2);

    const galleryRef = useRef();

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (galleryRef.current) {
                galleryRef.current.scrollLeft += 2;
            }
        }, 30);

        return () => {
            clearInterval(scrollInterval);
        };
    }, []);

    return (
        <div ref={galleryRef} className='flex scroll-smooth flex-row overflow-x-auto items-center space-x-3 w-full h-full mb-24'>
            {arrayOfPics.map((pic, index) => {
                let className = index === middleIndex ? 'w-full object-fill' : 'w-96 object-fill';
                return (
                    <div className='flex flex-row flex-shrink-0 border border-white/20 p-1 rounded-xl justify-center' key={index}>
                        <img src={pic} className={className} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery;
