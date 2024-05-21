"use client";

import useUsersPost from "@/hooks/useUsersPost";
import UsersPost from "./UsersPost";

const PostContainer = () => {
    const { usersPost, loading, error, setRefetch } = useUsersPost();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (usersPost.length === 0) return <p className="mt-8">No post found! Crete your first post now.</p>;

    return (
        <div className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
                {usersPost.map((post) => (
                    <UsersPost key={post.id} post={post} refetch={setRefetch} />
                ))}
            </div>
        </div>
    );
};

export default PostContainer;
