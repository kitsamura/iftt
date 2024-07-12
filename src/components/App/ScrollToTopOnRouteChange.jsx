import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnRouteChange() {
    let location = useLocation();

    useEffect(() => {
        const listen = () => {
            window.scrollTo(0, 0);
        };
        return () => {
            listen();
        };
    }, [location]);

    return null;
}

export default ScrollToTopOnRouteChange;