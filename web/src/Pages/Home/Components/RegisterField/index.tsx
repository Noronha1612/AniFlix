import React, { FormEvent, useCallback, useMemo, useState } from 'react';
import crypto from 'crypto';
import { FiChevronRight } from 'react-icons/fi';

import { useDispatch, useStore } from 'react-redux';
import { set_email } from '../../../../store/NotLoggedInfo/actions';
import { ApplicationStore } from '../../../../store';

import { FormContainer } from './styles';
import { useHistory } from 'react-router';

const RegisterField: React.FC = () => {
    const randomInputId = useMemo(() => crypto.randomBytes(8).toString('HEX'), []);

    const dispatch = useDispatch();
    const history = useHistory();
    const store = useStore<ApplicationStore>();

    const [ email, setEmail ] = useState(store.getState().NotLoggedInfo.possibleEmail);

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        history.push('/login');
    }, [ history ]);

    return (
        <FormContainer 
            onSubmit={handleSubmit} 
            hasContent={ !!email }
        >
            <div className="input-box">
                <input 
                    type="email" 
                    id={ randomInputId }
                    value={ email }
                    onChange={ (e) => {
                        dispatch(set_email(e.target.value));
                        setEmail(e.target.value);
                    }}
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