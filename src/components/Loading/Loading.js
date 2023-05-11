import React, { useState, useEffect } from 'react';
import { Oval } from "react-loader-spinner";

import "./loading.scss";

export default function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("load", () => setLoading(false));
        return () => window.removeEventListener("load", () => setLoading(false));
    }, []);

    return (
        <div className={`loading ${loading ? "" : "loading_hidden"}`}>
            <Oval
                height={80}
                width={80}
                color="#FF6060"
                wrapperStyle={{}}
                wrapperClass="loading_svg"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="FF3030"
                strokeWidth={6}
                strokeWidthSecondary={6}
            />
            <p>Chargement...</p>
        </div>
    )
}