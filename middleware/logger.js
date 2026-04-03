import colors from 'colors';

// Logger Milldeware
const colorMethod = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
}
const logger = (req, res, next)=>{
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`[colorMethod[req.method]]);
    next();
}

export default logger;