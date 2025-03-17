import Form from "../Form/Form.jsx";
import { MovieService } from "../../services/movie.js";

const AddMovie = () => {

    const service = new MovieService;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const movieData = {
            title: formData.get('title'),
            info: formData.get('synopsis'),
            releaseDate: formData.get('releaseDate'),
            image: formData.get('imageUrl')
        }

        service.createMovie(movieData);
    }

    const inputList = [
        {label: "Titre", type: "text", name:"title", value:""},
        {label: "Description", type: "textarea", name:"synopsis", value:""},
        {type: "date", name:"releaseDate", value:"Date de sortie"},
        {label: "Url de l'image", type: "text", name:"imageUrl", value:""},
        {type: "submit", name:"submitBtn", value:"Ajouter"}
    ]

    return (
        <Form title="Connexion" inputs={inputList} submit={handleSubmit} formType="auth-form"/>
    )
}

export default AddMovie;