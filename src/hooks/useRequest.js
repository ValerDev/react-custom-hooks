import { useEffect, useState } from "react";

export const useRequest = (request) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            
            request()
            .then(response => setData(response))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
        }, 1000);
    }, [])

    return [data, isLoading, error]
}