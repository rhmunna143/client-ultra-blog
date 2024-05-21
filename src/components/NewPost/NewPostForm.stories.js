import NewPostForm from "./NewPostForm";

export default {
    title: "NewPostForm",
    component: NewPostForm,
    argTypes: {
        onSubmit: { action: "submitted" }
    },
    tags: ["autodocs"]
}

export const Default = () => <NewPostForm />;
export const Dark = () => <NewPostForm />;
export const Black = () => <NewPostForm />;