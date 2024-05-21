import NewPostForm from "@/components/NewPost/NewPostForm";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import Container from "@/components/Shared/Container";


const page = () => {

    return (
        <PrivateRoute>
            <Container>
                <h2 className="text-2xl font-semibold text-gray-800 my-8">Create a new post</h2>
                <div>
                    <NewPostForm />
                </div>
            </Container>
        </PrivateRoute>
    );
};

export default page;