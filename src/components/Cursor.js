// src/components/Cursor.js
import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${event.clientX}px`;
                cursorRef.current.style.top = `${event.clientY}px`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div id="cursor" ref={cursorRef}></div>;
};

export default Cursor;