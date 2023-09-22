"use client"
import React, { useState } from 'react';
import "./Carousel.css"

type props = {
    items: [],
}

const Carousel = ({ items }: props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="prev-button">
                Previous
            </button>
            <div className="carousel-content">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    >
                        <div></div>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className="next-button">
                Next
            </button>
        </div>
    );
};

export default Carousel;
