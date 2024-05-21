import Image from "next/image";

const UsersPost = ({ post }) => {
    const { title, content, image_link, created_at, id } = post;

    return (
        <div className='flex flex-col justify-center'>
            <Image
                src={image_link || '/default-image.jpg'}
                alt={title}
                width={300}
                height={200}
            />


            <p className="text-2xl font-semibold capitalize my-4">{title}</p>

            <p className='text-sm'>Posted at: <span className='text-gray-400'>{dayjs(created_at).format("DD MMM, YY, h:mm A")}</span></p>
            <p>{content.slice(0, 40)} ...see more</p>
        </div>
    );
};

export default UsersPost;