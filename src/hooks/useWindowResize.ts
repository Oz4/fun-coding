import { useEffect, useState } from "react";

export const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const debounce = (func: any, wait: number) => {
        let timeout: NodeJS.Timeout
        return (...args: any) => {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        };
    }

    useEffect(() => {

        // const handleResize = debounce(() => {
        //     setWindowSize({
        //         width: window.innerWidth,
        //         height: window.innerHeight,
        //     });
        // }, 100);

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }


        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}