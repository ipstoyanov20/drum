import { useState, useEffect } from "react";

interface IntersectionObserverOptions extends IntersectionObserverInit {}

interface UseIntersectionObserverProps {
    ref: React.RefObject<Element>;
    options?: IntersectionObserverOptions;
}

const useIntersectionObserver = (
    ref: UseIntersectionObserverProps['ref'],
    options?: UseIntersectionObserverProps['options']
): boolean => {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            options
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return isIntersecting;
};

export default useIntersectionObserver;
