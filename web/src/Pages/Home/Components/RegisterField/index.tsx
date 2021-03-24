import React, { FormEvent, useCallback, useMemo } from 'react';
import crypto from 'crypto';
import { FiChevronRight } from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import { set_email } from '../../../../store/NotLoggedInfo/actions';

import { FormContainer } from './styles';
import { useHistory } from 'react-router';

const RegisterField: React.FC = () => {
    const randomInputId = useMemo(() => crypto.randomBytes(8).toString('HEX'), []);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        history.push('/login');
    }, [ history ]);

    return (
        <FormContainer onSubmit={handleSubmit} >
            <div className="input-box">
                <input 
                    type="email" 
                    id={ randomInputId }
                    onChange={ (e) => dispatch(set_email(e.target.value)) }
                />
                <label htmlFor={ randomInputId }>Email</label>
            </div>
            <button type="submit" >
                Vamos lá
                <FiChevronRight className="icon" />
            </button>
        </FormContainer>
    );
}

export default RegisterField;