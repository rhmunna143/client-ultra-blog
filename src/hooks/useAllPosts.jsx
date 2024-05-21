"use client"

import { baseUrl } from "@/app/lib/constant";
import axios from "axios";
import { useEffect, useState } from "react";

const useAllPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // fetch all posts
        axios.get(`${baseUrl}/posts`).then(res => {
            if (res.data.length > 0) {
                setPosts(res.data);
            }
        }).catch(err => {
            console.error(err);
        });
    }, []);

    return posts;
};

export default useAllPosts;