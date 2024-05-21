import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import Container from '@/components/Shared/Container';
import UpdatePostForm from '@/components/UpdatePost/UpdatePost';
import React from 'react';

const page = () => {

    return (
        <PrivateRoute>
            <Container>
                <h2 className="text-2xl font-semibold text-gray-800 my-20">Update Post</h2>
                <div>
                    <UpdatePostForm />
                </div>
            </Container>
        </PrivateRoute>
    );
};

export default page;