import Form from "../Form/Form.jsx";
import { AuthService } from "../../services/auth.js";

const Register = () => {

    const service = new AuthService;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nickname = formData.get('nickname');
        const email = formData.get('email');
        const password = formData.get('password');

        service.register(nickname, email, password);
    }

    const inputList = [
        {label: "Pseudo", type: "text", name:"nickname", value:""},
        {label: "Email", type: "email", name:"email", value:""},
        {label: "Mot de passe", type: "password", name:"pwd", value:""},
        {type: "submit", name:"submitBtn", value:"S'inscrire"}
    ]

    return (
        <Form title="Inscription" inputs={inputList} submit={handleSubmit} formType="auth-form"/>
    )
}

export default Register