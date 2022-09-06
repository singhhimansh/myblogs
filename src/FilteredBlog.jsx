
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Bloglist from './Bloglist';

export default function FilteredBlog({ blogList, setBlogList }) {

    const [blogs, setFilteredBlogs] = useState([]);
    
    //React router hook to fetch value from URL
    const { type } = useParams();

    // sideeffect on changing 'type' useState hook each time
    useEffect(() => {

        const blogsType = blogList.filter((blog) => blog.type == type);
        setFilteredBlogs(blogsType);
    }, [type]);

    return (

        <>
            <Bloglist blogList={blogs} title={type} />
        </>

    )

};
