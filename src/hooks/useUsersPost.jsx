"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/app/lib/constant";

const useUsersPost = () => {
    const [usersPost, setUsersPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsersPost = async () => {
            try {
                const res = await axios.get(`${baseUrl}/posts/users-post`, { withCredentials: true });
                setUsersPost(res.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsersPost();
    }, []); // Empty dependency array means this runs once on mount

    return { usersPost, loading, error };
};

export default useUsersPost;
