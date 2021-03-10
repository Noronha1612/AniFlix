import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { FaqContentContainer } from './styles';

interface FaqContentProps {
    children?: React.ReactNode;
    title: string;
}

const FaqContent: React.FC<FaqContentProps> = ({ title, children }) => {
    const [ active, setActive ] = useState(false);

    return (
        <FaqContentContainer
            active={ active }
            onClick={ () => setActive(!active) }
        >
        <div className="always-shown">
            <h4>{ title }</h4>
            <FiPlus className="icon" size={40} color="#FFF" />
        </div>
        <div className="content-togglable">
            <p>
                { children }    
            </p>
        </div>
    </FaqContentContainer>
    );
}

export default FaqContent;