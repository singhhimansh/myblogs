// import { useState, useEffect } from 'react';
// import Blog from './NewBlog';
import Bloglist from './Bloglist';

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import BlogDetails from "./BlogDetails";

export default function Home({blogList, title}) {






    return (
            <Bloglist blogList={blogList} title={title} />

    )

};
