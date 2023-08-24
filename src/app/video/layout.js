

'use client';

import { useState, useEffect } from "react";


export default function VideoLayout({ children }) {

    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        console.log('hello')
    }, [])


    return (
        isLoading ? <div>loading</div>
        : children
    )

}