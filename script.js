function addBlog() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    let blogList = document.getElementById("blogList");

    let blogDiv = document.createElement("div");
    blogDiv.classList.add("blog");

    blogDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button onclick="deleteBlog(this)">Delete</button>
    `;

    blogList.appendChild(blogDiv);

    // Clear inputs
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

function deleteBlog(button) {
    button.parentElement.remove();
}