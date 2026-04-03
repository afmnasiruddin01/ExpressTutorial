const notFoundHandler = (req,res,next)=>{
    const error = new Error (`Api is not right`);
    error.status= 404;
    return next(error);
};

export default notFoundHandler;