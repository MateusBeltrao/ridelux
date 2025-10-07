import React, { useState } from "react";
import blogdata from "../Blog.json";

function Blog() {

    return (
        <>
            {/* Banner Section */}
            <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
                <div className="banner-section-content text-center z-10">
                    <h6 className="uppercase text-sm lg:text-xl text-white font-bricolage">
                        - Blog & News
                    </h6>
                    <h1 className="text-4xl lg:text-5xl xl:text-8xl font-semibold font-bricolage text-red-600">
                        <span className="text-white font-bricolage">Latest </span> News
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 bg-[#111111] md:grid-cols-2 xl:grid-cols-3 gap-5 lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
                {blogdata.map((blog) => (
                    <div key={blog.id} className="blog-item bg-[#1e1f22] group">
                        <div className="blog-image overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="group-hover:scale-110 transition-all duration-300 w-full h-[250px] object-cover"
                            />
                        </div>
                        <div className="blog-content p-5 py-8">
                            <div className="date bg-red-600 w-fit px-4 py-0.5 text-md text-white font-bricolage rounded-md mb-3">
                                {blog.date}
                            </div>
                            <h4 className="text-lg lg:text-2xl font-bricolage text-white font-semibold uppercase">
                                {blog.name}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Blog;
