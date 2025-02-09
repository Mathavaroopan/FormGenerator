export function createForm(containerId, onSubmit) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`'${containerId}' container is not found.`);
        return;
    }

    container.textContent = ""; 
    const form = document.createElement("form");
    form.style.padding = "20px";
    form.style.borderRadius = "10px";

    function createInput(type, name, placeholder) {
        const input = document.createElement("input");
        input.type = type;
        input.name = name;
        input.placeholder = placeholder;
        input.required = true;
        input.style.display = "block";
        input.style.margin = "10px 0";
        input.style.padding = "10px";
        input.style.border = "2px solid lightGray";
        input.style.borderRadius = "5px";
        input.style.backgroundColor = "white";
        input.style.color = "black";
        return input;
    }

    function sanitizeInput(value) {
        return value
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;");
    }

    const emailInput = createInput("email", "email", "Enter your email");
    const usernameInput = createInput("text", "username", "Enter your username");
    const passwordInput = createInput("password", "password", "Enter your password");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    submitButton.style.marginTop = "10px";
    submitButton.style.padding = "10px";
    submitButton.style.border = "none";
    submitButton.style.borderRadius = "5px";
    submitButton.style.backgroundColor = "blue";
    submitButton.style.color = "white";
    submitButton.style.cursor = "pointer";

    form.onsubmit = (event) => {
        event.preventDefault();
        const formData = {
            email: sanitizeInput(emailInput.value),
            username: sanitizeInput(usernameInput.value),
            password: sanitizeInput(passwordInput.value),
        };
        onSubmit(formData);
        emailInput.value = "";
        usernameInput.value = "";
        passwordInput.value = "";
    };

    form.appendChild(emailInput);
    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);
    container.appendChild(form);
}
