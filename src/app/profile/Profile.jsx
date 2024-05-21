"use client";

import { AllContext } from "@/context/AllContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Profile = () => {
    const { currentUser } = useContext(AllContext);
    const { image_link, username, full_name, email, id } = currentUser || {};

    return (
        <div className="mt-10 w-fit mx-auto">
            <div className="img w-40 h-40 aspect-square rounded-full border">
                {
                    image_link ? <Image
                        src={image_link || "/images/default.png"}
                        alt="uploaded"
                        className="mt-2 w-40 h-40 aspect-square rounded-full"
                        width={160}
                        height={160} // Adjust the height as per your requirements
                        layout="responsive"
                    /> : <p className="flex justify-center items-center">DP Not updated!</p>
                }
            </div>

            <p className="mt-5">Username: <span className="font-medium">{username}</span></p>
            <p>Full Name: <span className="font-medium">{full_name ? full_name : "Name not updated"}</span></p>
            <p>Email: <span className="font-medium">{email ? email : "Email not updated"}</span></p>
            <p>ID: <span className="font-medium">{id}</span></p>

            <Link href="/profile/edit" className="btn btn-sm mt-5 btn-secondary">Update Profile</Link>
        </div>
    );
};

export default Profile;