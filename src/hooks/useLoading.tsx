import { useState, useEffect } from "react";
import { UseLoading } from "../types";

export default function useLoading(minutes: number): UseLoading {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect((): void => {
        setTimeout((): void => {
            setIsLoading(false);
        }, minutes * 1000)
    }, []);

    return { isLoading, setIsLoading };
}