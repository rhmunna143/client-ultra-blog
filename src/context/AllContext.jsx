"use client"
import { baseUrl } from '@/app/lib/constant';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import toast from 'react-hot-toast';

export const AllContext = createContext(null);

const AllContextProvider = ({ children }) => {
    const [signUpUser, setSignUp] = useState(null);
    const [loginUser, setLoginUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    const signUp = (username, password) => {
        axios.post(`${baseUrl}/auth/register`, {
            username,
            password
        }, { withCredentials: true }).then(res => {
            if (res.data.id) {
                setSignUp(res.data);
                toast.success("User created successfully");
            }
        }).catch(err => {
            console.error(err);
            toast.error("Failed to create user");
        });
    };

    const login = (username, password) => {
        axios.post(`${baseUrl}/auth/login`, {
            username,
            password
        }, { withCredentials: true }).then(res => {
            if (res.data.user_id) {
                setLoginUser(res.data);
                toast.success(`${res?.data?.username} logged in successfully`);
            }
        }).catch(err => {
            console.error(err);
            toast.error("Failed to log in user." + err);
        });
    };

    const logout = () => {
        axios.get(`${baseUrl}/auth/logout`, { withCredentials: true }).then(res => {
            if (res.data) {
                setCurrentUser(null);
                toast.success("Logged out successfully");
            }
        }).catch(err => {
            console.error(err);
            toast.error("Failed to log out user");
        });
    };

    useEffect(() => {
        axios.get(`${baseUrl}/auth/check-login`, { withCredentials: true }).then(res => {
            if (res.data) {
                setCurrentUser(res.data);
            }
        }).catch(err => {
            console.error(err);
        });
    }, []);

    const value = {
        // Add your context values here
        signUp,
        login,
        signUpUser,
        loginUser,
        currentUser,
        logout
    };

    return (
        <AllContext.Provider value={value}>
            {children}
        </AllContext.Provider>
    );
};

export default AllContextProvider;