"use client";

import Container from '@/components/Shared/Container';
import usePostById from '@/hooks/usePostById';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const Post = () => {
    const { id } = useParams();
    const { title, content, image_link, created_at } = usePostById(id)

    return (
        <Container>
            <div className='flex flex-col justify-center my-20 w-fit mx-auto'>
                <Image
                    src={image_link || '/default-image.jpg'}
                    alt={title}
                    width={550}
                    height={200}
                />

                <p className="text-2xl font-semibold capitalize my-4">{title}</p>

                <p className='text-sm'>Posted at: <span className='text-gray-400'>{dayjs(created_at).format("DD MMM, YY, h:mm A")}</span></p>

                <p className='mt-5'>{content}</p>
            </div>
        </Container>
    );
};

export default Post;