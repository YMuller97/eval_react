import FormInput from "../FormInput/FormInput.jsx";
import classes from "./Form.module.css";

const Form = (props) => {

    const InputList = props.inputs.map((input) => 
        <FormInput label={input.label}
                    name={input.name} 
                    type={input.type} 
                    value={input.value}/>
    );
        

    return (
        <div className={classes.main}>
            <h1>{props.title}</h1>
            <form className={classes[props.formType]} onSubmit={props.submit}>
                {InputList}
            </form>
        </div>
    )
}

export default Form;