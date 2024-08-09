import { Form } from "react-bootstrap";
import { UseFormRegisterReturn } from "react-hook-form";
interface InputProps {
    name: string,
    label: string,
    type: string,
    placeholder: string,
    register: UseFormRegisterReturn<string>
}



function Input(props: InputProps) {

    return (<>
        <Form.Group   >
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                type={props.type}
                placeholder={props.placeholder}
                autoFocus
                {...props.register}
            />
        </Form.Group>
    </>);
}

export default Input;