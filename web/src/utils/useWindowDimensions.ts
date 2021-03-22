import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
    const { innerWidth, innerHeight } = window;

    return {
        width: innerWidth,
        height: innerHeight
    };
};

const useWindowDimensions = () => {
    const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

    useEffect(() => {
        window.addEventListener('resize', () => { setWindowDimensions(getWindowDimensions()) });

        return () => window.removeEventListener('resize', () => { setWindowDimensions(getWindowDimensions()) });
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;