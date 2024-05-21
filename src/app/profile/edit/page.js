import React from 'react';
import UpdateProfile from './UpdateProfile';
import Container from '@/components/Shared/Container';

const page = () => {
    return (
        <Container>
            <div className='mt-20'>
                <h1 className='font-bold text-2xl text-center'>Update Profile</h1>

                <UpdateProfile />

            </div>
        </Container>
    );
};

export default page;