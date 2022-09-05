import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from '@mantine/core';

import logo from './images/blognobg.png';
import NewBlog from './NewBlog';
import Home from './Home';
import FilteredBlog from './FilteredBlog';
import BlogDetails from "./BlogDetails";



function App() {


  const [blogList, setBlogList] = useState([]);


  useEffect(() => {
    // localStorage.setItem('localBlogs',JSON.stringify(blogList))
    localStorage.getItem('localBlogs') || (localStorage.setItem('localBlogs', JSON.stringify([])));


    const allBlogList = JSON.parse(localStorage.getItem('localBlogs'));
    setBlogList(allBlogList)
    // console.log(allBlogList)
    // console.log(blogList)
  }, []);

  // function handleTypeSearch(type){
  //     console.log('type clicked', type);

  //     let searchedBlogs = blogList.filter((blog)=> blog.type === type );

  //     console.log(searchedBlogs);
  //     setBlogList(searchedBlogs);

  // }

  return (
    <Router>
      <header className="py-5   bg-sky-200 flex gap-2 justify-around">

        <div className="logo w-24"><img className='object-contain' src={logo} alt="blog logo" /></div>

        <div className="navMenu flex items-center gap-3">
          <Link rel="stylesheet" to="/" > <Button >Blogs</Button> </Link>
          <Link rel="stylesheet" to="/Addblog" > <Button>Add New Blog</Button> </Link>
        </div>

      </header>

      <section className='flex'>
        <main className='w-5/6'>
          <Routes>

            <Route path='/' exact element={<Home blogList={blogList} title='All Blogs' />} />
            <Route path='/Addblog' element={<NewBlog />} />
            <Route path='/blogs/:id' exact element={<BlogDetails blogList={blogList} />} />
            <Route path='/filteredblogs/:type' exact element={<FilteredBlog blogList={blogList} setBlogList={setBlogList} />} />

          </Routes>
        </main>
        <div className="sidebar w-1/6 my-10 ">

          <div className="flex flex-col gap-5 p-4 border-l-2 border-lime-200">
            <Link to='/filteredblogs/technology' className='capitalize'>Technology</Link>
            <Link to='/filteredblogs/entertainment' className='capitalize'>entertainment</Link>
            <Link to='/filteredblogs/Community' className='capitalize'>Community</Link>
            <Link to='/filteredblogs/other' className='capitalize'>other</Link>
          </div>

        </div>
      </section>

    </Router>
  );
}

export default App;
