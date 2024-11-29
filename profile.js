const userImage = document.getElementById('user-image');
const changeImageInput = document.getElementById('new-image');
const changeImageButton = document.getElementById('change-image-button');
const userEmail = document.getElementById('user-email');
const userEmail2 = document.getElementById('user-email2');
const changePasswordInput = document.getElementById('new-password');
const changePasswordButton = document.getElementById('change-password-button');

const signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
if (signedInUser) {
    userEmail.innerHTML = signedInUser.email;
    userEmail2.innerHTML = signedInUser.email;
}

function updateUserImage() {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(user => user.email === signedInUser.email);
    if (user.image) {
        userImage.src = user.image;
    }
}

changeImageButton.addEventListener('click', () => {
    if (changeImageInput.value) {
        userImage.src = changeImageInput.value;
        changeImageInput.value = "";

        const users = JSON.parse(localStorage.getItem("users"));

        if (users) {
            const updatedUsers = users.map((user) => {
                if (user.email === signedInUser.email) {
                    user.image = userImage.src;
                }
                return user;
            })
            localStorage.setItem("users", JSON.stringify(updatedUsers))
        }
    }
});

changePasswordButton.addEventListener('click', () => {
    if (changePasswordInput.value) {
        const newPassword = changePasswordInput.value;
        changePasswordInput.value = "";

        const users = JSON.parse(localStorage.getItem("users"));

        if (users) {
            const updatedUsers = users.map((user) => {
                if (user.email === signedInUser.email) {
                    user.password = newPassword;
                }
                return user;
            })
            localStorage.setItem("users", JSON.stringify(updatedUsers))
        }
    }
});

updateUserImage();