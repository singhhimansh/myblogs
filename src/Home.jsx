// import { useState, useEffect } from 'react';
// import Blog from './NewBlog';
import Bloglist from './Bloglist';

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import BlogDetails from "./BlogDetails";

export default function Home({blogList, title}) {



    // const [blogList, setBlogList] = useState([]);


    // useEffect(() => {
    //     // localStorage.setItem('localBlogs',JSON.stringify(blogList))
    //     localStorage.getItem('localBlogs') ||(localStorage.setItem('localBlogs',JSON.stringify([])));


    //     const allBlogList =  JSON.parse(localStorage.getItem('localBlogs'));
    //     setBlogList(allBlogList)
    //     // console.log(allBlogList)
    //     console.log(blogList)
    // }, [])

    // function handleTypeSearch(type){
    //     console.log('type clicked', type);

    //     let searchedBlogs = blogList.filter((blog)=> blog.type === type );

    //     console.log(searchedBlogs);
    //     setBlogList(searchedBlogs);

    // }




    return (
            <Bloglist blogList={blogList} title={title} />

    )

};
