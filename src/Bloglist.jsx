import { Link } from "react-router-dom";
import { Badge, CloseButton, Divider } from '@mantine/core';

export default function Bloglist({ blogList, title }) {


    return (

        <div className="my-20 flex justify-center">
            <div className=" flex flex-col gap-10 w-2/3 ">
                <div className="my-5">
                    <h1 className="text-3xl font-bold capitalize ">{title}</h1>
                    <Divider my="sm" />
                </div>

                {
                    blogList.length !== 0 ? (
                        blogList.map((blog) =>

                        (
                            <Link to={`/blogs/${blog.id}`} className="blog flex flex-col gap-2 bg-white hover:bg-sky-100/60 p-5 rounded-md shadow-md shadow-gray-200/80 hover:shadow-gray-300 hover:scale-[1.02] transition-all  " key={blog.id}>
                                <Link className="type  font-mono text-xs " to={`/filteredblogs/${blog.type}`} ><Badge variant="outline">
                                    {blog.type}
                                </Badge></Link>
                                <h1 className="title text-2xl text-slate-700 font-bold first-letter:capitalize">{blog.title}</h1>
                                <h4 className="w-1/2 flex text-sm text-slate-600 capitalize gap-5 justify-between">
                                    <p className="author capitalize">{blog.author}</p>
                                    <p className="date">{blog.date}</p>
                                </h4>
                                <p className="blogContent mt-2 text-slate-600" dangerouslySetInnerHTML={{ __html: `${blog.blogContent.slice(0, 100)}` }} />
                            </Link>

                        )
                        )
                    ) : <div className="text-2xl">Oops! No blog found. Add a new blog.</div>

                }
            </div>
        </div>
    )
}