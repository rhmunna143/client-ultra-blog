"use client";

import { baseUrl } from "@/app/lib/constant";
import axios from "axios";
import { useEffect, useState } from "react";

const usePostById = (id) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        // fetch post by id
        axios.get(`${baseUrl}/posts/${id}`).then(res => {
            console.log(res.data);
            if (res.data?.id) {
                setPost(res.data);
            }
        }).catch(err => {
            console.error(err);
        });
    }, [id]);

    return post;
};

export default usePostById;