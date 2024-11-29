const galleryPhotos = document.querySelector(".gallery-photos");


const signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
if (signedInUser) {
    const emailComponent = document.getElementById("user-email");
    emailComponent.innerHTML = signedInUser.email;
}


fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => res.json())
    .then(data => {
        galleryPhotos.innerHTML = `
        <div class="grid-container">
                ${data.map(photo => `
                    <div class="grid-item">
                        <img src="${photo.url}" alt="${photo.title}">
                    </div>
                `).join('')}
            </div>
            `;
    })
