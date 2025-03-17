import classes from "./FormInput.module.css"

const FormInput = (props) => {
    
    const Label = () => {
        if(props.label){
            return (
                <label htmlFor={props.name} className={classes.label}>{props.label}</label>
            )
        }
        else 
            return (<></>)        
    }
    
    const Input = () => {
        const inputType = props.type === 'submit' ? "button" : "input";
        if(props.type !== "textarea") {
            return (
                <input type={props.type} name={props.name} defaultValue={props.value} className={classes[inputType]}></input>
            )
        }
        else {
            return (
                <textarea name={props.name} defaultValue={props.value} className={classes[inputType]}></textarea>
            )
        }
        
    }

    return (
        <div className={classes['form-group']}>
            {props.label && <Label/>}
            <Input/>
        </div> 
    )
}

export default FormInput;