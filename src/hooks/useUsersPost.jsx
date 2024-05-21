import { baseUrl } from "@/app/lib/constant";
import axios from "axios";
import { useEffect } from "react";

const useUsersPost = () => {
    const [usersPost, setUsersPost] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/posts/users-posts`, { withCredentials: true }).then((res) => {
            if (res.data.length > 0) {
                setUsersPost(res.data);
            }
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    return usersPost;
};

export default useUsersPost;