import { useState, useCallback } from 'react';

interface UseSearch {
    query: string;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useSearch = (): UseSearch => {
    const [query, setQuery] = useState('');

    const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }, []);

    return { query, handleSearch };
};
