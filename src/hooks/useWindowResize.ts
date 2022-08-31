import { useEffect, useState } from "react";

export const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
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

        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

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