import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postSlice';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !body) return;

        const newPost = { id: Date.now(), title, body };
        dispatch(addPost(newPost));

        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
            ></textarea>
            <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 focus:outline-none disabled:bg-gray-300"
                disabled={!title || !body}
            >
                Add Post
            </button>
        </form>
    );
};

export default PostForm;
