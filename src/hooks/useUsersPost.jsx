"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/app/lib/constant";

const useUsersPost = () => {
    const [usersPost, setUsersPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refetch, setRefetch] = useState(false);

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
    }, [refetch]); // Empty dependency array means this runs once on mount

    return { usersPost, loading, error, setRefetch };
};

export default useUsersPost;
