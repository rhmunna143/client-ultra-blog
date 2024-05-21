"use client"
import { baseUrl } from '@/app/lib/constant';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const AllContext = createContext(null);

const AllContextProvider = ({ children }) => {
    const [signUpUser, setSignUp] = useState(null);
    const [loginUser, setLoginUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refetchCurrentUser, setRefetchCurrentUser] = useState(false);

    const router = useRouter();

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
            toast.error("Failed to log in user.");
        });
    };

    const logout = () => {
        // Cookies.remove('token');

        axios.post(`${baseUrl}/auth/logout`, { withCredentials: true }).then(res => {
            if (res.data) {
                setCurrentUser(null);
                toast.success("Logged out successfully");

                // Cookies.remove('token', { path: '/' });
            }
        }).catch(err => {
            console.error(err);
            toast.error("Failed to log out user");
        });
    };

    useEffect(() => {
        setLoading(true);

        axios.get(`${baseUrl}/auth/check-login`, { withCredentials: true }).then(res => {
            if (res.data) {
                setCurrentUser(res.data);
                setLoading(false);
            }
        }).catch(err => {
            console.error(err);
        });
    }, [loginUser, signUpUser, refetchCurrentUser]);

    useEffect(() => {
        if (signUpUser) {
            return router.push('/login');
        }

        if (loginUser) {
            return router.push('/');
        }
    }, [signUpUser, router, loginUser])

    const value = {
        // Add your context values here
        signUp,
        login,
        signUpUser,
        loginUser,
        currentUser,
        logout,
        loading,
        router,
        setRefetchCurrentUser
    };

    return (
        <AllContext.Provider value={value}>
            {children}
        </AllContext.Provider>
    );
};

export default AllContextProvider;