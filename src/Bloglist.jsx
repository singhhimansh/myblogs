import { Link } from "react-router-dom";
import { Badge, CloseButton, Divider, Popover, Text } from '@mantine/core';
import { IconCalendarTime } from '@tabler/icons';


export default function Bloglist({ blogList, title }) {



    // fuction to handle Deleting a Blog (Will Be added later)
    function handleDelete(id) {
        console.log('delete', id)
    }


    return (

        <div className="my-10 md:my-0 flex justify-center">
            <div className=" flex flex-col gap-10 w-[95%] md:4/5 lg:w-2/3 ">
                <div className="px-3 w-full text-center md:text-left">
                    {/* Header for displaying main content */}
                    <h1 className="text-2xl md:text-3xl text-slate-700 font-bold first-letter:uppercase ">{title}</h1>
                    <Divider my="sm" />
                </div>

                {/* display list of Blogs */}
                {
                    blogList.length !== 0 ? (
                        blogList.map((blog) =>

                        (
                            <div to={`/blogs/${blog.id}`} className="blog flex flex-col  bg-white hover:bg-sky-100/60 p-5 rounded-md shadow-md shadow-gray-200/80 hover:shadow-gray-300 hover:scale-[1.02] transition-all  " key={blog.id}>
                                <div className="flex justify-between items-center">
                                    <span className="inline-block"><Link className="type font-mono text-xs my-2" to={`/filteredblogs/${blog.type}`} >
                                        <Badge variant="outline">{blog.type}</Badge></Link>
                                    </span>

                                    {/* delete button with popover*/}
                                    <div className="relative">
                                        <Popover width={200} position="bottom" withArrow shadow="md">
                                            <Popover.Target>
                                                <CloseButton title="Delete this blog" size="md" onClick={() => handleDelete(blog.id)} iconSize={20} />
                                            </Popover.Target>
                                            <Popover.Dropdown>
                                                <Text size="sm">Soon: Button to delete the blog. It's functionality will be added later.</Text>
                                            </Popover.Dropdown>
                                        </Popover>
                                    </div>

                                </div>

                                <Link to={`/blogs/${blog.id}`} >
                                    <h1 className="title text-lg md:text-2xl mb-1 text-slate-700 font-bold first-letter:capitalize">{blog.title}</h1>
                                    <div className="w-1/2 flex text-xs whitespace-nowrap text-slate-600 gap-2">
                                        <span> By</span>
                                        <p className="author capitalize  ">{blog.author}</p>
                                        on <IconCalendarTime className="inline h-4 self-center" />
                                        <p className="date">{blog.date}</p>
                                    </div>
                                    <p className="blogContent mt-3 text-sm md:text-base text-slate-600" dangerouslySetInnerHTML={{ __html: `${blog.blogContent.slice(0, 200)}...` }} />
                                </Link>
                            </div>

                        )
                        )
                    ) : <div className="text-xl md:text-2xl text-center">Oops! No blog found. Add a new blog.</div>

                }
            </div>
        </div>
    )
}