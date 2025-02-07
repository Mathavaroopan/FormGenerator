import React, { useEffect, useState } from "react";
import { createForm } from "../packages/formGenerator.js";
import "./App.css";
function App() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        createForm("form-container", (formData) => {
            setEmail(formData.email);
            setUsername(formData.username);
            setPassword(formData.password);
            console.log("Form Submitted:", formData);
        });
    }, []);

    return (
        <div>
            <div id="form-container"></div>
            <h3>Form Data for testing</h3>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
        </div>
    );
}

export default App;
