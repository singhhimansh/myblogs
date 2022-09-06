import { Link } from "react-router-dom";
import { Badge, CloseButton, Divider } from '@mantine/core';
import { IconCalendarTime } from '@tabler/icons';


export default function Bloglist({ blogList, title }) {

    console.log('inside BlogList, displaying blogs');

   function handleDelete(id){
        console.log('delete', id)

        // let newBlogList = blogList.filter((blog)=> blog.id !== id );

        // // let blogsList = JSON.parse(localStorage.getItem('localBlogs'));
        
        // localStorage.setItem('localBlogs', JSON.stringify(newBlogList));
        //     // console.log(blogsList)
        //     // blogsList.unshift(values);

        // setBlogList(blogsList);

        //     // setIsPending(false)


    }


    return (

        <div className="my-20 flex justify-center">
            <div className=" flex flex-col gap-10 w-2/3 ">
                <div className="my-5">
                    <h1 className="text-3xl text-slate-700 font-bold first-letter:uppercase ">{title}</h1>
                    <Divider my="sm" />
                </div>

                {
                    blogList.length !== 0 ? (
                        blogList.map((blog) =>

                        (
                            <div to={`/blogs/${blog.id}`} className="blog flex flex-col  bg-white hover:bg-sky-100/60 p-5 rounded-md shadow-md shadow-gray-200/80 hover:shadow-gray-300 hover:scale-[1.02] transition-all  " key={blog.id}>
                                <div className="flex justify-between items-center">
                                    <span className="inline-block"><Link className="type font-mono text-xs my-2" to={`/filteredblogs/${blog.type}`} >
                                        <Badge variant="outline">{blog.type}</Badge></Link>
                                    </span>
                                    <CloseButton title="Delete this blog" size="md" onClick={() => handleDelete(blog.id)} iconSize={20} />
                                </div>

                                <Link to={`/blogs/${blog.id}`} >
                                    <h1 className="title text-2xl mb-1 text-slate-700 font-bold first-letter:capitalize">{blog.title}</h1>
                                    <div className="w-1/2 flex text-xs text-slate-600 gap-2">
                                        <span> By</span>
                                        <p className="author capitalize ">{blog.author}</p>
                                        on <IconCalendarTime className="inline h-4 self-center" />
                                        <p className="date ">{blog.date}</p>
                                    </div>
                                    <p className="blogContent mt-3 text-slate-600" dangerouslySetInnerHTML={{ __html: `${blog.blogContent.slice(0, 100)}` }} />
                                </Link>
                            </div>

                        )
                        )
                    ) : <div className="text-2xl">Oops! No blog found. Add a new blog.</div>

                }
            </div>
        </div>
    )
}