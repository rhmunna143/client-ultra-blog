"use client"
import { baseUrl } from '@/app/lib/constant';
import axios from 'axios';
import React, { createContext } from 'react';
import toast from 'react-hot-toast';

export const AllContext = createContext(null);

const AllContextProvider = ({ children }) => {
    const signUp = (username, password) => {
        axios.post(`${baseUrl}/auth/register`, {
            username,
            password
        }, { withCredentials: true }).then(res => {
            console.log(res);
            if (res.data.id) {
                toast.success("User created successfully");
            }
        }).catch(err => {
            console.error(err);
            toast.error("Failed to create user");
        });
    };


    const value = {
        // Add your context values here

        signUp,
    };

    return (
        <AllContext.Provider value={value}>
            {children}
        </AllContext.Provider>
    );
};

export default AllContextProvider;