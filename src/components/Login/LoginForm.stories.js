import AllContextProvider from "@/context/AllContext";
import LoginForm from "./LoginForm";

export default {
    title: "Authentication-Form/LoginForm",
    component: LoginForm,
    argTypes: {
        onSubmit: { action: "submitted" },
    },
    tags: ['autodocs'],
}

export const Default = (args) => (
    <AllContextProvider>
        <LoginForm {...args} />
    </AllContextProvider>
);

export const WithError = (args) => (
    <AllContextProvider>
        <LoginForm {...args} />
    </AllContextProvider>
);

WithError.args = {
    error: "Invalid credentials",
};

export const WithLoading = (args) => (
    <AllContextProvider>
        <LoginForm {...args} />
    </AllContextProvider>
);
WithLoading.args = {
    isLoading: true,
};

export const WithCustomButton = (args) => (
    <AllContextProvider>
        <LoginForm {...args} />
    </AllContextProvider>
);