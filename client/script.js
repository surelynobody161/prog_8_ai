document.getElementById('submit').addEventListener('click', async () => {
    const input = document.getElementById('input').value;
    const responseDiv = document.getElementById('response');

    if (input.trim() === "") {
        responseDiv.innerText = "Please enter a message.";
        return;
    }

    const response = await fetch("/ask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: input })
    });

    const data = await response.json();
    responseDiv.innerText = data.reply;
});
