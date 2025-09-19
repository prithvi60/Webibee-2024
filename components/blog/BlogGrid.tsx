import React from 'react'
import { BlogCard } from './BlogCard'

const BlogGrid = ({ posts }: { posts: any }) => {
    return (
        <section className='w-full p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 space-y-10'>
            <h1 className={`font-EbGaramond text-4xl xl:text-6xl tracking-wider font-medium text-center md:text-start`}>
                Thoughts that <strong className="text-info">Matter</strong>
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {posts.map((list: any, idx: any) => (
                    <BlogCard list={list} key={idx} blog/>
                ))}
            </div>
        </section>
    )
}

export default BlogGrid