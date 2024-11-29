const body = document.querySelector("body");

const signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
if (signedInUser) {
    const emailComponent = document.getElementById("user-email");
    emailComponent.innerHTML = signedInUser.email;
}
let posts = [];

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {

        posts = data;


        posts.forEach(post => {
            body.innerHTML += `
                        <div class="container">
                            <div class="post-title" data-id="${post.id}">${post.title}</div>
                            <div class="post-body">${post.body}</div>
                            <div class="post-meta">
                                <p><strong>User ID:</strong> <span class="user" data-userid="${post.userId}">${post.userId}</span></p>
                                <p><strong>Post ID:</strong> ${post.id}</p>
                            </div>
                        </div>
                    `;
        });

        const titles = document.querySelectorAll(".post-title");
        titles.forEach((item, index) => {
            item.onclick = () => {
                localStorage.setItem("post_id", posts[index].id);
                window.location.href = "single-post.html";
            };
        });


    })
