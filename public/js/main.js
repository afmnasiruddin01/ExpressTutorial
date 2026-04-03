const output = document.querySelector("#output");
const button = document.querySelector("#get-btn-posts");

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
button.addEventListener("click",getPostsHtml);
