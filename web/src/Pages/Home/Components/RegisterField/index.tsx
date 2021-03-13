import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

const RegisterField: React.FC = () => {
    return (
        <Container>
            <input type="text" placeholder="Email" />
            <button>
                Vamos lá
                <FiChevronRight className="icon" />
            </button>
        </Container>
    );
}

export default RegisterField;