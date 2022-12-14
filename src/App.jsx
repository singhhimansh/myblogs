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
  const [searchedList, setSearchList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchHead, setSearchHead] = useState('')



  // fetch blogs from Local Storage
  useEffect(() => {


    localStorage.getItem('localBlogs') || (localStorage.setItem('localBlogs', JSON.stringify([])));

    const allBlogList = JSON.parse(localStorage.getItem('localBlogs'));
    setBlogList(allBlogList)

  }, []);


  //  handle search blogs
  function handleSearch() {
    const search = searchValue.trim().toLowerCase();

    const searchedBlogs = blogList.filter(({ title, author, type }) => title.toLowerCase().includes(search) || author.toLowerCase().includes(search) || type.toLowerCase().includes(search))

    setSearchList(searchedBlogs);
    setSearchValue('');
    setSearchHead(search)

  }


  // css styles for active state of sidebar navlinks
  let activeStyle = {
    color: 'rgb(3 105 161)',
    backgroundColor: '#e0f2fe',
    boxShadow: '-1px 0px 0px 0px #0284c7'
  };


  return (
    <Router>
      {/* navigation bar */}
      <header className="w-full flex flex-col items-center ">

        <div className=" w-full py-5   bg-sky-200 border-b-2 border-sky-300 flex gap-2 justify-around">

          {/* logo */}
          <a href='/' className="logo w-24"><img className='object-contain drop-shadow-lg ' src={logo} alt="blog logo" /></a>

          <div className="navMenu flex items-center gap-4">
            {/* large screen searchbox */}
            <div className="searchbox hidden md:flex items-center relative" >
              <input type="text" id="simple-search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-400/80 focus:border-sky-400/80 block w-full pr-8 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-400/80 dark:focus:border-sky-400/80" placeholder="Search by title, author" required />

              <Link to='/searchedBlogs' onClick={handleSearch} type="button" className="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-sky-700 rounded-r-lg border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">

                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
              </Link>
            </div>
            {/* Blogs and Add new blog buttons */}
            <Link rel="stylesheet" to="/" > <Button >Blogs</Button> </Link>
            <Link rel="stylesheet" to="/Addblog" > <Button>Add New Blog</Button> </Link>
          </div>

        </div>

        {/* Mobile/ small screen searchbox */}
        <div className="searchbox my-7 w-3/4 flex items-center relative md:hidden " >
          <input type="text" id="simple-search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-400/80 focus:border-sky-400/80 block w-full pr-8 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-400/80 dark:focus:border-sky-400/80" placeholder="Search by title, author or category" required />

          <Link to='/searchedBlogs' onClick={handleSearch} type="button" className="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-sky-700 rounded-r-lg border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">

            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">Search</span>
          </Link>
        </div>
      </header>

      <section className='flex flex-col-reverse md:flex-row md:my-16'>

        {/* mains section to display diffrent routes */}
        <main className=' md:w-5/6'>
          <Routes>
            <Route path='/' exact element={<Home blogList={blogList} title='All Blogs' />} />
            <Route path='/searchedBlogs' exact element={<Home blogList={searchedList} title={`Blogs related to :  ${searchHead}`} />} />
            <Route path='/Addblog' element={<NewBlog blogList={blogList} setBlogList={setBlogList} />} />
            <Route path='/blogs/:id' exact element={<BlogDetails blogList={blogList} />} />
            <Route path='/filteredblogs/:type' exact element={<FilteredBlog blogList={blogList} setBlogList={setBlogList} />} />

          </Routes>
        </main>

        {/* sidebar for filter blogs by category/type  */}
        <div className="sidebar lg:w-40 ">

          <div className="flex justify-around mb-3 md:my-0 bg-slate-100 md:bg-transparent shadow-md md:shadow-none md:flex-col text-xs md:text-sm lg:text-base capitalize border-l-2 border-slate-200">
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/filteredblogs/technology' className=' p-3 md:p-4 hover:bg-sky-50 '>Technology</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/filteredblogs/entertainment' className=' p-3 md:p-4 hover:bg-sky-50'>entertainment</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/filteredblogs/Community' className=' p-3 md:p-4 hover:bg-sky-50'>Community</NavLink>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/filteredblogs/other' className=' p-3 md:p-4 hover:bg-sky-50'>others</NavLink>

          </div>

        </div>

      </section>

    </Router>
  );
}

export default App;
