import Profile from "./Profile";

export default {
    title: "Profile",
    component: Profile,
    tags: ["autodocs"]
}

export const Base = () => <Profile />;

export const WithData = () => {
    const data = {
        name: "John Doe",
        age: 30,
        email: "johndoe@example.com"
    };

    return <Profile data={data} />;
};