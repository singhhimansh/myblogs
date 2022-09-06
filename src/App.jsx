import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { Button } from '@mantine/core';

import logo from './images/blognobg.png';
import NewBlog from './NewBlog';
import Home from './Home';
import FilteredBlog from './FilteredBlog';
import BlogDetails from "./BlogDetails";



function App() {

  let activeStyle = {
    color: 'rgb(3 105 161)' ,
    backgroundColor:'#e0f2fe',
    // borderLeft: '1px solid #0284c7',
    boxShadow: '-1px 0px 0px 0px #0284c7'
  };





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
        <div className="sidebar w-40 my-10 ">

          <div className="flex flex-col border-l-2 border-slate-200">
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/filteredblogs/technology' className='capitalize p-4 hover:bg-sky-50 '>Technology</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/filteredblogs/entertainment' className='capitalize p-4 hover:bg-sky-50'>entertainment</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/filteredblogs/Community' className='capitalize p-4 hover:bg-sky-50'>Community</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/filteredblogs/other' className='capitalize p-4 hover:bg-sky-50'>other</NavLink>

          </div>

        </div>
      </section>

    </Router>
  );
}

export default App;
