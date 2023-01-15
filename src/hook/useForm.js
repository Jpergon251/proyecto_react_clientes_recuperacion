import React, { useState } from 'react'


const useForm = (initiralForm = {}) => {
    const [formState, setFormState] = useState(initiralForm)

    const onInputChange = ({target}) => {
        const {name, value} = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initiralForm)
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }

}
export default useForm