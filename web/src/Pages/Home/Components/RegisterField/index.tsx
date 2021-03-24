import React, { FormEvent, useCallback, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { FormContainer } from './styles';

const RegisterField: React.FC = () => {
    const [ email, setEmail ] = useState('');

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, [ email ]);

    return (
        <FormContainer onSubmit={handleSubmit} >
            <div className="input-box">
                <input 
                    type="email" 
                    id="email-input"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <label htmlFor="email-input">Email</label>
            </div>
            <button type="submit" >
                Vamos lá
                <FiChevronRight className="icon" />
            </button>
        </FormContainer>
    );
}

export default RegisterField;