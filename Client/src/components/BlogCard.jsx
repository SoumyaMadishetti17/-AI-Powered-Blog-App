import React from 'react'

const BlogCard = ({blog}) => {
    const {title,description,category,image,_id}=blog;

  return (
    <div>
        <img src={image} alt="aspect-video" />
        <span className=''>{category} </span>

    </div>
  )
}

export default BlogCard