const output = document.querySelector("#output");
const button = document.querySelector("#get-btn-posts");
const btnPost = document.querySelector("#submit");
const form = document.querySelector("#add-post-form");

async function getPostsHtml() {
    try {
        const response =await fetch("http://localhost:3000/api/posts");
        if(!response.ok){
            throw Error("Posts are not fetching")
        }
        const posts = await response.json()
        output.innerHTML="";
        posts.forEach((a) => {
            const pl = document.createElement("div")
            pl.textContent= a.name;
            output.appendChild(pl);
        });

    } catch (e){
        throw new Error(e)
    }

    
}

// POST data from form
async function createPost(event){
    event.preventDefault();
    const name = form.elements["name"].value;
    try {
        const response = await fetch("http://localhost:3000/api/posts",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name })

        });
        
        if(response.ok){
            // Append the new post to the output
            const pl = document.createElement("div");
            pl.textContent = name;
            output.appendChild(pl);
            
            // Clear the form input
            form.elements["name"].value = "";
        }

} catch (e){
    throw new Error(e)
}
}

form.addEventListener("submit", createPost);
button.addEventListener("click",getPostsHtml);
