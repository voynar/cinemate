import { useState, useEffect } from "react";

export const useStickyNav = () => {

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const threshold = 100;
        const isPageScrolled = window.scrollY > threshold;
        setIsSticky(isPageScrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return isSticky;
}

