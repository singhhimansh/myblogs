import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge, Divider } from "@mantine/core";



export default function BlogDetails({ blogList }) {
    const { id } = useParams();

    const [blog, setBlog] = useState({});

    useEffect(() => {

        const clickedBlog = blogList.filter((blog) => blog.id == id);
        setBlog(clickedBlog[0])
    }, []);


    return (
        <div className="flex justify-center">
            <div className="blog w-1/2 my-12 flex flex-col gap-2 bg-white p-5 rounded-md shadow-md shadow-gray-200/80 transition-all  " key={blog.id}>
                <span className=""><Link className="type font-mono text-xs" to={`/filteredblogs/${blog.type}`} ><span className="inline-block"><Badge variant="outline">
                    {blog.type}
                </Badge></span></Link></span>
                <h1 className="title my-2 text-3xl text-slate-700 font-bold first-letter:capitalize">{blog.title}</h1>
                <div className="w-1/2 flex text-xs text-slate-600 gap-2">
                    <span> By</span>
                    <p className="author capitalize ">{blog.author}</p>
                    on <IconCalendarTime className="inline h-4 self-center" />
                    <p className="date ">{blog.date}</p>
                </div>
                <Divider my="sm" variant="dashed" />
                <p className="blogContent mt-8 text-slate-600" dangerouslySetInnerHTML={{ __html: `${blog.blogContent}` }} />
            </div>

        </div>
    )

};
