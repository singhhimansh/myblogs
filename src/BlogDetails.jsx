import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@mantine/core";



export default function BlogDetails({ blogList }) {
    const { id } = useParams();

    const [blog, setBlog] = useState({});

    useEffect(() => {

        const clickedBlog = blogList.filter((blog) => blog.id == id);
        setBlog(clickedBlog[0])
    },[]);


    return (
        <div className="flex justify-center">
            <div className="blog w-1/2 my-10 flex flex-col gap-2 bg-white p-5 rounded-md shadow-md shadow-gray-200/80 transition-all  " key={blog.id}>
                <Link className="type  font-mono text-xs " to={`/filteredblogs/${blog.type}`} ><span className="inline-block"><Badge variant="outline">
                    {blog.type}
                </Badge></span></Link>
                <h1 className="title text-3xl text-slate-700 font-bold first-letter:capitalize">{blog.title}</h1>
                <h4 className="w-1/2 flex text-sm text-slate-600 capitalize gap-5 justify-between">
                    <p className="author capitalize">{blog.author}</p>
                    <p className="date">{blog.date}</p>
                </h4>
                <p className="blogContent mt-10 text-slate-600" dangerouslySetInnerHTML={{ __html: `${blog.blogContent}` }} />
            </div>

        </div>
    )

};
