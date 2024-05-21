import Container from "@/components/Shared/Container";
import Profile from "./Profile";
import PostContainer from "./UsersPost/PostContainer";
import Link from "next/link";

const page = () => {
    return (
        <Container>
            <div className="my-20">
                <h1 className="font-bold text-2xl text-center">Profile</h1>

                <div className="w-fit mx-auto">
                    <Profile />
                </div>

                <div className="w-fit mx-auto">
                    <Link href="/profile/edit" className="btn btn-sm mt-5 btn-secondary">Update Profile</Link>
                </div>

                <p className="font-semibold text-xl mb-4 mt-10">My Posts</p>
                <hr />

                {/* my post component here */}
                <PostContainer />
                
            </div>
        </Container>
    );
};

export default page;