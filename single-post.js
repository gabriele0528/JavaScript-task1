const postInfo = document.querySelector(".post-info");


const post_id = localStorage.getItem("post_id")

const signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
if (signedInUser) {
    const emailComponent = document.getElementById("user-email");
    emailComponent.innerHTML = signedInUser.email;
}


fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then(res => res.json())
    .then(data => {
        postInfo.innerHTML = `
                <div class="container">
                    <div class="post-title" data-id="${data.id}">${data.title}</div>
                    <div class="post-body">${data.body}</div>
                    <div class="post-meta">
                        <p><strong>User ID:</strong> <span class="user" data-userid="${data.userId}">${data.userId}</span></p>
                        <p><strong>Post ID:</strong> ${data.id}</p>
                    </div>
                </div>
            `;

        const userElement = document.querySelector(".user");

        userElement.onclick = () => {

            localStorage.setItem("user_id", post.userId);


            window.location.href = "user-posts.html";
        };


    })