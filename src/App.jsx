import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link, NavLink, useSearchParams } from "react-router-dom";
import { Button } from '@mantine/core';

import logo from './images/blognobg.png';
import NewBlog from './NewBlog';
import Home from './Home';
import FilteredBlog from './FilteredBlog';
import BlogDetails from "./BlogDetails";



function App() {

  const [blogList, setBlogList] = useState([]);


  // const [searchParams,setSearchParams] = useSearchParams();


  useEffect(() => {
    // localStorage.setItem('localBlogs',JSON.stringify(blogList))
    localStorage.getItem('localBlogs') || (localStorage.setItem('localBlogs', JSON.stringify([])));


    const allBlogList = JSON.parse(localStorage.getItem('localBlogs'));
    setBlogList(allBlogList)
    // console.log(allBlogList)
    // console.log(blogList)
  }, []);

  let activeStyle = {
    color: 'rgb(3 105 161)',
    backgroundColor: '#e0f2fe',
    boxShadow: '-1px 0px 0px 0px #0284c7'
  };


  function handleSearch(e) {
    e.preventDefault()
    // console.log(e);
    // console.log(e.target[0].value);

    const search = e.target[0].value.trim().toLowerCase();

    console.log('searching ', search);

    const searchedBlogs = blogList.filter(({ title, author, type }) => title.toLowerCase().includes(search) || author.toLowerCase().includes(search) || type.toLowerCase().includes(search))

    console.log(searchedBlogs);
    setBlogList(searchedBlogs);




    // let searchedBlogs = blogList.filter((blog)=> blog.type === type );

    // console.log(searchedBlogs);
    // setBlogList(searchedBlogs);

  }






  return (
    <Router>
      <header className="py-5   bg-sky-200 flex gap-2 justify-around">

        <a href='/' className="logo w-24"><img className='object-contain' src={logo} alt="blog logo" /></a>

        <div className="navMenu flex items-center gap-3">

          <form className="flex items-center relative" onSubmit={(e)=>handleSearch(e)}>
            <label htmlFor="simple-search" className="sr-only">Search</label>

            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-400/80 focus:border-sky-400/80 block w-full pr-8 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-400/80 dark:focus:border-sky-400/80" placeholder="Search by title, author" required />
            
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-sky-700 rounded-r-lg border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
              <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
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
