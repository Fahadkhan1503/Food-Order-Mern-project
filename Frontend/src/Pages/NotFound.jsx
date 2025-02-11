// import React from 'react'
import {Link} from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <>
        <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="notfound" />
          <h1>LOOK LOST YOU ARE LOST</h1>
          <p>WE CANT SEEM TO FOUND WHAT ARE YOU LOOKING FOR</p>
          <Link to={'/'}> Back to Home 
          <span>
          <HiOutlineArrowNarrowRight />
          </span></Link>
        </div>
        </section>
    </>
  )
}

export default NotFound