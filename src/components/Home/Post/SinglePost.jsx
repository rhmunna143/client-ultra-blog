import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

const SinglePost = ({ post }) => {
    const { title, content, image_link, id, created_at } = post;

    return (
        <Link href={`/${id}`} className="border p-4">
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
        </Link>
    );
};

export default SinglePost;