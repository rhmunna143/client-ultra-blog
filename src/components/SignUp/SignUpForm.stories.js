import React from "react"; // Add this line

import SignUpForm from "./SignUpForm";
import AllContextProvider from "@/context/AllContext";

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

export const Default = (args) => (
    <AllContextProvider>
        <SignUpForm {...args} />
    </AllContextProvider>
);

export const WithCustomSubmit = () => (
    <AllContextProvider>
        <SignUpForm onSubmit={customSubmitHandler} />
    </AllContextProvider>
);

export const WithCustomProps = () => (
    <AllContextProvider>
        <SignUpForm username="JohnDoe" />
    </AllContextProvider>
);