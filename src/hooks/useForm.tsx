import {useState} from 'react'

export const useForm = <T extends Object>(form: T) => {
    const [state, setState] = useState(form);
    

    
    const onChange = (value: string, field: keyof T) => {
        setState({
        ...state,
        [field]: value,
        });
    };

    const onReset = () => {
      setState(form);
    };


    return {
        ...state,
        form: state,
        onChange,
        onReset
        
    };
    };