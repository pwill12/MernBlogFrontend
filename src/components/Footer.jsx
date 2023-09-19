

const Footer = () => {
  return (
    <>
<div className="mt-32 w-full text-gray-400 bg-gray-200 px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
       <div className="flex flex-col text">
         <p>Featured Blogs</p>
         <p>Most viewed</p>
         <p>Readers Choice</p>
       </div>

       <div className="flex flex-col">
         <p>Forum</p>
         <p>Support</p>
         <p>Recent Posts</p>
       </div>

       <div className="flex flex-col">
         <p>Privacy Policy</p>
         <p>About Us</p>
         <p>Terms & Conditions</p>
         <p>Terms of Service</p>
       </div>
    </div>
    <p className="py-2 pb-6 text-center bg-gray-200 text-sm text-gray-400">All rights reserved @Prince Blog 2023</p>
    </>
    
  )
}

export default Footer