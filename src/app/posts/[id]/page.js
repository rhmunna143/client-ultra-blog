import Container from '@/components/Shared/Container';
import UpdatePostForm from '@/components/UpdatePost/UpdatePost';
import React from 'react';

const page = () => {
    
    return (
        <Container>
            <h2 className="text-2xl font-semibold text-gray-800 my-20">Update Post</h2>
            <div>
                <UpdatePostForm />
            </div>
        </Container>
    );
};

export default page;