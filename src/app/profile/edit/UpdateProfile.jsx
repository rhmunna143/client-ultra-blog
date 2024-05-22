"use client";

import { baseUrl, imgBBApiKey } from "@/app/lib/constant";
import { AllContext } from "@/context/AllContext";
import useImgBBUpload from "@/hooks/useImgBbUpload";
import axios from "axios";
import Image from "next/image";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const { currentUser, setRefetchCurrentUser, loading: contextLoading } = useContext(AllContext);
    const { image_link, username, full_name, email, id } = currentUser || {};

    const { uploadImage, loading, error, imageUrl } = useImgBBUpload(imgBBApiKey);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        if (selectedFile) {
            uploadImage(selectedFile);
        }
    };

    const onSubmit = (data) => {
        const payload = {
            full_name: data.full_name ? data.full_name : full_name,
            email: data.email ? data.email : email,
            username: data.username ? data.username : username,
            image_link: imageUrl ? imageUrl : image_link,
        };

        axios.put(`${baseUrl}/auth/update-user/${id}`, payload, { withCredentials: true }).then((res) => {
            if (res.data?.id) {
                // show success message
                toast.success("Profile updated successfully");
            }
        }).catch((err) => {
            toast.error("Failed to update profile");
            console.error(err);
        });
    }

    if (contextLoading) {
        return <p className="flex justify-center items-center">Loading...</p>;
    }

    return (
        <>
            <div className="parent grid grid-cols-1 md:grid-cols-2 mb-20">
                <div className="mt-20">
                    <div className="img w-40 h-40 aspect-square rounded-full border">
                        {
                            !image_link && !imageUrl && <p className="text-center pt-10">No image uploaded</p>
                        }

                        {
                            imageUrl && <Image
                                src={imageUrl || "/images/default.png"}
                                alt="uploaded"
                                className="mt-2 w-40 h-40 aspect-square rounded-full"
                                width={160}
                                height={160} // Adjust the height as per your requirements
                                layout="responsive"
                            />
                        }

                        {
                            !imageUrl && image_link && <Image
                                src={image_link || "/images/default.png"}
                                alt="uploaded"
                                className="mt-2 w-40 h-40 aspect-square rounded-full"
                                width={160}
                                height={160} // Adjust the height as per your requirements
                                layout="responsive"
                            />
                        }
                    </div>

                    <p className="mt-5">Username: <span className="font-medium">{username}</span></p>
                    <p>Full Name: <span className="font-medium">{full_name ? full_name : "Name not updated"}</span></p>
                    <p>Email: <span className="font-medium">{email ? email : "Email not updated"}</span></p>
                    <p>User ID: <span className="font-medium">{id}</span></p>
                </div>

                <div className="update md:mt-20">

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                {...register("image")}
                                type="file"
                                onChange={(e) => {
                                    handleFileChange(e); // Call your custom handler
                                    register("image").onChange(e); // Call React Hook Form's onChange method
                                }}
                                className="input input-bordered pt-2"
                            />

                            {errors.image && <span className="text-red-500">{errors.image.message}</span>}
                            <div className="upload">
                                <button
                                    onClick={handleUpload}
                                    disabled={loading || !selectedFile}
                                    type="button"
                                    className="btn btn-outline btn-sm mt-2 float-right"
                                >
                                    Upload
                                </button>
                                {loading && <span className="text-blue-500">Uploading...</span>}
                                {error && <span className="text-red-500">{error}</span>}
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                {...register("full_name")}
                                type="text"
                                defaultValue={full_name && full_name}
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email")}
                                type="email"
                                defaultValue={email && email}
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                {...register("username")}
                                type="text"
                                defaultValue={username && username}
                                className="input input-bordered"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary mt-5">Update</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateProfile;