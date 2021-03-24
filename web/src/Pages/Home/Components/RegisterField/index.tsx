import React, { FormEvent, useCallback, useMemo, useState } from 'react';
import crypto from 'crypto';
import { FiChevronRight } from 'react-icons/fi';

import { useDispatch, useSelector, useStore } from 'react-redux';
import { set_email } from '../../../../store/NotLoggedInfo/actions';
import { ApplicationStore } from '../../../../store';

import { FormContainer } from './styles';

const RegisterField: React.FC = () => {
    const randomInputId = useMemo(() => crypto.randomBytes(8).toString('HEX'), []);

    // const store = useStore<ApplicationStore>();
    const store = useStore<ApplicationStore>();
    const dispatch = useDispatch();

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        
    }, []);

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