"use client";

import { baseUrl, imgBBApiKey } from "@/app/lib/constant";
import useImgBBUpload from "@/hooks/useImgBbUpload";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NewPostForm = () => {
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

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const payload = {
            title: data.title,
            content: data.content,
            image_link: imageUrl,
        };

        axios.post(`${baseUrl}/posts`, payload, { withCredentials: true }).then((res) => {
            if (res.data?.id) {
                // show success message
                toast.success("Post created successfully");

                // clear the form
                setValue("title", "");
                setValue("content", "");
                setSelectedFile(null);
            }
        }).catch((err) => {
            toast.error("Failed to create post");
            console.error(err);
        });
    };

    return (
        <div className="my-20">
            <div className="border max-w-60 mx-auto">
                {!imageUrl && <p className="text-center pt-10">No image uploaded</p>}
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt="uploaded"
                        className="mt-2"
                        width={240}
                        height={112} // Adjust the height as per your requirements
                        layout="responsive"
                    />
                )}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        {...register("image", { required: "Image is required" })}
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
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        {...register("title", { required: "Title is required" })}
                        type="text"
                        placeholder="title"
                        className="input input-bordered"
                    />
                    {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Content</span>
                    </label>
                    <textarea
                        {...register("content", { required: "Content is required" })}
                        placeholder="content"
                        className="textarea textarea-bordered"
                    />
                    {errors.content && <span className="text-red-500">{errors.content.message}</span>}
                </div>

                <div className="form-control mt-6 w-1/2 mx-auto">
                    <button type="submit" className="btn btn-primary">
                        Post Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewPostForm;