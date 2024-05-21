import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const UsersPost = ({ post }) => {
    const { title, content, image_link, created_at, id } = post;

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

                <button className="btn btn-sm btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default UsersPost;