import express from 'express';
import {getPosts, getPost, createPost, updatePost, deletePost} from '../controllers/postController.js'
const router = express.Router();






// GET all posts as per limit query parameter
router.get("/",getPosts);

// GET single post
router.get("/:id",getPost)

// Create a new post--- first built one post formatted, then push to posts
router.post("/",createPost)


// Update posts --- find the post from posts, then reassign name
router.put('/:id',updatePost)



//Delete the post --- check the post id (find the post) then filter out that post and assing to posts 
router.delete("/:id",deletePost)
export default router;