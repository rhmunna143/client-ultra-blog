import React from "react"; // Add this line

import SignUpForm from "./SignUpForm";

export default {
    title: "SignUpForm",
    component: SignUpForm,
    argTypes: {
        onSubmit: { action: "submitted" },
    },
    tags: ['autodocs'],
}

function customSubmitHandler() {
    console.log("submitted");
}

export const Default = (args) => <SignUpForm {...args} />;
export const WithCustomSubmit = () => <SignUpForm onSubmit={customSubmitHandler} />;
export const WithCustomProps = () => <SignUpForm username="JohnDoe" />;