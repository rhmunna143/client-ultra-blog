import { baseUrl } from "@/app/lib/constant";
import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import swal from "sweetalert";

const UsersPost = ({ post, refetch }) => {
    const { title, content, image_link, created_at, id } = post;

    const handleDelete = async () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // delete the post
                    axios.delete(`${baseUrl}/posts/${id}`, { withCredentials: true }).then((res) => {
                        if (res.data?.message === 'Post deleted successfully') {
                            refetch();
                            swal("Post deleted successfully", {
                                icon: "success",
                            });
                        }
                    }).catch((err) => {
                        toast.error(err.message)
                        console.log(err);
                    });

                } else {
                    swal("Your post is safe!");
                }
            });
    };

    return (
        <div className='flex flex-col justify-center border p-4'>
            <Image
                src={image_link || '/default-image.jpg'}
                alt={title}
                width={300}
                height={200}
            />


            <p className="text-2xl font-semibold capitalize my-4">{title}</p>

            <p className='text-sm'>Posted at: <span className='text-gray-400'>{dayjs(created_at).format("DD MMM, YY, h:mm A")}</span></p>
            <p>{content.slice(0, 40)} <Link href={`/${id}`} className="btn btn-xs btn-ghost">...see more</Link></p>

            <div className="post-action mt-4 gap-4 flex justify-center">
                <Link href={`/posts/${id}`}>
                    <button className="btn btn-sm btn-primary">Edit</button>
                </Link>

                <button onClick={handleDelete} className="btn btn-sm btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default UsersPost;