const inputs = document.querySelectorAll("input")
const alertComponent = document.querySelector(".alert")
const registerForm = document.getElementById("registerForm");

alertComponent.style.display = "none"

registerForm.addEventListener("submit", event => {
    event.preventDefault();

    //check or password match
    if (inputs[1].value !== inputs[2].value) {
        alertComponent.innerHTML = "Passwords don't match"
        alertComponent.style.display = "block"
        alert("Passwords don't match")
        return

    } else {
        alertComponent.style.display = "none"
    }
    // my user
    const myUser = {
        email: inputs[0].value,
        password: inputs[1].value,

    }
    let newUsers = [myUser]
    // check do we have users
    const users = localStorage.getItem("users")
    if (users) {
        const existingUsers = JSON.parse(users);
        const isUserExisting = existingUsers.find((item) => {
            return item.email === myUser.email
        });

        if (isUserExisting) {
            alert("User already exists");
            return;
        }

        existingUsers.forEach((item) => {
            newUsers.push(item)
        })


    }
    // save users
    localStorage.setItem("users", JSON.stringify(newUsers))
    // navigate
    window.location.href = 'login-2.html';

})