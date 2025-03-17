import Form from "../Form/Form.jsx";
import { AuthService } from "../../services/auth.js";

const Login = () => {

    const service = new AuthService;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email')
        const password = formData.get('password')
        
        service.login(email, password)
    }

    const inputList = [
        {label: "Email", type: "email", name:"email", value:""},
        {label: "Mot de passe", type: "password", name:"pwd", value:""},
        {type: "submit", name:"submitBtn", value:"Se connecter"}
    ]

    return (
        <Form title="Connexion" inputs={inputList} submit={handleSubmit} formType="auth-form"/>
    )
}

export default Login;