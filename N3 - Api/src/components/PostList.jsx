import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';

const PostList = () => {
    const dispatch = useDispatch();
    const { list, loading } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;

    return (
        <ul className="max-w-2xl mx-auto mt-6 space-y-4">
            {list.map((post) => (
                <li key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                    <p className="text-gray-600 mt-2">{post.body}</p>
                </li>
            ))}
        </ul>
    );
};

export default PostList;
