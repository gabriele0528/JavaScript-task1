const loginButton = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginButton.onclick = () => {
    const users = localStorage.getItem("users");

    if (users) {
        const usersArray = JSON.parse(users);

        const user = usersArray.find((item) => {
            return item.email === usernameInput.value;
        })

        if (user && user.password === passwordInput.value) {
            window.location.href = 'Index.html';
            localStorage.setItem("signedInUser", JSON.stringify(user));
        } else {
            alert("Wrong username or password");
        }

    }
}