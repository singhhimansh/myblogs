
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Bloglist from './Bloglist';

export default function FilteredBlog({ blogList, setBlogList }) {

    const [blogs, setFilteredBlogs] = useState([]);

    const { type } = useParams();
    // console.log(type);


    useEffect(() => {

        const blogsType = blogList.filter((blog) => blog.type == type);
        // console.log('blog type', blogsType);
        setFilteredBlogs(blogsType);
        // console.log(blogs);

        // setBlog(clickedBlog)
    }, []);

    return (

        <>
            {/* <div className="">{type}</div> */}
            <Bloglist blogList={blogs} title={type} />
        </>

    )

};
