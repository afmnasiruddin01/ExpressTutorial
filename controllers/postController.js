let posts = [
    {id:1, name: "Nasir"},
    {id:2, name: "Parvin"},
    {id:3, name: "Karim"},
]

// @desc   Get posts
// @route  GET /api/posts

export const getPosts = (req,res,next)=>{
    const limit = parseInt(req.query.limit || req.query.limits, 10);
    if(!Number.isNaN(limit) && limit>0){ 
        return res.status(200).json(posts.slice(0,limit));
    }
        res.json(posts);
}

// @desc   Get  single posts
// @route  GET /api/posts/:id

export const getPost = (req, res,next)=>{
    const id = parseInt(req.params.id, 10);
    const post = posts.find((x) => x.id === id);
    if(!post){
        const error = new Error(`A post with the ${id} is not found`);
        error.status=404;
        return next(error);
    }
    res.status(200).json(post);
    
}



// @desc   Create  post
// @route  POST /api/posts

export const createPost = (req,res,next)=>{
    const newPosts = {
        id: posts.length+1,
        name: req.body.name
    }

    if(!newPosts.name){
        const error = new Error(`Please enter a name to for the post`);
        error.status=404;
        return next(error);
    }
    posts.push(newPosts);
    res.status(201).json(posts);
}

// @desc   Update post
// @route  PUT /api/posts/:id

export const updatePost = (req, res, next)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((x)=> x.id=== id);
    if(!post){
        const error = new Error(`A post with the ${id} is not available to update`);
        error.status=404;
        return next(error);
    }
    post.name= req.body.name;
    res.status(200).json(posts)
}


// @desc   Delete post
// @route  DELETE /api/posts/:id

export const deletePost = (req,res, next)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((x)=>x.id=id);
    if(!post){
        const error = new Error(`A post with the ${id} is not available to delete`);
        error.status=404;
        return next(error);
    }
    posts=posts.filter((x)=>x.id!=id);
    res.status(200).json({msg: `The post of Id: ${id} is deleted`})
}