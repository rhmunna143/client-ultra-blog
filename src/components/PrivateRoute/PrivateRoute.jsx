"use client"

import { AllContext } from "@/context/AllContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const { currentUser, loading, router } = useContext(AllContext);

    if (loading) {
        return <div className="flex justify-center items-center">Loading...</div>
    }

    if (!currentUser) {
        return router.push("/login");
    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;