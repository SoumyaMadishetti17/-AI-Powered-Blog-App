import React, { useEffect, useState } from "react";
import { blog_data } from "../../assets/QuickBlog-Assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    setBlogs(blog_data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h1>All Blog </h1>

      <div className="relative h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-gray-600 text-xs text-left uppercase">
            <tr>
              <th scope="col" className="py-4 px-2 xl:px-6">
                #
              </th>
              <th scope="col" className="py-4 px-2">
                Blog Title
              </th>
              <th scope="col" className="py-4 px-2 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="py-4 px-2 max-sm:hidden">
                Status
              </th>
              <th scope="col" className="py-4 px-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
