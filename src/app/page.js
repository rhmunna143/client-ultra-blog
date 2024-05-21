"use client"
import SinglePost from "@/components/Home/Post/SinglePost";
import Container from "@/components/Shared/Container";
import useAllPosts from "@/hooks/useAllPosts";
import Image from "next/image";

export default function Home() {
  const posts = useAllPosts();

  return (
    <Container>
      <p className="mt-8 font-medium">All Blog Posts: {posts.length}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-20">
        {
          posts.map(item => <SinglePost post={item} key={item?.id} />)
        }
      </div>
    </Container>
  );
}
