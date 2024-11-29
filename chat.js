const signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
if (signedInUser) {
    const emailComponent = document.getElementById("user-email");
    emailComponent.innerHTML = signedInUser.email;
}

const sendButton = document.getElementById("send-button");
const messagesContainer = document.getElementById("messages");
const messageInput = document.getElementById("message-input");


function updateMessages() {
    const messages = JSON.parse(localStorage.getItem('messages'));

    if (!messages) {
        return;
    }

    messagesContainer.innerHTML = messages.map((message) => {
        return `
        <div class="border-bottom">
            <div class="message">${message.text}</div>
            <div class="message-time small-text">${message.time}</div>
        </div>
        `
    }).join("");

    messagesContainer.scrollTo(0, 10000);
}


updateMessages();


sendButton.onclick = async () => {
    let messages = JSON.parse(localStorage.getItem('messages'));

    if (!messages) {
        messages = [];
    }

    messages.push({
        text: messageInput.value,
        time: new Date().toLocaleString()
    })
    localStorage.setItem('messages', JSON.stringify(messages))
    updateMessages();
    messageInput.value = "";
}