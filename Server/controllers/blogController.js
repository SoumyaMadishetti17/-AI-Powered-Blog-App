import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';
import Comment from '../models/comment.js';
import main from '../configs/gemini.js';

export const addBlog = async (req, res) => {
    try {
        const {title, subTitle, description,  category, isPublished} = JSON.parse( req.body.blog );
        const imageFile = req.file;

        // check if all fields are present
        if (!title || !description || !category || !imageFile ){
            return res.json({ success: false, message: "Missing required fields" });
        }
        const fileBuffer =fs.readFileSync( imageFile.path );

        // upload image to imagekit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/blogs',
        })

        // optimization through imagekit url transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: 'auto'}, // auto compress image
                {format: 'webp'}, // convert to modern webp format
                { width: 1280 } // width resize to 1280px
            ]
        })
        const image= optimizedImageUrl;

        await Blog.create({title, subTitle, description, image, category, isPublished})
        res.json({ success: true, message: "Blog added successfully" });

    }catch (err) {
        res.json({ success: false, message: err.message });
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({isPublished: true})
        res.json({ success: true, blogs });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
}

export const getBlogById = async (req, res) => {
    try {
        const {blogId} = req.params;
        const blog = await Blog.findById(blogId)
        if(!blog){
            return res.json({ success: false, message: "Blog not found" });            
        }
        res.json({ success: true, blog });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
}

export const deleteBlogById = async (req, res) => {
    try {
        const {id}=req.body;
        await Blog.findByIdAndDelete(id);
        // delete all comments associated with the blog
        await Comment.deleteMany({blog: id});
        
        res.json({ success: true, message: "Blog deleted successfully" });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
}


export const togglePublish = async (req, res) => {
    try {
        const {id} = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({ success: true, message: "Blog status updated" });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
}

export const addComment = async (req, res) => {
    try {
        const {blog, name, content} = req.body;
        await Comment.create({ blog, name, content});
        res.json({ success: true, message: "Comment added for review" });
    } catch (err) {
            res.json({ success: false, message: err.message });
    }
}

export const getBlogComments = async (req, res) => {
    try {
        const {blogId} = req.body;
        const comments = await Comment.find({blog: blogId, isApproved:true}).sort({ createdAt: -1});
        res.json({ success: true, comments });
    } catch (err) {
            res.json({ success: false, message: err.message });
    }
}

export const generateContent = async (req, res) => {
    try {
        const {prompt} = req.body;
        const content = await main(prompt + 'Generate a blog content for this' )
        res.json({ success: true, content });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
}