import NewPostForm from "@/components/NewPost/NewPostForm";
import Container from "@/components/Shared/Container";


const page = () => {

    return (
        <Container>
            <h2 className="text-2xl font-semibold text-gray-800 my-8">Create a new post</h2>
            <div>
                <NewPostForm />
            </div>
        </Container>
    );
};

export default page;