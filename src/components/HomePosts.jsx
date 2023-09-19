/* eslint-disable react/prop-types */
import {IF} from '../url'


const HomePosts = ({post}) => {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[50%] md:w-[30%] h-[180px] flex justify-center items-center">
    <img src={IF+post.photo} alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[50%] md:w-[75%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-3xl text-gray-600">
      {post.title}
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>posted by @{post.username}</p>
       <div className="flex space-x-2 text-sm hidden md:inline">
       <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
       </div>
      </div>
      <p className="text-sm md:text-lg hidden md:inline text-slate-400">{post.desc.slice(0,200)}<span className='text-emerald-400 italic'>...Read more</span></p>
      <p className="text-sm md:hidden text-slate-400">{post.desc.slice(0,70)}<span className='text-emerald-400 italic'>...Read more</span></p>
    </div>

    </div>
  )
}

export default HomePosts