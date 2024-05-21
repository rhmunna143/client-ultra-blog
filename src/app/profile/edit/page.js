import React from 'react';
import UpdateProfile from './UpdateProfile';
import Container from '@/components/Shared/Container';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';

const page = () => {
    return (
        <PrivateRoute>
            <Container>
                <div className='mt-20'>
                    <h1 className='font-bold text-2xl text-center'>Update Profile</h1>

                    <UpdateProfile />

                </div>
            </Container>
        </PrivateRoute>
    );
};

export default page;