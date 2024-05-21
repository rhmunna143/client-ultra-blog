import React from 'react';
import UpdatePost from './UpdatePost';

export default {
    title: 'Posts/UpdatePost',
    component: UpdatePost,
    tags: ["autodocs"],
};

// Define the different variants
export const Default = () => <UpdatePost />;
export const WithTitle = () => <UpdatePost title="Sample Title" />;
export const WithContent = () => <UpdatePost content="Sample Content" />;
export const WithAuthor = () => <UpdatePost author="John Doe" />;
export const WithTags = () => <UpdatePost tags={['react', 'javascript']} />;